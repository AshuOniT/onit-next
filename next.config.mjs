/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
    staticPageGenerationTimeout: 1000, // Moved this setting into nextConfig
};



export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
