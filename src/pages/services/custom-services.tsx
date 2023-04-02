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
const ServicesCustomServices = () => {

    return(
        <>
            <h1 className="py-10 text-2xl tracking-wider">
                {t({id:`ServicesCustomServices.title`,message:`Custom Services`})}
            </h1>
            <div className="text-lg tacking-wide">
                {t({id:`ServicesCustomServices.desc1`,message:`Didn't find what you need? Contact us and choose the services that suit you!`})}
            </div>
        </>
    )

}

ServicesCustomServices.getLayout = function getLayout(page:ReactElement) {
    return(
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    )
}
export default ServicesCustomServices
