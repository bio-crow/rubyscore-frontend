const API_URL = process.env.NEXT_PUBLIC_DEVELOP_PROXY_BACK_END_API

const nextConfig = {
    swcMinify: true,
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Request-Headers", value: "X-PINGOTHER, Content-Type" },
                    { key: "Access-Control-Allow-Headers", value: "X-Custom-Header" },
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "https://galxe.com" },
                    { key: "Access-Control-Allow-Methods", value: "POST,OPTIONS" },
                ]
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/:path(^(?!.*\\/static\\/).*$)',
                destination: `/api/:path*`,
            },
            {
                source: '/api/:path*',
                destination: `${API_URL}/:path*`,
            },
        ]
    },
    images: {
        domains: ['rubyscore.fra1.digitaloceanspaces.com'],
    },
}

module.exports = nextConfig
