import { ReactElement } from 'react';

import {t} from "@lingui/macro"

import MainLayout from '@/layouts/mainLayout';
import ServicesSidebarLayout from '@/layouts/servicesSidebarLayout';

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
