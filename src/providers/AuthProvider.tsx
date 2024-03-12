'use client';
import { FC, ReactNode, useEffect } from 'react';
import { ConnectorData, useAccount, useConnect, useDisconnect } from 'wagmi';
import { useSignMessage } from 'wagmi';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { ILoginPayload } from '@/core/types';
import { login, logout } from '@/core/thunk/auth.thunk';
import { useSearchParams } from 'next/navigation';
import { setAuthLoading, setIsAuth } from '@/core/state/auth.state';
interface Props {
  children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const searchParams = useSearchParams();
  const { connector: activeConnector } = useAccount();
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const loginLoading = useAppSelector(state => state.authState.loading);
  const referralCode = searchParams.get('ref');
  const { address, isConnected, connector, isReconnecting } = useAccount();
  const message =
    ' A signature is required for authorization on the platform and does not pose a threat to users!';
  const { data: signMessageData, error, isLoading, signMessage, variables, reset } = useSignMessage();
  const dispatch = useAppDispatch();
  const { connect } = useConnect();
  const storedAuth = typeof window !== 'undefined' && localStorage.getItem('isAuth');
  useEffect(() => {
    const storedSignature = typeof window !== 'undefined' && localStorage.getItem('signature');
    if (!isAuth && !loginLoading) {
      if (connector && isConnected && address) {
        if (storedSignature) {
          let data: ILoginPayload = {
            signature: storedSignature,
            message: message,
            wallet: address,
          };
          if (referralCode) {
            data = { ...data, referralCode };
          }
          dispatch(login(data));
        } else if (signMessageData) {
          localStorage.setItem('signature', signMessageData);
          let data: ILoginPayload = {
            signature: signMessageData,
            message: message,
            wallet: address,
          };
          if (referralCode) {
            data = { ...data, referralCode };
          }
          dispatch(login(data));
        } else {
          signMessage({ message });
        }
      }
      if (connector && !isConnected && storedAuth) {
        connect();
      }
    }
  }, [signMessageData, isConnected, connector, storedAuth, isReconnecting, loginLoading]);
  useEffect(() => {
    dispatch(setAuthLoading(isLoading));
    if (error) {
      dispatch(logout());
      reset();
    }
  }, [error]);
  useEffect(() => {
    const handleConnectorUpdate = ({ account, chain }: ConnectorData) => {
      if (account) {
        dispatch(logout());
        reset();
      }
    };

    if (activeConnector) {
      activeConnector.on('change', handleConnectorUpdate);
    }

    return () => {
      activeConnector && activeConnector.off('change', handleConnectorUpdate);
    };
  }, [activeConnector]);
  return <>{children}</>;
};
export default AuthProvider;
