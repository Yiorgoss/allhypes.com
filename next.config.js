/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    i18n: {
        locales: ['en', 'el', 'pseudo'],
        defaultLocale: 'en'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com'
            }
        ]
    }
};

module.exports = nextConfig;
