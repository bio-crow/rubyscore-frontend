import Dashboard from '@/modules/Dashboard/Dashboard';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <main>
        <Suspense fallback={<div />}>
          <Dashboard />
        </Suspense>
      </main>
    </>
  );
}
