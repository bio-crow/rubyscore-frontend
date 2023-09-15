'use client';
import Leaderboard from '@/modules/Leaderboard/Leaderboard';
import { useAccount } from 'wagmi';
import { useIsMounted } from '../../src/hooks/useIsMounted';
import AuthLayout from '@/components/layout/AuthLayout/AuthLayout';

export default function Page() {
  const { address, isConnected } = useAccount();
  const mounted = useIsMounted();
  return <main>{mounted && isConnected ? <Leaderboard /> : <AuthLayout />}</main>;
}
