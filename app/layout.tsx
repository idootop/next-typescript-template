import '@/src/styles/reset.css';
import '@/src/styles/global.css';
import '@/src/styles/markdown.css';
import 'github-markdown-css/github-markdown-light.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head />
      <body>
        <article className="markdown-body">{children}</article>
      </body>
    </html>
  );
}
