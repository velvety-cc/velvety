/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
};

module.exports = nextConfig;
