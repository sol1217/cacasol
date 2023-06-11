/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    localeDetection: true,
  },
}

module.exports = nextConfig
