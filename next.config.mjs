/** @type {import('next').NextConfig} */

const nextConfig = {

    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },

    images: {
        domains: [
            '195.38.166.135'
        ],
    },    
    async rewrites() {
        return [
            {
                source: '/media/:path*',
                destination: process.env.NEXT_PUBLIC_MEDIA_URL + ':path*',
            }
        ]
    },
}

export default nextConfig;