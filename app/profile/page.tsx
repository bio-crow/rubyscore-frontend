'use client';
import Profile from '@/modules/Profile/Profile';
import { useAccount } from 'wagmi';
import { useIsMounted } from '../../src/hooks/useIsMounted';
import AuthLayout from '@/components/layout/AuthLayout/AuthLayout';
import Dashboard from '@/modules/Dashboard/Dashboard';
import GlobalLoader from '@/components/common/GlobalLoader/GlobalLoader';

export default function Page() {
  const { address, isConnected } = useAccount();
  const mounted = useIsMounted();
  return <main>{mounted ? isConnected ? <Profile /> : <AuthLayout /> : <GlobalLoader />}</main>;
}
