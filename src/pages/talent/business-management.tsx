import { ReactElement } from 'react';

import MainLayout from '@/layouts/mainLayout';
import TalentSidebarLayout from '@/layouts/talentSidebarLayout';

const TalentBusinessManagement = () => {

    return(
        <div className="">
            <h1 className="py-10 text-2xl tracking-wider">Business Management</h1>
            <div className="text-lg tracking-wide">
                We specialize in the field of Business Management!
            </div>
        </div>
    )
}

TalentBusinessManagement.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <TalentSidebarLayout>{page}</TalentSidebarLayout>
        </MainLayout>
    );
};

export default TalentBusinessManagement;
