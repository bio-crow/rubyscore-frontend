import { fetchBalance, prepareWriteContract, waitForTransaction, writeContract } from '@wagmi/core';
import { getContractConfig } from '@/utils/helpers';
import { depositContracts } from '@/providers/networkChains';
import { switchToContractChain } from '@/core/api/contract/helpers';
import { abiDeposit } from '@/constants/abiDeposit';
import {
  IClaimLevelSignaturePayload,
  IClaimLevelSignatureResponse,
  IDepositAnotherPayload,
  IDepositSinglePayload,
} from '@/core/types';
import { parseEther } from 'viem';
import { toast } from 'react-toastify';
import { IReferralClaimData } from '@/types/index';
import { apiPrivateAxios } from '@/core/api/axiosConfig';
export const wagmiDepositSingleWallet = async (data: IDepositSinglePayload): Promise<any> => {
  const action = async ({ project, value }: IDepositSinglePayload) => {
    const baseConfig = getContractConfig(project, depositContracts);
    await switchToContractChain(baseConfig.chainId);
    let config: any = await prepareWriteContract({
      ...baseConfig,
      abi: abiDeposit,
      functionName: 'deposit',
      value: parseEther(value.toString()),
    });
    const { hash } = await writeContract(config);
    const result = await waitForTransaction({
      hash: hash,
    });
    toast('Your deposit has been counted', { position: 'top-right' });
    return result;
  };
  try {
    return await action(data);
  } catch (error: any) {
    toast(error.shortMessage, { position: 'top-right' });
  }
  return;
};
export const wagmiDepositAnotherWallet = async (data: IDepositAnotherPayload): Promise<any> => {
  const action = async ({ project, value, address }: IDepositAnotherPayload) => {
    const baseConfig = getContractConfig(project, depositContracts);
    await switchToContractChain(baseConfig.chainId);
    const config = await prepareWriteContract({
      ...baseConfig,
      abi: abiDeposit,
      functionName: 'deposit',
      value: parseEther(value.toString()),
      args: [address],
    });
    const { hash } = await writeContract(config);
    const result = await waitForTransaction({
      hash: hash,
    });
    toast('Your deposit has been counted', { position: 'top-right' });
    return result;
  };
  try {
    return await action(data);
  } catch (error: any) {
    toast(error.shortMessage, { position: 'top-right' });
  }
  return;
};

export const wagmiReferralClaimProfit = async (data: IReferralClaimData): Promise<any> => {
  const action = async ({ project, recipient, nonce, signature, amount }: IReferralClaimData) => {
    const baseConfig = getContractConfig(project, depositContracts);
    await switchToContractChain(baseConfig.chainId);
    let config: any = await prepareWriteContract({
      ...baseConfig,
      abi: abiDeposit,
      functionName: 'claimProfit',
      args: [[recipient, amount, nonce], signature],
    });
    const { hash } = await writeContract(config);
    const result = await waitForTransaction({
      hash: hash,
    });
    toast('Your profit has been claimed', { position: 'top-right' });
    return result;
  };
  try {
    return await action(data);
  } catch (error: any) {
    toast(error.shortMessage, { position: 'top-right' });
  }
  return;
};

export const wagmiFetchBalance = async (params: { project: string; address: any }) => {
  try {
    const { project, address } = params;
    const baseConfig = getContractConfig(project, depositContracts);
    return await fetchBalance({
      address,
      chainId: baseConfig.chainId,
    });
  } catch (error) {
    //console.error(error);
  }
  return;
};
