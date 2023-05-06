import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';
import { UserButton } from '@clerk/nextjs';
import Header from './components/header';

export default function Home() {
  return (
    <main>
      <Analytics />
      <Header />
    </main>
  );
}
