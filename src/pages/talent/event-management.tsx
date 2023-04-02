import { ReactElement } from 'react';

import { t } from '@lingui/macro';
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
const TalentEventManagement = () => {
    return (
        <div className="">
            <h1 className="py-10 text-2xl tracking-wider ">
                {t({
                    id: `TalentEventManagement.title`,
                    message: `Event Management`
                })}
            </h1>
            <div className="text-lg tracking-wide">
                <div>
                    {t({
                        id: `TalentEventManagement.desc1`,
                        message: `Do you need to present your product or services in a specially
            designed space with super guests? Do not get nervous ! Our company
            undertakes the full coverage of your needs for the organization of
                your event.`
                    })}
                </div>
                <div className="pt-5">
                    {t({
                        id: `TalentEventManagement.desc2`,
                        message: `We undertake the finding of the space, the decoration and also the
            communication with guests who will come either from the world of
            Social Media or from the television world! We also undertake
            communication with public and private television channels for
                maximum visibility. Learn how with just one call!`
                    })}
                </div>
            </div>
        </div>
    );
};

TalentEventManagement.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <TalentSidebarLayout>{page}</TalentSidebarLayout>
        </MainLayout>
    );
};

export default TalentEventManagement;
