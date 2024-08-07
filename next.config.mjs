/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: [
          'campaignaugust2024.s3.us-east-1.amazonaws.com',
      ]
  },
  output: 'standalone',
}

export default nextConfig;


