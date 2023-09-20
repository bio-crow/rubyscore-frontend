'use client';
import { useIsMounted } from '../src/hooks/useIsMounted';
import { useAccount } from 'wagmi';
import Dashboard from '@/modules/Dashboard/Dashboard';
import AuthLayout from '@/components/layout/AuthLayout/AuthLayout';
import GlobalLoader from '@/components/common/GlobalLoader/GlobalLoader';

export default function Page() {
  const { isConnected } = useAccount();
  const mounted = useIsMounted();
  return <main>{mounted ? isConnected ? <Dashboard /> : <AuthLayout /> : <GlobalLoader />}</main>;
}
