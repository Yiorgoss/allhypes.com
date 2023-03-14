import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import MainEffect from '@/components/mainEffect';

import MainLayout from '@/layouts/mainLayout';
import type { PageWithHeaderLayout } from '@cTypes/layoutTypes';

const Home = () => {
    const effectData = [
        {
            title: 'Who we are ?',
            href: '/about-us',
            imageData: {
                url: 'https://loremflickr.com/300/400',
                height: 400,
                width: 300
            }
        },

        {
            title: 'Our Talent',
            href: '/talent',
            imageData: {
                url: 'https://loremflickr.com/600/500',
                height: 500,
                width: 600
            }
        },
        {
            title: 'Our Services',
            href: '/services',
            imageData: {
                url: 'https://loremflickr.com/500/400',
                height: 400,
                width: 500
            }
        },
        {
            title: 'Reputation Management',
            href: '/management/reputation',
            imageData: {
                url: 'https://loremflickr.com/500/800',
                height: 800,
                width: 500
            }
        },
        {
            title: 'Influencer Management',
            href: '/management/reputation',
            imageData: {
                url: 'https://loremflickr.com/400/500',
                height: 500,
                width: 700
            }
        },
        {
            title: 'Business Management',
            href: '/management/business',
            imageData: {
                url: 'https://loremflickr.com/900/700',
                height: 700,
                width: 900
            }
        },
        {
            title: 'Clients',
            href: '/clients',
            imageData: {
                url: 'https://loremflickr.com/1100/900',
                height: 900,
                width: 1100
            }
        },
        {
            title: 'Contributors',
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
