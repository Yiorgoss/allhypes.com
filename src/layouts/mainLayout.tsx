import { ReactElement } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer'

const mainLayout = ({
    children
}: {
    children: ReactElement | ReactElement[] | string;
}) => {
    const NAVLINKS = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about-us' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <div className="text-secondary bg-primary z-20">
            <Header navLinks={NAVLINKS} />
            <main className="pt-[100px] overflow-hidden">
                {children}
            </main>

            <Footer navLinks={NAVLINKS}/>
        </div>
    );
};

export default mainLayout;
