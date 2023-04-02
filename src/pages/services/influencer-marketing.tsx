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
const ServicesInfluencerMarketing = () => {

    return(
        <>
            <h1 className="py-10 text-2xl tracking-wider">
                {t({id:`ServicesInfluencerMarketing.title`,message:`Influencer Marketing`})}
            </h1>
            <div className="text-lg tacking-wide">
                <div className="pb-6">
                    {t({id:`ServicesInfluencerMarketing.desc1`,message:`Influencers have developed a strong, and personal, relationship with their audience, often posting original and interesting Content, which attracts the attention of their Followers, and ensures constant traffic to their pages.`})}
                </div>
                <div className="pb-6">
                    {t({id:`ServicesInfluencerMarketing.desc2`,message:`In this way, the integration of advertising messages, in the normal flow of the Influencers' posts, ensures, as far as possible, organic, authentic, but also targeted advertising of various products and services.`})}
                </div>
                <div className="pb-6">
                    {t({id:`ServicesInfluencerMarketing.desc3`,message:`In practice, it has been proven that Influencer Campaigns yield clearly better results, both in terms of impact and sales, than practically any other advertising methods.`})}
                </div>
            </div>
        </>
    )

}

ServicesInfluencerMarketing.getLayout = function getLayout(page:ReactElement) {
    return(
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    )
}
export default ServicesInfluencerMarketing
