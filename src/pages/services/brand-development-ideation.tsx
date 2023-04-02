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

const ServicesBrandDevelopmentIdeation = () => {

    return(
        <>
            <h1 className="py-10 text-2xl tracking-wider">
                {t({id:`ServicesBrandDevelopmentIdeation.title`,message:`Brand Development and Ideation`})}
            </h1>
            <div className="text-lg tacking-wide">
                {t({id:`ServicesBrandDevelopmentIdeation.desc1`,message:`Brand development, brainstorming and experience are what you and your brand need.`})}
            </div>
        </>
    )

}

ServicesBrandDevelopmentIdeation.getLayout = function getLayout(page:ReactElement) {
    return(
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    )
}
export default ServicesBrandDevelopmentIdeation
