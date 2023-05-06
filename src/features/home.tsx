'use client';

import { useUser } from '@clerk/nextjs';

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) return <main>Loading...</main>;

  return <main className="">Welcome {user.firstName || user.username}</main>;
}
