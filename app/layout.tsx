import '@/src/styles/reset.css';
import '@/src/styles/global.css';
// Markdown
import '@/src/styles/markdown.css';
import 'github-markdown-css/github-markdown-light.css';
// Highlight
import '@/src/styles/highlight.css';

export const metadata = {
  title: 'Next typescript template',
  description: 'A simple next typescript template',
  viewport:
    'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <article className="markdown-body">{children}</article>
      </body>
    </html>
  );
}
