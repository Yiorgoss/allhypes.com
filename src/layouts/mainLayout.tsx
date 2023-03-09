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
        { title: 'Contact', path: '/contact' },
        { title: 'Work', path: '/work' }
    ];

    return (
        <div className="text-secondary bg-primary">
            <Header navLinks={NAVLINKS} />
            <main>
                {children}
            </main>
        </div>
    );
};

export default mainLayout;
