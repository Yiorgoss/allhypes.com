import { ReactElement } from 'react';

import {t} from "@lingui/macro"

import MainLayout from '@/layouts/mainLayout';
import TalentSidebarLayout from '@/layouts/talentSidebarLayout';

const TalentInfluencerManagement = () => {

    return(
        <div className="">
            <h1 className="py-10 text-2xl tracking-wider ">
                {t({id:`TalentInfluencerManagement.title`,message:`Influencer Management`})}
            </h1>
            <div className="text-lg tracking-wide">
                {t({id:`TalentInfluencerManagement.desc1`,message:`We specialize in the field of Influencer Management!`})}
            </div>
        </div>
    )
}

TalentInfluencerManagement.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <TalentSidebarLayout>{page}</TalentSidebarLayout>
        </MainLayout>
    );
};

export default TalentInfluencerManagement;
