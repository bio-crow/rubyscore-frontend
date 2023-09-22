const API_URL = process.env.NEXT_PUBLIC_BACK_END_API
const nextConfig = {
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${API_URL}/:path*`,
            },
        ]
    },
}

module.exports = nextConfig
