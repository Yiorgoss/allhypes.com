import Image from 'next/image';
import Link from 'next/link';

import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';

import ActiveLink from '@/components/common/activeLink';

const Footer = ({
    navLinks
}: {
    navLinks: { title: string; path: string }[];
}) => {
    return (
        <div className="sticky top-0 z-10 bg-zinc-300 py-10 ">
            <div className="mx-auto">
                <div className=" relative h-[150px] w-full">
                    <Image
                        className="object-contain"
                        src="/media/logo_with_writing.png"
                        alt="logo with writing"
                        fill
                    />
                </div>
            </div>
            <div className="flex w-full justify-center gap-10 text-white">
                <div className="rounded-full bg-black p-2 hover:scale-110">
                    <Link href="https://www.tiktok.com/@all_hypes">
                        <FaTiktok className="h-6 w-6" />
                    </Link>
                </div>
                <div className="rounded-full bg-black p-2 hover:scale-110">
                    <Link href="https://www.instagram.com/allhypes_gr/">
                        <FaInstagram className="h-6 w-6" />
                    </Link>
                </div>
                <div className="rounded-full bg-black p-2 hover:scale-110">
                    <Link href="https://www.facebook.com/people/AllHypes/100089393306777/">
                        <FaFacebookF className="h-6 w-6" />
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-2">
                <div className="float-none text-center md:float-right md:text-right">
                    {navLinks.map(({ title, path }, i) => (
                        <div className="py-2" key={i}>
                            <ActiveLink href={path} activeClassName="underline">
                                {title}
                            </ActiveLink>
                        </div>
                    ))}
                </div>
                <div className="text-center md:text-left">
                    <div className="py-2 font-semibold">Contact</div>
                    <Link href="mailto:allhypesgr@gmail.com">
                        <div className="py-2">Email: allhypesgr@gmail.com</div>
                    </Link>
                    <Link href="tel:2110154331">
                        <div className="py-2">Phone: 211 015 43 31</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
