import { readFileSync } from 'node:fs';

const ghpRedirects = JSON.parse(readFileSync(new URL('./content/ghp-redirects.json', import.meta.url), 'utf8'));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve historical chapter links as HTTP redirects, including without JS.
  async redirects() {
    return Object.entries(ghpRedirects).flatMap(([from, to]) =>
      ['/lecture-set', '/practice/lecture'].map((prefix) => ({
        source: `${prefix}/${from}`,
        destination: `${prefix}/${to}`,
        permanent: true,
      })),
    );
  },
};

export default nextConfig;
