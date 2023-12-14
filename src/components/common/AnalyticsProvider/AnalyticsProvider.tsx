'use client';

import { Analytics } from '@vercel/analytics/react';
import { useSearchParams } from 'next/navigation';
import { track } from '@vercel/analytics';

const AnalyticsProvider = () => {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get('ref');
  const beforeSendEvent = (event: any) => {
    if (event.type === 'pageview' && event.url.includes('/profile') && referralCode) {
      track('View by referral link', { referralLink: referralCode });
    }
    return event;
  };
  return (
    <>
      <Analytics debug={true} beforeSend={beforeSendEvent} />
    </>
  );
};
export default AnalyticsProvider;
