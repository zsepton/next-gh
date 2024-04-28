/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: "akamai",
        path: "",
      },
    assetPrefix: "/next-gh",  
};

export default nextConfig;
