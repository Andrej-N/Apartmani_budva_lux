import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Apartmani_budva_lux" : "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath && { basePath }),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
