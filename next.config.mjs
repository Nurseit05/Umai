/** @type {import('next').NextConfig} */

const nextConfig = {

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