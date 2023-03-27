import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';

import ActiveLink from '@/components/common/activeLink';
import LangSwitcher from '@/components/langSwitcher';

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
        <div className="absolute top-0 z-50 grid h-[100px] w-full grid-cols-3 bg-transparent text-2xl">
            <Link className="w-fit" href="/">
                <div className="relative ml-5 md:ml-10 h-[100px] w-[100px] ">
                    <Image src="/media/logo.png" alt="logo" fill />
                </div>
            </Link>
            <div
                className="col-span-2 my-auto mr-10 ml-auto md:hidden "
                onClick={() => setActive(!active)}
            >
                <RxHamburgerMenu className="h-10 w-10 cursor-pointer" />
            </div>
            <div
                className={`col-span-2 mx-auto my-auto ${
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
                    } mr-auto md:block md:flex`}
                    ref={node}
                >
                    <li className="h-[100px] w-[100px]">
                        <Link
                            className="fixed h-[100px] w-[100px]"
                            href="/"
                        >
                            <Image src="/media/logo.png" alt="logo" fill />
                        </Link>
                    </li>
                    <li className="mr-3 mt-2 inline inline p-2">
                        <LangSwitcher />
                    </li>

                    {navLinks.map((link, i) => (
                        <li
                            className="mr-10 mt-2 inline p-2 text-xl font-light"
                            key={i}
                            onClick={() => setActive(false)}
                        >
                            <ActiveLink
                                activeClassName="font-semibold"
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
