import { useRef, useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';

import ActiveLink from '@/components/common/activeLink';

const Sidebar = ({
    navLinks
}: {
    navLinks: { title: string; path: string }[];
}) => {
    return (
        <div className="flex flex-col py-[50px]">
            {navLinks.map(({ title, path }, i) => (
                <div className="my-3" key={i}>
                    <ActiveLink
                        className="pl-10 text-left"
                        activeClassName="border-l-4 ml-2 border-secondary"
                        href={path}
                        scroll={false}
                    >
                        {title}
                    </ActiveLink>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
