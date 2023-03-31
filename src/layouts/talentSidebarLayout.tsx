import { ReactElement } from 'react';

import {t} from "@lingui/macro"

import Sidebar from '@/components/sidebar';

const TalentSidebarLayout = ({
    children
}: {
    children: ReactElement | ReactElement[] | string;
}) => {
    const navLinks = [
        {
            title: t({id:`TalentSidebarLayout.1`, message:`Event Management`}),
            path: '/talent/event-management'
        },
        {
            title: t({id:`TalentSidebarLayout.2`, message:`Public Relations`}),
            path: '/talent/public-relations'
        },
        {
            title: t({id:`TalentSidebarLayout.3`, message:`Influencer Marketing`}),
            path: '/talent/influencer-management'
        },
        {
            title: t({id:`TalentSidebarLayout.4`, message:`Personal Management`}),
            path: '/talent/personal-management'
        },
        {
            title: t({id:`TalentSidebarLayout.5`, message:`Business Management`}),
            path: '/talent/business-management'
        },
        {
            title: t({id:`TalentSidebarLayout.6`, message:`Marketing and Communications Strategist`}),
            path: '/talent/marketing-communication-strategist'
        }
    ];

    return (
        <div className="container my-10 mx-auto grid grid-cols-1 md:grid-cols-3">
            <div className="">
                <Sidebar navLinks={navLinks} />
            </div>
            <div className="col-span-full md:col-span-2">{children}</div>
        </div>
    );
};

export default TalentSidebarLayout;
