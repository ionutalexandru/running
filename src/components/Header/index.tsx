import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-gray-900">
          RUN with Ionut
        </Link>
      </nav>
    </header>
  );
}
