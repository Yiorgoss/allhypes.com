import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';

import ActiveLink from '@/components/common/activeLink';

const Header = ({
    navLinks
}: {
    navLinks: { title: string; path: string }[];
}) => {
    const [active, setActive] = useState(false);
    const node = useRef<HTMLUListElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (node.current && node.current.contains(e.target as Node)) {
            return;
        }
        setActive(false);
    };

    useEffect(() => {
        if (active) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [active]);
    return (
        <div className="absolute top-0 z-50 grid h-[100px] w-full grid-cols-2 bg-transparent text-2xl">
            <Link href="/">
                <div className="my-auto bg-black w-[100px] h-[100px] text-white">LOGO</div>
            </Link>
            <div
                className="my-auto mr-10 ml-auto md:hidden "
                onClick={() => setActive(!active)}
            >
                <RxHamburgerMenu className="h-10 w-10 cursor-pointer" />
            </div>
            <div
                className={`mx-auto my-auto ${
                    active
                        ? 'fixed z-40 h-screen w-screen bg-slate-800/40'
                        : 'hidden md:block'
                } `}
            >
                <ul
                    className={`${
                        active
                            ? 'fixed z-40 my-auto flex h-screen w-8/12 flex-col items-center justify-center gap-2 bg-primary'
                            : 'hidden'
                    } md:block`}
                    ref={node}
                >
                    <li className="fixed top-0 ml-[-6vw] mt-10 md:hidden">
                        LOGO
                    </li>
                    {navLinks.map((link, i) => (
                        <li className="mr-10 mt-2 inline p-2" key={i}>
                            <ActiveLink
                                activeClassName="border-b-2 border-secondary"
                                className="h-full w-full p-2 "
                                href={link.path}
                            >
                                {link.title}
                            </ActiveLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
