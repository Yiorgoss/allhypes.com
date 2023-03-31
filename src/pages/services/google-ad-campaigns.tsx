import { ReactElement } from 'react';

import {t} from "@lingui/macro"

import MainLayout from '@/layouts/mainLayout';
import ServicesSidebarLayout from '@/layouts/servicesSidebarLayout';

const ServicesGoogleAdCampaigns = () => {

    return(
        <>
            <h1 className="py-10 text-2xl tracking-wider">
                {t({id:`ServicesGoogleAdCampaigns.title`,message:`Google Ad Campaigns`})}
            </h1>
            <div className="text-lg tacking-wide">
                {t({id:`ServicesGoogleAdCampaigns.desc1`,message:`We undertake your advertising through Google Ads in a huge and vast world. For us, this world is our home, that's why All Hypes is the only way for you!`})}
            </div>
        </>
    )

}

ServicesGoogleAdCampaigns.getLayout = function getLayout(page:ReactElement) {
    return(
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    )
}
export default ServicesGoogleAdCampaigns
