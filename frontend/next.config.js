/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            protocol: "http",
            hostname: `127.0.0.1`,
            port: "1337",
            pathname: "/uploads/**",
         },
         {
            protocol: "https",
            hostname: `${process.env.NEXT_PUBLIC_UPLOAD_URL}`,
            port: "1337",
            pathname: "/uploads/**",
         },
      ],
      domains: [
         "127.0.0.1",
         "res.cloudinary.com",
         `${process.env.NEXT_PUBLIC_UPLOAD_URL}`,
      ],
   },
};

module.exports = nextConfig;
