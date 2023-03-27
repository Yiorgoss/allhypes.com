import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { LOCALE } from '@/types/custom';

const LangSwitcher = ({ className }: { className?: string }) => {
    const router = useRouter();
    const [locale, setLocale] = useState<LOCALE>(
        router.locale!.split('-')[0] as LOCALE
    );

    const languages: { [key: string]: string } = {
        en: 'En',
        el: 'Ελ'
    };

    const handleChange = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        const locale = target.id.toLowerCase()  as LOCALE


        setLocale(locale);
        router.push(router.pathname, router.pathname, { locale });
    };

    return (
        <div className="flex items-end h-full justify-end uppercase  divide-x-2 divide-secondary text-sm">
            {Object.keys(languages).map((lang, i) => {
                return (
                    <div  className={`inline px-2 ${locale === lang ? 'font-black' : ''} `} onClick={(e) => handleChange(e)} key={i} id={lang} >
                        {languages[lang]}
                    </div>
                );
            })}
        </div>
    );
};

export default LangSwitcher;
