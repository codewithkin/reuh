/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "ik.imagekit.io",
            port: "",
          },
        ],
        domains: ["res.cloudinary.com", "oaidalleapiprodscus.blob.core.windows.net", "headshots.7b71f489541fe72763c158b881ed7ccb.r2.cloudflarestorage.com", "pub-e9ce95d8c54a46e5a38f36fe58069937.r2.dev"],
      },
};

export default nextConfig;