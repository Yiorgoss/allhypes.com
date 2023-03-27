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
        <div className="fixed top-0 z-40 grid h-[100px] w-full grid-cols-3 justify-between bg-primary md:absolute md:bg-transparent">
            <Link className="w-fit" href="/">
                <div className="relative ml-5 h-[100px] w-[100px] md:ml-10 ">
                    <Image src="/media/logo.png" alt="logo" fill />
                </div>
            </Link>
            <div
                className="col-span-2 my-auto mr-10 ml-auto md:hidden "
                onClick={() => setActive(true)}
            >
                <RxHamburgerMenu className="h-10 w-10 cursor-pointer" />
            </div>
            <div
                className={`col-span-full h-screen w-screen md:col-span-2 md:h-full md:w-full  ${
                    active
                        ? 'mt-[-100px] bg-zinc-400/50 md:mt-0 md:bg-transparent'
                        : 'hidden md:block'
                } `}
            >
                <ul
                    ref={node}
                    className="z-40 flex h-screen w-2/3 flex-col items-center justify-center bg-primary md:h-full md:w-full md:flex-row md:justify-end md:bg-transparent"
                >
                    <li className="mr-3 inline p-2">
                        <LangSwitcher />
                    </li>

                    {navLinks.map((link, i) => (
                        <li
                            className="mr-10 inline w-fit p-2 text-xl font-light"
                            key={i}
                        >
                            <ActiveLink
                                activeClassName="font-semibold"
                                className=""
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

/*

 */
