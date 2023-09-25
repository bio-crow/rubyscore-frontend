'use client';
import { FC, ReactNode, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useSignMessage } from 'wagmi';
import { useIsMounted } from '@/hooks/useIsMounted';
import PrivatePageLayout from '@/components/layout/PrivatePageLayout/PrivatePageLayout';
import GlobalLoader from '@/components/common/GlobalLoader/GlobalLoader';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { ILoginPayload } from '@/core/types';
import { login } from '@/core/thunk/auth.thunk';
import { useSearchParams } from 'next/navigation';
import { setAuthLoading, setIsAuth } from '@/core/state/auth.state';
interface Props {
  children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get('ref');
  const { address, isConnected, connector } = useAccount();
  const message = 'Check Wallet';
  const { data: signMessageData, error, isLoading, signMessage, variables, reset } = useSignMessage();
  const dispatch = useAppDispatch();
  const { disconnect } = useDisconnect();
  useEffect(() => {
    if (!signMessageData && isConnected && connector) {
      signMessage({ message });
    }
    if (signMessageData && isConnected && address) {
      let data: ILoginPayload = {
        signature: signMessageData,
        message: message,
        wallet: address,
      };
      if (referralCode) {
        data = { ...data, referralCode };
      }
      dispatch(login(data));
    }
    if (!isConnected) {
      dispatch(setIsAuth(false));
      reset();
    }
  }, [signMessageData, isConnected, connector]);
  useEffect(() => {
    dispatch(setAuthLoading(isLoading));
    if (!signMessageData && !isLoading && isConnected) {
      disconnect();
    }
  }, [isLoading]);
  return <>{children}</>;
};
export default AuthProvider;
