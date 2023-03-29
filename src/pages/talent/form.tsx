import { ReactElement } from 'react';
import * as yup from 'yup';
import { t } from '@lingui/macro';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import MainLayout from '@/layouts/mainLayout';
import talentSchema from '@/utils/talentSchema';

const TalentForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(talentSchema)
    });

    const onSubmit = async (data: any, e: any) => {
        //e.preventDefault();
        //console.log('data', data);
        const res = await fetch('/api/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };
    const onError = (err: any, e: any) => {
        console.log('error', err);
        e.preventDefault();
    };

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="container mx-auto mt-[100px] grid grid-cols-1 gap-5 bg-primary py-10 px-5 md:grid-cols-3">
                <h1 className="col-span-full py-10 text-center text-3xl font-semibold">
                    Become a Member
                </h1>
                <h2 className="col-span-full text-xl font-medium ">
                    Personal Details
                </h2>
                <input
                    className={`text-md m-0 rounded-lg py-2 px-2 text-secondary md:m-2 ${
                        errors.name ? 'outline outline-2 outline-red-500' : ''
                    }`}
                    placeholder="Full Name"
                    {...register('name')}
                />
                <input
                    type="number"
                    className={`text-md m-0 rounded-lg py-2 px-2 text-secondary md:m-2 ${
                        errors.phone ? 'outline outline-2 outline-red-500' : ''
                    }`}
                    placeholder="Phone"
                    {...register('phone')}
                />
                <input
                    className={`text-md m-0 rounded-lg py-2 px-2 text-secondary md:m-2 ${
                        errors.email ? 'outline outline-2 outline-red-500' : ''
                    }`}
                    placeholder="Email"
                    {...register('email')}
                />
                <h2 className="col-span-full text-xl font-medium ">
                    Social Media Details
                </h2>
                <input
                    className="text-md col-span-1 m-0 rounded-lg py-2 px-2 text-secondary md:col-span-2 md:m-2"
                    placeholder="Instagram Account"
                    {...register('igAcc')}
                />
                <input
                    className="text-md m-0 w-full rounded-lg py-2 px-2 text-secondary md:m-2 md:w-1/2"
                    placeholder="Instagram Followers"
                    {...register('igFollowers')}
                />
                <input
                    className="text-md col-span-1 m-0 rounded-lg py-2 px-2 text-secondary md:col-span-2 md:m-2"
                    placeholder="TikTok Account"
                    {...register('ttAcc')}
                />
                <input
                    className="text-md m-0 w-full rounded-lg py-2 px-2 text-secondary md:m-2 md:w-1/2"
                    placeholder="TikTokFollowers"
                    {...register('ttFollowers')}
                />
                <input
                    className="text-md col-span-1 m-0 rounded-lg py-2 px-2 text-secondary md:col-span-2 md:m-2"
                    placeholder="Youtube Account"
                    {...register('ytAcc')}
                />
                <input
                    className="text-md m-0 w-full rounded-lg py-2 px-2 text-secondary md:m-2 md:w-1/2"
                    placeholder="Youtube Subscribers"
                    {...register('ytFollowers')}
                />

                <h2 className="col-span-full text-xl font-medium ">
                    Cost Per Action
                </h2>
                <input
                    className="text-md m-0 rounded-lg py-2 px-2 text-secondary md:m-2"
                    placeholder="Instagram Post"
                    {...register('cpaIGPost')}
                />
                <input
                    className="text-md m-0 rounded-lg py-2 px-2 text-secondary md:m-2"
                    placeholder="Instagram Story"
                    {...register('cpaIGStory')}
                />
                <input
                    className="text-md m-0 rounded-lg py-2 px-2 text-secondary md:m-2"
                    placeholder="Instagram Giveaway"
                    {...register('cpaIGGive')}
                />
                <input
                    className="text-md rounded-lg py-2 px-2 text-secondary md:m-2"
                    placeholder="TikTok Sponsored Video"
                    {...register('cpaTTVideo')}
                />
                <input
                    className="text-md col-start-1 m-0 rounded-lg py-2 px-2 text-secondary md:m-2 "
                    placeholder="Youtube Sponsored Video"
                    {...register('cpaYTVideo')}
                />
                <label className="col-span-full " htmlFor="specialOffers">
                    Are there any Special Offers you do?
                    <textarea
                        className="text-md col-span-full m-0 h-[250px] w-full rounded-lg p-2 md:m-2"
                        placeholder="2 Instagram Posts 1 Giveaway for -20%"
                        {...register('specialOffers')}
                    />
                </label>
                <div className="col-span-full flex items-end justify-end ">
                    <div
                        className="m-0 h-fit w-fit rounded-lg py-2 px-6 hover:text-tertiary md:m-2"
                        onClick={() => console.log('abc')}
                    >
                        {t({
                            id: 'contactForm.input.reset',
                            message: 'Reset'
                        })}
                    </div>
                    <input
                        className="my-auto h-fit w-fit rounded-lg bg-white py-2 px-4 text-secondary hover:bg-secondary hover:text-primary"
                        value={t({
                            id: 'contactForm.input.submit',
                            message: 'Submit'
                        })}
                        type="submit"
                    />
                </div>
            </div>
        </form>
    );
};

TalentForm.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
export default TalentForm;
