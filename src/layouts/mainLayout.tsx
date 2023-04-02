import { ReactElement } from 'react';

import { t } from '@lingui/macro';

import Header from '@/components/header';
import Footer from '@/components/footer';

const mainLayout = ({
    children
}: {
    children: ReactElement | ReactElement[] | string;
}) => {
    const NAVLINKS = [
        { title: t({ id: `Header.Home`, message: `Home` }), path: '/' },
        {
            title: t({ id: `Header.AboutUs`, message: `About Us` }),
            path: '/about-us'
        },
        {
            title: t({ id: `Header.Contact`, message: `Contact` }),
            path: '/contact'
        }
    ];

    return (
        <div className="z-20 bg-primary text-secondary">
            <Header navLinks={NAVLINKS} />
            <main className="overflow-hidden pt-[100px]">{children}</main>

            <Footer navLinks={NAVLINKS} />
        </div>
    );
};

export default mainLayout;
