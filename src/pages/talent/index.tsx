import { GetStaticProps, GetServerSideProps } from 'next';
import { ReactElement } from 'react';

import { t } from '@lingui/macro';

import DescSection from '@/components/descSection';
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

const Talent = () => {
    const talentData = [
        {
            title: 'Event Management',
            image: 'https://loremflickr.com/850/400',
            content: 'description'
        },
        {
            title: 'Public Relations',
            image: 'https://loremflickr.com/940/400',
            content: 'description'
        },
        {
            title: 'Influencer Marketing',
            image: 'https://loremflickr.com/870/400',
            content: 'description'
        },
        {
            title: 'Personal Management',
            image: 'https://loremflickr.com/700/400',
            content: 'description'
        },
        {
            title: 'Business Management',
            image: 'https://loremflickr.com/600/400',
            content: 'description'
        },
        {
            title: 'Marketing and Communications Strategist',
            image: 'https://loremflickr.com/500/400',
            content: 'description'
        }
    ];

    return (
        <div className="container mx-auto mt-[100px]">
            <h1 className="py-10 text-center text-4xl font-semibold">
                Our Talent
            </h1>
            <DescSection data={talentData} />
        </div>
    );
};

Talent.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Talent;
