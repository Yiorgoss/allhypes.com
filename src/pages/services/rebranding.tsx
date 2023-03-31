import { ReactElement } from 'react';

import {t} from "@lingui/macro"

import MainLayout from '@/layouts/mainLayout';
import ServicesSidebarLayout from '@/layouts/servicesSidebarLayout';

const ServicesRebranding = () => {

    return(
        <>
            <h1 className="py-10 text-2xl tracking-wider">
                {t({id:"ServicesRebranding.title",message:"Rebranding"})}
            </h1>
            <div className="text-lg tacking-wide">
                {t({id:"ServicesRebranding.desc1",message:`Choosing the right logo reflects who you really are! We know first hand that the right choice is something quite difficult (the same happened to us). At All Hypes we have stable collaborations with the best specialists to offer you the most modern and the most unique! We completely undertake to create and even modify your existing logo (rebrand), we offer targeted ideas and implement them for you. What do we need from you? Call us and let's sit together and learn about you to create only the best for you!`})}
            </div>
        </>
    )

}

ServicesRebranding.getLayout = function getLayout(page:ReactElement) {
    return(
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    )
}
export default ServicesRebranding
