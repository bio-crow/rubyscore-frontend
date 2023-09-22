'use client';
import { FC, ReactNode, useEffect } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { useSignMessage } from 'wagmi';
import { useIsMounted } from '@/hooks/useIsMounted';
import AuthLayout from '@/components/layout/AuthLayout/AuthLayout';
import GlobalLoader from '@/components/common/GlobalLoader/GlobalLoader';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { ILoginPayload } from '@/core/types';
import { login } from '@/core/thunk/auth.thunk';

interface Props {
  children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const { address, isConnected, connector } = useAccount();
  const token = useAppSelector(state => state.authState.token);
  const loading = useAppSelector(state => state.authState.loading);
  const message = 'Check Wallet';
  const { data: signMessageData, error, isLoading, signMessage, variables, reset } = useSignMessage();
  const mounted = useIsMounted();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!signMessageData && isConnected && connector) {
      signMessage({ message });
    }
    if (signMessageData && isConnected && address) {
      const data: ILoginPayload = {
        signature: signMessageData,
        message: message,
        wallet: address,
      };
      dispatch(login(data));
    }
    if (!isConnected) {
      reset();
    }
  }, [signMessageData, isConnected, connector]);
  if (!mounted || loading || (isConnected && !signMessageData)) {
    return <GlobalLoader />;
  }
  if (isConnected && signMessageData && token) {
    return <>{children}</>;
  }
  return <AuthLayout />;
};
export default AuthProvider;
