import Head from 'next/head';
import { GetServerSideProps, GetStaticProps } from 'next';
import type { ReactElement } from 'react';

import { t } from '@lingui/macro';

import MainEffect from '@/components/mainEffect';
import MainLayout from '@/layouts/mainLayout';

import { loadTranslation } from '@/utils/utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
const Home = ({}) => {
    const effectData = [
        {
            title: t({ id: 'Home.title.whoAreWe', message: 'Who we are?' }),
            href: '/about-us',
            imageData: {
                url: '/media/who_we_are.jpg',
                height: 400,
                width: 300
            }
        },

        {
            title: t({ id: 'Home.title.ourTalent', message: 'Our Talent' }),
            href: '/talent',
            imageData: {
                url: '/media/talent.jpg',
                height: 500,
                width: 600
            }
        },
        {
            title: t({
                id: 'Home.title.reputationManagement',
                message: 'Reputation Management'
            }),
            href: '/services/',
            imageData: {
                url: '/media/reputation_management.jpg',
                height: 800,
                width: 500
            }
        },
        {
            title: t({
                id: 'Home.title.influencerManagement',
                message: 'Influencer Management'
            }),
            href: '/services',
            imageData: {
                url: '/media/influencer_management.jpg',
                height: 500,
                width: 700
            }
        },
        {
            title: t({
                id: 'Home.title.businessManagement',
                message: 'Business Management'
            }),
            href: '/services',
            imageData: {
                url: '/media/business_management.jpg',
                height: 700,
                width: 900
            }
        },
        {
            title: t({ id: 'Home.title.clients', message: 'Clients' }),
            href: '/clients',
            imageData: {
                url: '/media/clients.jpg',
                height: 900,
                width: 1100
            }
        },
        {
            title: t({
                id: 'Home.title.contributors',
                message: 'Contributors'
            }),
            href: '/contributors',
            imageData: {
                url: '/media/contributors.jpg',
                height: 900,
                width: 1100
            }
        },
        {
            title: t({
                id: 'Home.title.BecomeAMember',
                message: 'Become A Member'
            }),
            href: '/talent/form',
            imageData: {
                url: '/media/become_a_member.jpg',
                height: 900,
                width: 1100
            }
        }
    ];
    return (
        <>
            <Head>
                <title>
                    {t({
                        id: 'Home.head.title',
                        message:
                            'The point is to know how to do it all All Hypes!'
                    })}
                </title>
                <meta
                    name="description"
                    content={t({
                        id: 'Home.head.meta.description',
                        message:
                            'At All Hype we have the people and knowledge to always be on top.'
                    })}
                />
            </Head>

            <MainEffect effectData={effectData} />
        </>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <div className="">
            <MainLayout>{page}</MainLayout>
        </div>
    );
};

export default Home;
