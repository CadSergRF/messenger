import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CSRF Messenger',
  description: 'Разработка своего чата для общения',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
