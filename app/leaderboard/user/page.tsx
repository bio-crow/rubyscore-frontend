'use client';
import { useAccount } from 'wagmi';
import { useIsMounted } from '@/hooks/useIsMounted';
import AuthLayout from '@/components/layout/AuthLayout/AuthLayout';
import LeaderBoardUser from '@/modules/LeaderBoardUser/LeaderBoardUser';
import Dashboard from '@/modules/Dashboard/Dashboard';
import GlobalLoader from '@/components/common/GlobalLoader/GlobalLoader';

export default function Page() {
  const { address, isConnected } = useAccount();
  const mounted = useIsMounted();
  return <main>{mounted ? isConnected ? <LeaderBoardUser /> : <AuthLayout /> : <GlobalLoader />}</main>;
}
