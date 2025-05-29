import type { NextConfig } from "next";

const productionOptions: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}

const devOptions: NextConfig = {
  /* config options here */
}

const env = process.env.NODE_ENV;

const nextConfig = env === "development" ? devOptions : productionOptions;

export default nextConfig;
