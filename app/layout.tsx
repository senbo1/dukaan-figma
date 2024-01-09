import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Header';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dukaan Payouts',
  description: 'Dukaan Figma Challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen w-full flex', inter.className)}>
        <Navbar />
        <main className='w-[1216px]'>
          <Dashboard />
          {children}
        </main>
      </body>
    </html>
  );
}
