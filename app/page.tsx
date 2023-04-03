'use client';

import { MDXProvider } from '@mdx-js/react';

import Test from './test.mdx';

const components = {
  // todo
};

export default function Index() {
  return (
    <MDXProvider components={components}>
      <Test />
    </MDXProvider>
  );
}
