import { ReactElement } from 'react';

import {t} from "@lingui/macro"

import MainLayout from '@/layouts/mainLayout';
import TalentSidebarLayout from '@/layouts/talentSidebarLayout';

const TalentPersonalManagement = () => {

    return(
        <div className="">
            <h1 className="py-10 text-2xl tracking-wider ">
                {t({id:`TalentPersonalManagement.title`,message:`Personal Management`})}
            </h1>
            <div className="text-lg tracking-wide">
                {t({id:`TalentPersonalManagement.desc1`,message:`We specialize in the field of Personal Management!`})}
            </div>
        </div>
    )
}

TalentPersonalManagement.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <TalentSidebarLayout>{page}</TalentSidebarLayout>
        </MainLayout>
    );
};

export default TalentPersonalManagement;
