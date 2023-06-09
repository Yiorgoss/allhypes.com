import Link from 'next/link';
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
            path: '/talent/event-management'
        },
        {
            title: 'Public Relations',
            image: '/media/talent_image_2.jpeg',
            path: '/talent/public-relations'
        },
        {
            title: 'Influencer Marketing',
            image: '/media/talent_image_3.jpeg',
            path: '/talent/influencer-management'
        },
        {
            title: 'Personal Management',
            image: '/media/talent_image_4.jpeg',
            path: '/talent/personal-management'
        },
        {
            title: 'Business Management',
            image: '/media/talent_image_5.jpeg',
            path: '/talent/business-management'
        },
        {
            title: 'Marketing and Communications Strategist',
            image: '/media/talent.jpeg',
            path: '/talent/marketing-communication-strategist'
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
            <div className="container mx-auto grid grid-cols-2 gap-4">
                <h1 className="col-span-full py-10 text-center text-4xl font-semibold">
                    Our Talent
                </h1>
                {talentData.map(({ title, image, path }, i) => (
                    <Link href={path} key={i}>
                        <div className="duration flex h-[200px] items-center text-center justify-center rounded-none md:rounded-lg bg-secondary text-2xl text-primary transition transition-[font-size] duration-300 hover:text-3xl">
                            {title}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

Talent.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Talent;
