import { useState, useEffect } from 'react';
import { t } from '@lingui/macro';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const ContactForm = () => {
    const schema = yup.object().shape({
        name: yup.string().required('Please enter your full name'),
        phone: yup.number().required('Please enter a phone number'),
        email: yup.string().email().required('Please enter a valid email'),
        messageBody: yup.string().required()
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: any, e: any) => {
        e.preventDefault();
        console.log('data', data);
    };
    const onError = (err: any) => {};
    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="grid w-full grid-cols-1 p-10 md:grid-cols-2">
                <input
                    className="text-md m-2 rounded-lg py-2 px-2 text-secondary "
                    placeholder={t({
                        id: 'contactForm.input.name',
                        message: 'Full Name'
                    })}
                    {...register('name')}
                />
                <input
                    className="text-md m-2 rounded-lg py-2 px-2 text-secondary "
                    placeholder={t({
                        id: 'contactForm.input.number',
                        message: 'Phone number'
                    })}
                    {...register('phone')}
                />
                <input
                    className="text-md col-span-full m-2 rounded-lg py-2 px-2 text-secondary"
                    placeholder={t({
                        id: 'contactForm.input.email',
                        message: 'Email'
                    })}
                    {...register('Email')}
                />
                <textarea
                    className="text-md col-span-full m-2 h-[30vh] rounded-lg py-2 px-2 text-secondary"
                    placeholder={t({
                        id: 'contactForm.input.message',
                        message: 'Message'
                    })}
                    {...register('message')}
                />
                <div className="col-span-full ml-auto ">
                    <div
                        className="m-2 inline w-fit rounded-lg py-2 px-6 hover:text-tertiary"
                        onClick={() => console.log('abc')}
                    >
                        {t({ id: 'contactForm.input.reset', message: 'Reset' })}
                    </div>
                    <input
                        className="m-2 ml-auto w-fit rounded-lg bg-white py-2 px-6 text-secondary hover:bg-secondary hover:text-primary"
                        value={t({
                            id: 'contactForm.input.submit',
                            message: 'Submit'
                        })}
                        type="submit"
                    />
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
