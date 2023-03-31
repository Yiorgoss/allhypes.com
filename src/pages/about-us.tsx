import Head from 'next/head';
import { ReactElement } from 'react';
import { GetStaticProps, GetServerSideProps } from 'next';

import { t } from '@lingui/macro';

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

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>
                    {t({
                        id: 'AboutUs.head.title',
                        message: "We don't try...we succeed!"
                    })}
                </title>
                <meta
                    name="description"
                    content={t({
                        id: 'AboutUs.head.meta.description',
                        message:
                            'What seems like challenges and trials to you seems easy to us!'
                    })}
                />
            </Head>

            <div className="container mx-auto mb-20">
                <h1 className="py-10 text-center text-4xl font-semibold">
                    {t({ id: '', message: 'WE ARE THE ALL HYPES AGENCY' })}
                </h1>

                <div className=" mx-auto w-full px-3 text-xl font-normal tracking-wide md:w-[600px]">
                    <div className="">
                        {t({
                            id: 'AboutUs.textBlock.1',
                            message:
                                'ALL HYPES is a dynamic, active advertising company of international scope. By creating a friendly but at the same time professional cooperation environment, we build relationships of trust and development with our clients.'
                        })}
                    </div>
                    <div className="pt-5">
                        {t({
                            id: 'AboutUs.textBlock.2',
                            message:
                                'In the era of Generation Z, we come to give the opportunity to both businesses and individuals to showcase their product or talent in a methodical and efficient way and ultimately the top! We are a company that can take over your advertising at any stage whether your business or your personal development. Based on your goal today, we build tomorrow!'
                        })}
                    </div>

                    <div className="pt-5">
                        {t({
                            id: 'AboutUs.textBlock.3',
                            message:
                                'Our goal is to promote your idea in an original, specialized or less complicated way that inspires the buyer or follower to buy from you or travel with you in the online world. Our specialty is PR & communication strategy, influencer marketing, business marketing, brand development & ideation, event management, social media management, sponsorships.'
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

AboutUs.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
export default AboutUs;
