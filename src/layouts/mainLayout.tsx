import { ReactElement } from 'react';
import Header from '@/components/header';

const mainLayout = ({
    children
}: {
    children: ReactElement | ReactElement[] | string;
}) => {
    const NAVLINKS = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about-us' },
        { title: 'Services', path: '/services' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <div className="text-secondary bg-primary z-20">
            <Header navLinks={NAVLINKS} />
            <main className="overflow-hidden">
                {children}
            </main>
        </div>
    );
};

export default mainLayout;
