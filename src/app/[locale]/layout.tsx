import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import '@/app/globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = { title: 'Run with Ionuț-Alexandru' };

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html>
      <body className={`${inter.className} flex h-screen flex-col`}>
        <NextIntlClientProvider>
          <Header />
          <main className="relative h-screen w-full overflow-hidden">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
