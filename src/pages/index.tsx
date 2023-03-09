import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import MainEffect from '@/components/mainEffect';

import MainLayout from '@/layouts/mainLayout';
import type { PageWithHeaderLayout } from '@cTypes/layoutTypes';

const Home = () => {
    const imageData = [
        {
            title: 'Title 1',
            url: 'https://loremflickr.com/300/400',
            height: 400,
            width: 300
        },

        {
            title: 'Title 2',
            url: 'https://loremflickr.com/600/500',
            height: 500,
            width: 600
        },
        {
            title: 'Title 3',
            url: 'https://loremflickr.com/500/400',
            height: 400,
            width: 500
        },
        {
            title: 'Title 4',
            url: 'https://loremflickr.com/500/800',
            height: 800,
            width: 500
        },
        {
            title: 'Title 5',
            url: 'https://loremflickr.com/400/500',
            height: 500,
            width: 700
        },
        {
            title: 'Title 6',
            url: 'https://loremflickr.com/900/700',
            height: 700,
            width: 900
        },
        {
            title: 'Title 7',
            url: 'https://loremflickr.com/1100/900',
            height: 900,
            width: 1100
        }
    ];
    return <MainEffect data={imageData} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Home;
