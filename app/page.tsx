import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhatWeDo from '@/components/WhatWeDo';
import Specialisations from '@/components/Specialisations';
import BrandPromise from '@/components/BrandPromise';
import Testimonials from '@/components/Testimonials';
import InsightsPreview from '@/components/InsightsPreview';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'myhr — People-Powered Recruitment | Home',
  description:
    'myhr connects exceptional talent with remarkable organisations. Specialist recruitment in Accounting, Tech, Sales, HR, Marketing, Customer Experience & more.',
};

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Stats />
      <WhatWeDo />
      <Specialisations />
      <BrandPromise />
      <Testimonials />
      <InsightsPreview />
      <Newsletter />
    </main>
  );
}
