import { waitForTransaction, writeContract } from '@wagmi/core';
import { getContractConfig } from '@/utils/helpers';
import { depositContracts } from '@/providers/networkChains';
import { switchToContractChain } from '@/core/api/contract/helpers';
import { abiDeposit } from '@/constants/abiDeposit';
import { IDepositAnotherPayload, IDepositSinglePayload } from '@/core/types';
import { parseEther } from 'viem';
import { toast } from 'react-toastify';
import { IReferralClaimData } from '@/types/index';
export const wagmiDepositSingleWallet = async (data: IDepositSinglePayload): Promise<any> => {
  const action = async ({ project, value }: IDepositSinglePayload) => {
    const baseConfig = getContractConfig(project, depositContracts);
    await switchToContractChain(baseConfig.chainId);
    let config: any = {
      ...baseConfig,
      abi: abiDeposit,
      functionName: 'deposit',
      value: parseEther(value.toString()),
      gas: 50000,
    };
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
    let config: any = {
      ...baseConfig,
      abi: abiDeposit,
      functionName: 'deposit',
      value: parseEther(value.toString()),
      gas: 50000,
      args: [address],
    };
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
    let config: any = {
      ...baseConfig,
      abi: abiDeposit,
      functionName: 'claimProfit',
      gas: 200000,
      args: [[recipient, amount, nonce], signature],
    };
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
