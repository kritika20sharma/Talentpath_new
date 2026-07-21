import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ClientsMarquee from '@/components/ClientsMarquee';
import WhatWeDo from '@/components/WhatWeDo';
import Specialisations from '@/components/Specialisations';
import BrandPromise from '@/components/BrandPromise';
import Testimonials from '@/components/Testimonials';
import InsightsPreview from '@/components/InsightsPreview';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'TalentPath — Unlock Potential, Empower People.',
  description:
    'TalentPath connects exceptional talent with remarkable organisations across 10 specialist industries. Lateral Hiring, Executive Search and RPO across India.',
};

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Stats />
      <ClientsMarquee />
      <WhatWeDo />
      <Specialisations />
      <BrandPromise />
      <Testimonials />
      <InsightsPreview />
      <Newsletter />
    </main>
  );
}
