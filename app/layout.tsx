import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TalentPath — Connecting Talent, Creating Futures.',
  description:
    'TalentPath Management Services offers Lateral Hiring, Executive Search and Managed Recruitment (RPO) across 10 industries. Based in Noida, serving clients globally.',
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
    title: 'TalentPath — Connecting Talent, Creating Futures.',
    description: 'Lateral Hiring, Executive Search and Managed Recruitment across 10 industries. Noida-based, globally connected.',
    type: 'website',
    url: 'https://talentpath.co.in',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
