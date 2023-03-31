import { ReactElement } from 'react';

import { t } from '@lingui/macro';
import Sidebar from '@/components/sidebar';

const ServicesSidebarLayout = ({
    children
}: {
    children: ReactElement | ReactElement[] | string;
}) => {
    const navLinks = [
        {
            title: t({
                id: `ServicesSidebarlayout.1`,
                message: `PR & Communication Strategy`
            }),
            path: '/services/pr-communication-strategy'
        },
        {
            title: t({
                id: `ServicesSidebarLayout.2`,
                message: `Influencer Marketing`
            }),
            path: '/services/influencer-marketing'
        },
        {
            title: t({ id: `ServicesSidebarLayout.3`, message: `Business Marketing ` }),
            path: '/services/business-marketing'
        },
        {
            title: t({
                id: `ServicesSidebarLayout.4`,
                message: `Brand development & Ideation`
            }),
            path: '/services/brand-development-ideation'
        },
        {
            title: t({
                id: `ServicesSidebarLayout.5`,
                message: `Event organizations & Management `
            }),
            path: '/services/event-organizations-management'
        },
        {
            title: t({
                id: `ServicesSidebarLayout.6`,
                message: `Social Media management `
            }),
            path: '/services/social-media-management'
        },
        {
            title: t({ id: `ServicesSidebarLayout.7`, message: `Rebranding` }),
            path: '/services/rebranding'
        },
        {
            title: t({
                id: `ServicesSidebarLayout.8`,
                message: `Website + creation + hosting`
            }),
            path: '/services/website-creation-hosting'
        },
        {
            title: t({
                id: `ServicesSidebarLayout.9`,
                message: `Google Ads Campaigns`
            }),
            path: '/services/google-ad-campaigns'
        },
        {
            title: t({ id: `ServicesSidebarLayout.10`, message: `Sponsorships` }),
            path: '/services/sponsorships'
        },
        {
            title: t({ id: `ServicesSidebarLayout.11`, message: `Custom Services` }),
            path: '/services/custom-services'
        }
    ];

    return (
        <div className="container my-10 mx-auto grid grid-cols-1 md:grid-cols-3">
            <div className="">
                <Sidebar navLinks={navLinks} />
            </div>
            <div className="order-first col-span-full md:order-last md:col-span-2">
                {children}
            </div>
        </div>
    );
};

export default ServicesSidebarLayout;
