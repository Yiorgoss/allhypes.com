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
const ServicesWebsiteCreationHosting = () => {

    return(
        <>
            <h1 className="py-10 text-2xl tracking-wider">
                {t({id:"ServicesWebsiteCreationHosting.title",message:"Website Creation + Hosting + Maintenance"})}
            </h1>
            <div className="text-lg tacking-wide">
                <h3 className="text-xl">
                    {t({id:"ServicesWebsiteCreationHosting.h3",message:"Have you Ever wanted a website?"})}

                </h3>
                <ul className="pt-5 list-none">
                    <li>
                        {t({id:"ServicesWebsiteCreationHosting.desc1.1",message:"Have you ever wanted a website but can't find the time to sit down, plan it and execute itt?"})}
                    </li>
                    <li>
                        {t({id:"ServicesWebsiteCreationHosting.desc1.2",message:"Have you ever wanted to start a blog to monetize the ad revenue you receive while sharing your writing with a wider audience?"})}
                    </li>
                    <li>
                        {t({id:"ServicesWebsiteCreationHosting.desc1.3",message:"Have you considered launching a brand of clothing but could only find dropshipping websites without enough customisation to suit your needs?"})}
                    </li>
                    <li>
                        {t({id:"ServicesWebsiteCreationHosting.desc1.4",message:"Have you wanted a way to interact with your audience in ways that snapchat or instagram simply won't allow?"})}
                    </li>
                </ul>

                <div className="pt-5">
                    {t({id:"ServicesWebsiteCreationHosting.desc2",message:"Thats where we are here to help. We have all the tools necessary to make your dreams a reality. You don’t have to spend you time worrying about what colour palettes go together, or if the website designer is overcharging you. We have all the necessary personnel to decrease the amount of time you spend thinking about the website design process and more time thinking about what content or products you wish to create."})}
                </div>
                <div className="pt-5">
                    {t({id:"ServicesWebsiteCreationHosting.desc3",message:"Here at Allhypes, we take care of our customers, in any ways that you want and even more ways you didn't know you wanted. We don't rest until you are completely satisfied with every aspect of your website. Be it the colours scheme, the layout or products you see. We handle all the stuff you dont know you need, things like"})}
                    <ul className="px-8 pt-2 list-disc">

                        <li>
                            {t({id:"ServicesWebsiteCreationHosting.desc3.1",message:"Search Engine Optimization"})}
                        </li>
                        <li>
                            {t({id:"ServicesWebsiteCreationHosting.desc3.2",message:"Website Uptime"})}
                        </li>
                        <li>
                            {t({id:"ServicesWebsiteCreationHosting.desc3.3",message:"Security and Data Protection"})}
                        </li>
                        <li>
                            {t({id:"ServicesWebsiteCreationHosting.desc3.4",message:"Maintenance and any future updatess"})}
                        </li>
                        <li>
                            {t({id:"ServicesWebsiteCreationHosting.desc3.5",message:"Website Analytics"})}
                        </li>
                        <li>
                            {t({id:"ServicesWebsiteCreationHosting.desc3.6",message:"Hosting and Load balancing"})}
                        </li>
                    </ul>

                    <div className="pt-5">
                        {t({id:"ServicesWebsiteCreationHosting.desc4",message:"Get in contact and make your dreams a reality"})}
                    </div>
                </div>
            </div>
        </>
    )

}

ServicesWebsiteCreationHosting.getLayout = function getLayout(page:ReactElement) {
    return(
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    )
}
export default ServicesWebsiteCreationHosting
