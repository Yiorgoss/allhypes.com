import Head from "next/head"
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';

import {t} from "@lingui/macro"
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
const Contributors = () => {
    const contributorsList = [
        { title: 'psdm', src: '/contributors/psdm.png' },
        { title: 'eyephone', src: '/contributors/' },
        { title: 'emove', src: '/contributors/' },
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
                        message: "For us, you are the hero of real life, that's why for All Hypes, you are the protagonist!"
                    })}
        />
        </Head>

        <div className="container mx-auto mt-[100px] min-h-screen">
        <h1 className="py-10 text-center text-4xl font-semibold">
        Our Contributors
        </h1>
        <div className="grid grid-cols-3">
        {contributorsList.map(({ title, src }, index) => (
            <div className="mx-auto" key={index}>
                <div className="relative h-[150px] w-[300px] bg-black">
                    <Image src={src} alt="" fill />
                </div>
                <h2 className="font-xl text-center font-medium">
                    {title}
                </h2>
            </div>
        ))}
                </div>
            </div>
        </>
    );
};
Contributors.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Contributors;
