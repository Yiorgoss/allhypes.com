import Head from 'next/head';
import { ReactElement } from 'react';

import { t } from '@lingui/macro';
import MainLayout from '@/layouts/mainLayout';
import ContactForm from '@/components/contactForm';

const Contact = () => {
    return (
        <>
            <Head>
                <title>
                    {t({
                        id: 'Contact.head.title',
                        message: 'All Hypes means YOU !'
                    })}
                </title>
                <meta
                    name="description"
                    content={t({
                        id: 'Contact.meta.description',
                        message:
                            'At All Hypes everything is you! Our 360° experience will make you a "captain" in your own career'
                    })}
                />
            </Head>

            <div className="container mx-auto mt-[100px]">
                <h1 className=" py-10 text-center text-3xl font-semibold tracking-wider text-secondary">
                    {t({ id: 'Contact.title', message: 'Contact Us' })}
                </h1>
                <ContactForm />
            </div>
        </>
    );
};

Contact.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Contact;
