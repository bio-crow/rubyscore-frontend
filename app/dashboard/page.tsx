'use client';
import Dashboard from '@/modules/Dashboard/Dashboard';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const isHidden = process.env.NEXT_PUBLIC_HIDE_DASHBOARD === 'true';
  const { push } = useRouter();

  useEffect(() => {
    isHidden && push('/');
  }, []);
  return (
    <>
      {isHidden ? null : (
        <main>
          <Dashboard />
        </main>
      )}
    </>
  );
}
