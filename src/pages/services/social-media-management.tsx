import { ReactElement } from 'react';

import {t} from "@lingui/macro"

import MainLayout from '@/layouts/mainLayout';
import ServicesSidebarLayout from '@/layouts/servicesSidebarLayout';

const ServicesSocialMediaManagement = () => {

    return(
        <>
            <h1 className="py-10 text-2xl tracking-wider">
                {t({id:"ServicesSocialMediaManagement.title",message:"Social Media Management"})}
            </h1>
            <div className="text-lg tacking-wide">
                {t({id:"ServicesSocialMediaManagement.desc1",message:"We manage your personal or business account."})}
            </div>
        </>
    )

}

ServicesSocialMediaManagement.getLayout = function getLayout(page:ReactElement) {
    return(
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    )
}
export default ServicesSocialMediaManagement
