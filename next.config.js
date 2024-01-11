const API_URL = process.env.NEXT_PUBLIC_DEVELOP_PROXY_BACK_END_API;

const nextConfig = {
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/:path*`,
      },
    ];
  },
  images: {
    domains: ['rubyscore.fra1.digitaloceanspaces.com'],
  },
};

module.exports = nextConfig;
