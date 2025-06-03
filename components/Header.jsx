import Link from 'next/link';
import { useTheme } from './ThemeContext';

export default function Header() {
  const { toggle } = useTheme();
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Henrique Gonçalves</h1>
      <nav className="space-x-4">
        <Link href="#about" className="hover:underline">About</Link>
        <Link href="#projects" className="hover:underline">Projects</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <button
          onClick={toggle}
          className="ml-4 px-2 py-1 border rounded"
        >
          Toggle
        </button>
      </nav>
    </header>
  );
}
