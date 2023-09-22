'use client';
import { FC, ReactNode, useEffect } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { useSignMessage } from 'wagmi';
import { useIsMounted } from '@/hooks/useIsMounted';
import AuthLayout from '@/components/layout/AuthLayout/AuthLayout';
import GlobalLoader from '@/components/common/GlobalLoader/GlobalLoader';

interface Props {
  children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const { address, isConnected, connector } = useAccount();
  const message = 'Check Wallet';
  const { data: signMessageData, error, isLoading, signMessage, variables } = useSignMessage();
  const mounted = useIsMounted();
  useEffect(() => {
    if (!signMessageData && isConnected && connector) {
      signMessage({ message });
    }
    if (signMessageData && isConnected) {
      const data = {
        signature: signMessageData,
        message: message,
        wallet: address,
      };
      // console.log(data);
    }
  }, [signMessageData, isConnected, connector]);
  if (!mounted) {
    return <GlobalLoader />;
  }
  if (isConnected && !signMessageData) {
    return <GlobalLoader />;
  }
  if (isConnected && signMessageData) {
    return <>{children}</>;
  }
  return <AuthLayout />;
};
export default AuthProvider;
