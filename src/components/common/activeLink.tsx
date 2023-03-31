import Link from 'next/link';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

const ActiveLink = ({
    href,
    className,
    activeClassName,
    children,
    scroll,
}: {
    href: string;
    className?: string;
    activeClassName?: string;
    children: ReactElement | ReactElement | string;
    scroll?: boolean
}) => {
    const { asPath } = useRouter();
    const active = asPath === href;
    return (
        <Link
            href={href}
            className={`${className} ${active && activeClassName}`}
            scroll={scroll}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;
