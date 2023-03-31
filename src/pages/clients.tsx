import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';

import { t } from '@lingui/macro';
import MainLayout from '@/layouts/mainLayout';
import { loadTranslation } from '@/utils/utils';

export const getStaticProps: GetStaticProps = async (ctx) => {
    const translation = await loadTranslation(
        ctx.locale!,
        process.env.NODE_ENV === 'production'
    );

    return {
        props: {
            translation
        }
    };
};
const Clients = () => {
    const clientsList = [
        { title: 'Eyephone', src: '/contributors/eyephone.png' },
        { title: 'Emove', src: '/contributors/emove.png' },
        { title: 'Glowking', src: '/contributors/glowking.png' }
    ];
    return (
        <>
            <Head>
                <title>
                    {t({
                        id: 'Contributors.head.title',
                        message: 'In All Hypes you are the protagonist!'
                    })}
                </title>
                <meta
                    name="description"
                    content={t({
                        id: 'Contributors.head.meta.description',
                        message:
                            "For us, you are the hero of real life, that's why for All Hypes, you are the protagonist!"
                    })}
                />
            </Head>

            <div className="container mx-auto min-h-screen">
                <h1 className="py-10 text-center text-4xl font-semibold">
                    Our Contributors
                </h1>
                <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-2">
                    {clientsList.map(
                        ({ title, src }, index) => (
                            <div
                                className={`${
                                    index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                                }`}
                                key={index}
                            >
                                <div
                                    className={`relative h-[150px] w-[300px] `}
                                >
                                    <Image
                                        className="object-contain"
                                        src={src}
                                        alt=""
                                        fill
                                    />
                                </div>
                                <h2 className="font-xl mt-2 text-center font-medium">
                                    {title}
                                </h2>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

Clients.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Clients;
