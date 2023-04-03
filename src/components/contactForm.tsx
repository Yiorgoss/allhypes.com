import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

import { t } from '@lingui/macro';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ReCAPTCHA from 'react-google-recaptcha';

import ResponseBox from '@/components/responseBox';
import contactSchema from '@/utils/contactSchema';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm({
        resolver: yupResolver(contactSchema)
    });

    const [serverResponse, setServerResponse] = useState<boolean>();
    const [message, setMessage] = useState('');

    const captchaRef = useRef<ReCAPTCHA>(null);

    const onSubmit = async (data: any, e: any) => {
        //recaptcha stuff
        if (!captchaRef.current) {
            return;
        }
        e.preventDefault();
        window.scrollTo(0, 0);
        const token = captchaRef.current.getValue()!;

        const dataWithToken = {
            token: token,
            data: data
        };
        const res = await fetch('/api/contact', {
            method: 'POST',
            mode: 'cors',
            headers: {
                Accept: 'application/json, text/plain */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataWithToken)
        });
        const response = res.status === 200;
        setServerResponse(response);

        if (response) {
            setMessage(
                t({
                    id: 'contactForm.successMessage',
                    message: 'Thank you for reaching out'
                })
            );
            reset();
        } else {
            setMessage(
                t({
                    id: 'contactForm.errorMessage',
                    message: 'Error, please contact us via phone'
                })
            );
        }
        e.preventDefault();
    };
    const onError = (err: any, e: any) => {
        console.log('error', err);
        window.scrollTo(0, 0);
        e.preventDefault();
    };

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="grid w-full grid-cols-1 p-10 md:grid-cols-2">
                <input
                    className={`text-md m-2 rounded-lg py-2 px-2 text-secondary ${
                        errors.name ? 'outline outline-2 outline-red-500' : ''
                    }`}
                    placeholder={t({
                        id: 'contactForm.input.name',
                        message: 'Full Name'
                    })}
                    disabled={isSubmitting}
                    {...register('name')}
                />
                <input
                    className={`text-md m-2 rounded-lg py-2 px-2 text-secondary ${
                        errors.phone ? 'outline outline-2 outline-red-500' : ''
                    } `}
                    placeholder={t({
                        id: 'contactForm.input.number',
                        message: 'Phone number'
                    })}
                    disabled={isSubmitting}
                    {...register('phone')}
                />
                <input
                    className={`text-md col-span-full m-2 rounded-lg py-2 px-2 text-secondary ${
                        errors.email ? 'outline outline-2 outline-red-500' : ''
                    } `}
                    placeholder={t({
                        id: 'contactForm.input.email',
                        message: 'Email'
                    })}
                    disabled={isSubmitting}
                    {...register('email')}
                />
                <textarea
                    className="text-md col-span-full m-2 h-[30vh] rounded-lg py-2 px-2 text-secondary"
                    placeholder={t({
                        id: 'contactForm.input.message',
                        message: 'Message'
                    })}
                    disabled={isSubmitting}
                    {...register('message')}
                />
                <div className="col-span-full flex flex-col items-end justify-end md:flex-row ">
                    <div className="">
                        <ReCAPTCHA
                            sitekey="6Lf2_DslAAAAAGEiNhA_60kwofaYWGahDYVJx5sn"
                            size="normal"
                            ref={captchaRef}
                        />
                    </div>
                    <div
                        className="m-2 inline h-fit w-fit rounded-lg py-2 px-6 hover:text-tertiary"
                        onClick={() => reset()}
                    >
                        {t({ id: 'contactForm.input.reset', message: 'Reset' })}
                    </div>
                    <input
                        className="m-2 h-fit w-fit rounded-lg bg-white py-2 px-6 text-secondary hover:bg-secondary hover:text-primary"
                        value={t({
                            id: 'contactForm.input.submit',
                            message: 'Submit'
                        })}
                        type="submit"
                    />
                </div>
            </div>
            {isSubmitSuccessful && (
                <ResponseBox text={message} status={serverResponse} />
            )}
        </form>
    );
};

export default ContactForm;
