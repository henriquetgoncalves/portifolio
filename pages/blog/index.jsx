import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((file) => {
    const slug = file.replace('.mdx', '');
    const source = fs.readFileSync(path.join('posts', file), 'utf-8');
    const { data } = matter(source);
    return { slug, ...data };
  });
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-500 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
