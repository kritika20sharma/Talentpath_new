import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'myhr — People-Powered Recruitment',
  description:
    'myhr is a leading recruitment agency specialising in permanent, temporary, volume and executive search across Accounting, Technology, Sales, HR, Marketing and more.',
  keywords: [
    'recruitment agency',
    'HR recruitment',
    'talent acquisition',
    'permanent recruitment',
    'executive search',
    'temp staffing',
    'accounting finance jobs',
    'technology recruitment',
    'sales recruitment',
    'marketing recruitment',
    'HR jobs',
    'myhr recruitment',
    'people-powered recruitment',
  ],
  openGraph: {
    title: 'myhr — People-Powered Recruitment',
    description:
      'Connecting exceptional talent with remarkable organisations. Specialist recruitment across 8 industries.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
