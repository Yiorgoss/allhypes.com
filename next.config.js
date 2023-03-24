/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    i18n: {
        locales: ['en', 'el', 'pseudo'],
        defaultLocale: 'el'
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
