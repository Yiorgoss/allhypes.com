import type { NextApiRequest, NextApiResponse } from 'next';
import contactSchema from '@/utils/contactSchema';

const mailer = require('@sendgrid/mail');

type Data = {
    name: string;
};

const createEmailToAllhypes = ({
    name,
    email,
    phone,
    message
}: {
    name: string;
    email: string;
    phone: number;
    message: string;
}): {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
} => {
    //TODO: make emails greek
    return {
        to: 'allhypesgr@gmail.com',
        from: 'allhypesAutomated@allhypes.com',
        subject: `NEW MESSAGE from ${name}`,
        text: `Name: ${name} \nEmail: ${email} \nPhone: ${phone} \n\nMessage: \n${message}`,
        html: `Name: ${name} <br/>Email: ${email} <br/>Phone: ${phone} <br/><br/>Message: <br/>${message}`
    };
};

const createEmailToUser = ({
    name,
    email
}: {
    name: string;
    email: string;
}) => {
    return {
        to: email,
        from: 'DONOTREPLY@allhypes.com',
        subject: 'Thank you for your message',
        text: `Thank you ${name} for getting in touch. /nOne of our representatives will reach out to speak to you shortly`,
        hmtl: `Thank you ${name} for getting in touch. <br/>One of our representatives will reach out to speak to you shortly`
    };
};

const handleReCAPTCHA = async (token: string) => {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env['RECAPTCHA_SECRET_KEY']}&response=${token}`;

    const googRes = await fetch(url, {
        method: 'POST'
    })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            return data.success;
        });
    return googRes;
};
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        if (!process.env['SENDGRID_API_KEY']) {
            throw new Error('ERROR: ENV Var: SENDGRID_KEY not found');
        }
        mailer.setApiKey(process.env['SENDGRID_API_KEY']);
        const { token, data } = req.body;

        if (!token) {
            return res.status(400);
        }
        const isRecaptchaPassed = handleReCAPTCHA(token);
        if (!isRecaptchaPassed) {
            return res.status(403);
        }

        const { name, email, phone, message } = await contactSchema.validate(
            data
        );

        const emailToAllhypes = createEmailToAllhypes({
            name: name,
            email: email,
            phone: phone,
            message: message
        });

        mailer
            .send(emailToAllhypes)
            .then(() => {
                console.log('Email Successfully sent');
                return;
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
    return res.status(200).json({ name: 'all good' });
}
