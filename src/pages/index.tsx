import type { AppProps } from 'next/app';
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
            title: t({ id: 'Home.title.whoAreWe', message: 'Who we are ?' }),
            href: '/about-us',
            imageData: {
                url: 'https://loremflickr.com/300/400',
                height: 400,
                width: 300
            }
        },

        {
            title: t({ id: 'Home.title.ourTalent', message: 'Our Talent' }),
            href: '/talent',
            imageData: {
                url: 'https://loremflickr.com/600/500',
                height: 500,
                width: 600
            }
        },
        {
            title: t({ id: 'Home.title.ourServices', message: 'Our Services' }),
            href: '/services',
            imageData: {
                url: 'https://loremflickr.com/500/400',
                height: 400,
                width: 500
            }
        },
        {
            title: t({
                id: 'Home.title.reputationManagement',
                message: 'Reputation Management'
            }),
            href: '/management/reputation',
            imageData: {
                url: 'https://loremflickr.com/500/800',
                height: 800,
                width: 500
            }
        },
        {
            title: t({
                id: 'Home.title.influencerManagement',
                message: 'Influencer Management'
            }),
            href: '/management/reputation',
            imageData: {
                url: 'https://loremflickr.com/400/500',
                height: 500,
                width: 700
            }
        },
        {
            title: t({
                id: 'Home.title.businessManagement',
                message: 'Business Management'
            }),
            href: '/management/business',
            imageData: {
                url: 'https://loremflickr.com/900/700',
                height: 700,
                width: 900
            }
        },
        {
            title: t({ id: 'Home.title.clients', message: 'Clients' }),
            href: '/clients',
            imageData: {
                url: 'https://loremflickr.com/1100/900',
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
                url: 'https://loremflickr.com/1100/900',
                height: 900,
                width: 1100
            }
        }
    ];
    return <MainEffect effectData={effectData} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <div className="">
            <div className="">211 015 43 31</div>
            <MainLayout>{page}</MainLayout>
        </div>
    );
};

export default Home;
