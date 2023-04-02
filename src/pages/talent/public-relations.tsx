import { ReactElement } from 'react';

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
