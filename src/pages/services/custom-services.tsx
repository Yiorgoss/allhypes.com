import { ReactElement } from 'react';

import {t} from "@lingui/macro"
import MainLayout from '@/layouts/mainLayout';
import ServicesSidebarLayout from '@/layouts/servicesSidebarLayout';

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
