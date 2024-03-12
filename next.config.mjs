/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
    remotePatterns: [{ protocol: "https", hostname: "utfs.oi", port: "" }],
  },
};
export default nextConfig;
