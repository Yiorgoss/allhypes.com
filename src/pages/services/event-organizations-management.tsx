import { ReactElement } from 'react';

import {t} from "@lingui/macro"
import MainLayout from '@/layouts/mainLayout';
import ServicesSidebarLayout from '@/layouts/servicesSidebarLayout';

const ServicesEventOrganizationManagement = () => {

    return(
        <>
            <h1 className="py-10 text-2xl tracking-wider">
                {t({id:`ServicesEventOrganizationManagement.title`,message:`Event Organization Management`})}
            </h1>
            <div className="text-lg tacking-wide">
                {t({id:`ServicesEventOrganizationManagement.desc1`,message:`We undertake the finding of the space, the decoration and also the communication with guests who will come either from the world of Social Media or from the television world! We also undertake communication with public and private television channels for maximum visibility.`})}
            </div>
        </>
    )

}

ServicesEventOrganizationManagement.getLayout = function getLayout(page:ReactElement) {
    return(
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    )
}
export default ServicesEventOrganizationManagement
