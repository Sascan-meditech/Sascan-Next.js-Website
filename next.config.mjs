/** @type {import('next').NextConfig} */
const nextConfig = {
  // Builds a fully static site into ./out (upload that folder to any web host)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // this folder is the project root (stops Next looking at a lockfile higher up)
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
