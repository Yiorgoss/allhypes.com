import Link from 'next/link';
import ActiveLink from '@/components/common/activeLink';

const Footer = ({
    navLinks
}: {
    navLinks: { title: string; path: string }[];
}) => {
    return (
        <div className="sticky top-0 z-10 bg-zinc-300 py-10 ">
            <div className="mx-auto w-1/3"><div className="flex justify-center items-center bg-black text-white h-[100px] ">Logo</div></div>
            <div className="pt-10 grid grid-cols-2 gap-10">
                <div className="float-right text-right">
                    {navLinks.map(({ title, path }, i) => (
                        <div className="py-2" key={i}>
                            <ActiveLink href={path} activeClassName="underline">
                                {title}
                            </ActiveLink>
                        </div>
                    ))}
                </div>
                <div className="">
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
