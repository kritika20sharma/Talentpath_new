import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TalentPath — Unlock Potential, Empower People.',
  description:
    'TalentPath Management Services offers Lateral Hiring, Executive Search and Managed Recruitment (RPO) across 9 industries. Based in Noida, serving clients globally.',
  keywords: [
    'TalentPath recruitment',
    'lateral hiring India',
    'executive search Noida',
    'RPO recruitment process outsourcing',
    'IT recruitment India',
    'FMCG hiring',
    'pharma recruitment',
    'BFSI talent acquisition',
    'management consulting recruitment',
    'talent management services',
  ],
  openGraph: {
    title: 'TalentPath — Unlock Potential, Empower People.',
    description: 'Lateral Hiring, Executive Search and Managed Recruitment across 9 industries. Noida-based, globally connected.',
    type: 'website',
    url: 'https://talentpath.co.in',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
