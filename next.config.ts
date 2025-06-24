import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[{
      hostname:"images.app.goo.gl",
      protocol:"https",
      port:"",
    }]
  }
};

export default nextConfig;
