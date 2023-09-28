'use client';
import { FC, ReactNode, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useSignMessage } from 'wagmi';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { ILoginPayload } from '@/core/types';
import { login } from '@/core/thunk/auth.thunk';
import { useSearchParams } from 'next/navigation';
import { logout, setAuthLoading, setIsAuth } from '@/core/state/auth.state';
interface Props {
  children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const searchParams = useSearchParams();
  const isAuth = useAppSelector(state => state.authState.isAuth);
  const loginLoading = useAppSelector(state => state.authState.loading);
  const referralCode = searchParams.get('ref');
  const { address, isConnected, connector, isReconnecting } = useAccount();
  const message = 'Check Wallet';
  const { data: signMessageData, error, isLoading, signMessage, variables, reset } = useSignMessage();
  const dispatch = useAppDispatch();
  const { connect } = useConnect();
  const storedSignature = typeof window !== 'undefined' && localStorage.getItem('signature');
  const storedAuth = typeof window !== 'undefined' && localStorage.getItem('isAuth');
  useEffect(() => {
    if (!isAuth) {
      if (connector && isConnected && address) {
        if (storedSignature) {
          dispatch(setAuthLoading(true));
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
          dispatch(setAuthLoading(true));
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
  }, [signMessageData, isConnected, connector, storedSignature, storedAuth, isReconnecting, loginLoading]);
  useEffect(() => {
    dispatch(setAuthLoading(isLoading));
    if (error) {
      dispatch(logout());
    }
  }, [error]);
  return <>{children}</>;
};
export default AuthProvider;
