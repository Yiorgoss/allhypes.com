import { ReactElement } from 'react';

import {t} from '@lingui/macro'

import MainLayout from '@/layouts/mainLayout';
import TalentSidebarLayout from '@/layouts/talentSidebarLayout';

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
const TalentMarketingCommunicationStrategist = () => {

    return(
        <div className="">
            <h1 className="py-10 text-2xl tracking-wider ">
                {t({id:`TalentMarketingCommunicationStrategist.title`,message:`Marketing and Communications Strategist`})}
            </h1>
            <div className="text-lg tracking-wide">
                {t({id:`TalentMarketingCommunicationStrategist.desc1`,message:`We specialize in the field of Marketing and communication strategy`})}
            </div>
        </div>
    )
}

TalentMarketingCommunicationStrategist.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <TalentSidebarLayout>{page}</TalentSidebarLayout>
        </MainLayout>
    );
};

export default TalentMarketingCommunicationStrategist;
