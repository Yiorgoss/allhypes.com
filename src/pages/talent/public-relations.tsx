import { ReactElement } from 'react';

import MainLayout from '@/layouts/mainLayout';
import TalentSidebarLayout from '@/layouts/talentSidebarLayout';

const TalentPublicRelations = () => {

    return(
        <div className="container mx-auto">
            <h1 className="py-10 text-2xl tracking-wider">Public Relations</h1>
            <div className="text-lg tracking-wide">
                We specialize in the field of public relations and communication!
            </div>
        </div>
    )
}

TalentPublicRelations.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <TalentSidebarLayout>{page}</TalentSidebarLayout>
        </MainLayout>
    );
};

export default TalentPublicRelations;
