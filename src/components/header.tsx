import ActiveLink from '@/components/common/activeLink';

const Header = ({
    navLinks
}: {
    navLinks: { title: string; path: string }[];
}) => {
    return (
        <div className="z-50 flex h-[100px] items-center justify-between bg-transparent text-2xl ">
            <div className="">LOGO</div>
            <ul className="">
                {navLinks.map((link, i) => (
                    <li className="mr-10 inline " key={i}>
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
    );
};

export default Header;
