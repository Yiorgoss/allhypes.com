const { google } = require('googleapis');

import {} from 'googleapis';

import type { NextApiRequest, NextApiResponse } from 'next';
import talentSchema from '@/utils/talentSchema';

const mailer = require('@sendgrid/mail');

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const data = await talentSchema.validate(req.body);

        const googleRes = await addDataToGoogleSheet(data);

        if (googleRes.status === 200) {
            const mailToCustomer = createEmailToUser({
                name: data.name,
                email: data.email
            });

            const mailToAllhypes = createEmailToAllHypes(data);

            if (!process.env['SENDGRID_API_KEY']) {
                throw new Error('ERROR: ENV Var: SENDGRID_KEY not found');
            }
            mailer.setApiKey(process.env['SENDGRID_API_KEY']);

            mailer
                .send(mailToCustomer)
                .then(() => {
                    console.log('Customer Email Sent Successfully');
                    return;
                })
                .catch((err: any) => {
                    console.log(err);
                });
            mailer
                .send(mailToAllhypes)
                .then(() => {
                    console.log('Allhypes Email Sent Successfully');
                    return;
                })
                .catch((err: any) => {
                    console.log(err);
                });
            return res.status(200).end();
        }
        return res.status(400).end();
    }
    return res.status(405).end();
}
const addDataToGoogleSheet = async (data: {
    name: string;
    email: string;
    phone: number;
    igAcc?: string | undefined;
    igFollowers?: string | undefined;
    ttAcc?: string | undefined;
    ttFollowers?: string | undefined;
    ytAcc?: string | undefined;
    ytFollowers?: string | undefined;
    cpaIGPost?: string | undefined;
    cpaIGStory?: string | undefined;
    cpaIGGive?: string | undefined;
    cpaTTVideo?: string | undefined;
    cpaYTVideo?: string | undefined;
    specialOffers?: string | undefined;
}) => {
    const keys = process.env['GOOGLE_SHEETS_KEYS'];
    if (!keys) {
        throw new Error('The $CREDS environment variable was not found!');
    }

    const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(keys),
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const service = google.sheets({ version: 'v4', auth });

    const spreadsheetId = '1VL_sEqXI2VNrCol9EEqbfjArT9bUgfyvmdk-CV7O2MQ';

    //All of the first sheet
    const range = 'Sheet1';

    //order matters so be careful
    const values = [
        [
            data.name,
            data.phone,
            data.email,
            data.igAcc,
            data.igFollowers,
            data.cpaIGStory,
            data.cpaIGPost,
            data.cpaIGGive,
            data.ttAcc,
            data.ttFollowers,
            data.cpaTTVideo,
            data.ytAcc,
            data.ytFollowers,
            data.cpaYTVideo,
            data.specialOffers ? data.specialOffers.replaceAll('\n', '_') : ''
        ]
    ];

    const googleResponse = await service.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: range,
        valueInputOption: 'RAW',
        resource: {
            values
        }
    });

    console.log('google res status', googleResponse.status);
    return googleResponse;
};

const createEmailToAllHypes = (data: {
    name: string;
    email: string;
    phone: number;
    igAcc?: string | undefined;
    igFollowers?: string | undefined;
    ttAcc?: string | undefined;
    ttFollowers?: string | undefined;
    ytAcc?: string | undefined;
    ytFollowers?: string | undefined;
    cpaIGPost?: string | undefined;
    cpaIGStory?: string | undefined;
    cpaIGGive?: string | undefined;
    cpaTTVideo?: string | undefined;
    cpaYTVideo?: string | undefined;
    specialOffers?: string | undefined;
}) => {
    let str = '';
    Object.entries(data).forEach(([key, value]) => {
        str += `\n${key}       ${value}\n`;
    });

    const htmlStr = str.replace('\\t', '&emsp').replace('\\n', '<br/>');

    return {
        to: 'allhypesgr@gmail.com',
        from: 'newSignUp@allhypes.com',
        subject: 'User has Signed Up',
        text: str,
        html: htmlStr
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
        text: `Thank you ${name} for getting in touch. \nOne of our representatives will reach out to speak to you shortly`,
        hmtl: `Thank you ${name} for getting in touch. <br/>One of our representatives will reach out to speak to you shortly`
    };
};
