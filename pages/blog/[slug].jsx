import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((file) => ({ params: { slug: file.replace('.mdx', '') } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const source = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, { mdxOptions: { remarkPlugins: [remarkGfm] } });
  return { props: { frontMatter: data, mdxSource } };
}

export default function PostPage({ frontMatter, mdxSource }) {
  return (
    <article className="prose mx-auto py-10">
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...mdxSource} />
    </article>
  );
}
