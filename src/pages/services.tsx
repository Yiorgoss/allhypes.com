import Image from 'next/image';
import Head from 'next/head';
import { GetStaticProps, GetServerSideProps } from 'next';
import { ReactElement } from 'react';

import { t } from '@lingui/macro';

import DescSection from '@/components/descSection';
import ServicesSidebarLayout from '@/layouts/servicesSidebarLayout';
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

const Services = () => {
    return (
        <>
            <Head>
                <title>
                    {t({
                        id: 'Services.head.title',
                        message: 'All Hypes means always being on top!'
                    })}
                </title>
                <meta
                    name="description"
                    content={t({
                        id: 'Services.head.meta.description',
                        message:
                            "Reaching the top is not difficult! It's hard to stay on top and here comes All Hypes!"
                    })}
                />
            </Head>
                <div className="md:h-full bg-secondary rounded-none md:rounded-lg h-[200px] flex justify-center items-center text-primary text-4xl">
                    Services we Offer
                </div>
        </>
    );
};

Services.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    );
};

export default Services;
