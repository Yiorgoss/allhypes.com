import Image from 'next/image'
import Link from 'next/link';
import ActiveLink from '@/components/common/activeLink';

const Footer = ({
    navLinks
}: {
    navLinks: { title: string; path: string }[];
}) => {
    return (
        <div className="sticky top-0 z-10 bg-zinc-300 py-10 ">
            <div className="mx-auto">
                <div className=" relative w-full h-[150px]">
                    <Image className="object-contain" src="/media/logo_with_writing.png" alt="logo with writing" fill />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
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
