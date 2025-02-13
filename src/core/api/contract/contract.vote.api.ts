import { getNetwork, switchNetwork, waitForTransaction, writeContract } from '@wagmi/core';
import { getVoteBaseContractConfig } from '@/utils/helpers';

import { IVotePayload } from '@/core/types';
import { prodVoteContracts } from '@/providers/prodChains';
import { testVoteContracts } from '@/providers/testChains';
import { abiIXProjectSBT } from '@/constants/abiIXProjectSBT';
import { abiVote } from '@/constants/abiVote';
import { toast } from 'react-toastify';
import { parseEther } from 'viem';
import { wagmiConfig } from '@/providers/walletConfig';
const contractInfo = process.env.NEXT_PUBLIC_IS_PROD === 'true' ? prodVoteContracts : testVoteContracts;
export const wagmiVote = async (data: IVotePayload): Promise<any> => {
  const action = async (data: IVotePayload) => {
    const { project, account } = data;
    const baseConfig = getVoteBaseContractConfig(project, contractInfo);
    const { chain, chains } = await getNetwork();
    if (chain && chain.id !== baseConfig.chainId) {
      await switchNetwork({
        chainId: baseConfig.chainId,
      });
    }
    const gasEstimate = await wagmiConfig.publicClient.estimateGas({
      account,
      to: baseConfig.address,
      value: parseEther('0.00000001'),
    });
    let config: any = {
      ...baseConfig,
      functionName: 'vote',
      abi: abiVote,
      account: account,
    };
    if (project !== 'zk_era' && project !== 'mantle') {
      config.gas = 22000;
    } else {
      const gasEstimate = await wagmiConfig.publicClient.estimateGas({
        account,
        to: baseConfig.address,
        value: parseEther('0.00000001'),
      });
      if (gasEstimate) {
        config.gas = Math.floor(Number(BigInt(gasEstimate)) * 0.7);
      }
    }
    const { hash } = await writeContract(config);
    const result = await waitForTransaction({
      hash: hash,
    });
    toast('Your vote has been counted', { position: 'top-right' });
    return result;
  };
  try {
    return await action(data);
  } catch (error: any) {
    toast(error.shortMessage, { position: 'top-right' });
  }
};
