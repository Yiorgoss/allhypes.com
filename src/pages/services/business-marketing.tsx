import { ReactElement } from 'react';

import {t} from "@lingui/macro"

import MainLayout from '@/layouts/mainLayout';
import ServicesSidebarLayout from '@/layouts/servicesSidebarLayout';
import { loadTranslation } from '@/utils/utils';

import { GetStaticProps, GetServerSideProps } from 'next';
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

const ServicesBusinessMarketing = () => {

    return(
        <>
            <h1 className="py-10 text-2xl tracking-wider">
                {t({id:`ServicesBusinessMarketing.title`,message:`Business Marketing`})}
            </h1>
            <div className="text-lg tacking-wide">
                {t({id:`ServicesBusinessMarketing.desc1`,message:`Business marketing is a marketing practice of individuals or organizations. It allows them to sell products or services to other companies or organizations who resell them, use them in their products or services, or use them to support their projects.`})}
            </div>
        </>
    )

}

ServicesBusinessMarketing.getLayout = function getLayout(page:ReactElement) {
    return(
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    )
}
export default ServicesBusinessMarketing
