import Head from 'next/head';
import { GetStaticProps, GetServerSideProps } from 'next';
import { ReactElement } from 'react';

import { t } from '@lingui/macro';

import BannerHeader from '@/components/bannerHeader';
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
            image: '/media/talent_image_1.jpeg',
            content: ''
        },
        {
            title: 'Public Relations',
            image: '/media/talent_image_2.jpeg',
            content: ''
        },
        {
            title: 'Influencer Marketing',
            image: '/media/talent_image_3.jpeg',
            content: ''
        },
        {
            title: 'Personal Management',
            image: '/media/talent_image_4.jpeg',
            content: ''
        },
        {
            title: 'Business Management',
            image: '/media/talent_image_5.jpeg',
            content: ''
        },
        {
            title: 'Marketing and Communications Strategist',
            image: '/media/talent.jpeg',
            content: ''
        }
    ];

    return (
        <>
            <Head>
                <title>
                    {t({
                        id: 'Talent.head.title',
                        message:
                            'The point is to know how to do it all All Hypes!'
                    })}
                </title>
                <meta
                    name="description"
                    content={t({
                        id: 'Talent.head.meta.description',
                        message:
                            'At All Hype we have the people and knowledge to always be on top.'
                    })}
                />
            </Head>
            <div className="container mx-auto my-[100px]">
                <h1 className="py-10 text-center text-4xl font-semibold">
                    Our Talent
                </h1>
                {talentData.map(({ title, image, content }, i) => (
                    <div className="mt-[50px] md:mt-0" key={i}>
                        <BannerHeader title={title} image={image} />
                    </div>
                ))}
            </div>
        </>
    );
};

Talent.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Talent;
