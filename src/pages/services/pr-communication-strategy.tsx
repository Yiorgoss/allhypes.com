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
const ServicesPrCommunicationStrategy = () => {

    return(
        <>
            <h1 className="py-10 text-2xl tracking-wider">
                {t({id:`ServicesPrCommunicationStrategy.title`,message:`PR Communication Strategy`})}
            </h1>
            <div className="text-lg tacking-wide">

                {t({id:`ServicesPrCommunicationStrategy.desc1`,message:`Do you want to expand into a world where you "don't get off"? ! Our company has experienced staff and has the know how to communicate what you cannot! All Hypes also undertakes your communication strategy with absolute targeting on you and your needs. Communication is our forte! Learn how with just a call!`})}
            </div>
        </>
    )

}

ServicesPrCommunicationStrategy.getLayout = function getLayout(page:ReactElement) {
    return(
        <MainLayout>
            <ServicesSidebarLayout>{page}</ServicesSidebarLayout>
        </MainLayout>
    )
}
export default ServicesPrCommunicationStrategy
