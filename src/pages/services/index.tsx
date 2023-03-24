import Image from 'next/image';
import Head from "next/head"
import { GetStaticProps, GetServerSideProps } from 'next';
import { ReactElement } from 'react';

import { t } from '@lingui/macro';

import DescSection from '@/components/descSection';
import MainLayout from '@/layouts/mainLayout';

import { loadTranslation } from '@/utils/utils';

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

const Services = () => {
    const servicesData = [
        { title: 'PR & Communication Strategy ', description: 'description' },
        { title: 'Influencer Marketing', description: 'description' },
        { title: 'Business Marketing ', description: 'description' },
        { title: 'Brand development & Ideation', description: 'description' },
        {
            title: 'Event organizations & Management ',
            description: 'description'
        },
        { title: 'Social Media management ', description: 'description' },
        { title: 'Sponsorships', description: 'description' }
    ];

    return (
        <>
        <Head>

            <title>
                {t({
                    id: 'Services.head.title',
                    message:
                            'All Hypes means always being on top!'
                })}
        </title>
        <meta
        name='description'
        content={t({
            id: 'Services.head.meta.description',
            message:"Reaching the top is not difficult! It's hard to stay on top and here comes All Hypes!"
        })}
        />
        </Head>


        <div className="container mx-auto mt-[100px]">
        <h1 className="text-center text-4xl font-semibold tracking-wide py-10">
        Our Services
        </h1>
        <div className="grid grid-cols-2 gap-4">
        <div className="">
        {servicesData.map((service, index) => (
            <div className="my-5 divide-y" key={index}>
                <h2 className=" text-2xl font-medium">
                    {service.title}
                </h2>
                <div className="">{service.description}</div>
            </div>
        ))}
                </div>
                <div className="relative m-6 overflow-hidden my-auto h-5/6 rounded-lg">
                    <Image
                        className=""
                        src="https://loremflickr.com/1930/1040"
                        alt="alt text"
                        fill
                    />
                </div>
            </div>
        </div>
        </>
    );
};

Services.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Services;
