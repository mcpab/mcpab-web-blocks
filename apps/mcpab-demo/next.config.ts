import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true, // allow importing from the root package folder
  },
  transpilePackages: ["@mcpab/web-blocks"], // tell Next to transpile your lib
};

export default nextConfig;
