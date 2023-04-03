import NextMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';
import { remarkHeadingId } from 'remark-custom-heading-id';
import remarkGfm from 'remark-gfm';

const withMDX = NextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkHeadingId, remarkGfm],
    rehypePlugins: [rehypeHighlight],
    providerImportSource: '@mdx-js/react',
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
