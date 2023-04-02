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
const ServicesSponsorships = () => {

    return(
        <>
            <h1 className="py-10 text-2xl tracking-wider">
                {t({id:"ServiceSponsorships.title",message:"Sponsorships"})}
            </h1>
            <div className="text-lg tacking-wide">
                {t({id:"ServiceSponsorships.desc1",message:"We take care of finding sponsorships according to the capabilities of your accounts."})}
            </div>
        </>
    )

}

ServicesSponsorships.getLayout = function getLayout(page:ReactElement) {
    return(
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    )
}
export default ServicesSponsorships
