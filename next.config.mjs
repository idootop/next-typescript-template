import NextMDX from '@next/mdx';
import { remarkHeadingId } from 'remark-custom-heading-id';

const withMDX = NextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkHeadingId],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
