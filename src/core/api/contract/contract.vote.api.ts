import { getNetwork, switchNetwork, waitForTransaction, writeContract } from '@wagmi/core';
import { getVoteBaseContractConfig } from '@/utils/helpers';

import { IVotePayload } from '@/core/types';
import { networkVoteContracts } from '@/providers/networkChains';
import { abiVote } from '@/constants/abiVote';
import { toast } from 'react-toastify';
import { parseEther } from 'viem';
import { wagmiConfig } from '@/providers/walletConfig';
export const wagmiVote = async (data: IVotePayload): Promise<any> => {
  const action = async (data: IVotePayload) => {
    const { project, account } = data;
    const baseConfig = getVoteBaseContractConfig(project, networkVoteContracts);
    const { chain, chains } = await getNetwork();
    if (chain && chain.id !== baseConfig.chainId) {
      await switchNetwork({
        chainId: baseConfig.chainId,
      });
    }

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
        if (project === 'mantle')
          config.gas = project === 'mantle' ? gasEstimate : Math.floor(Number(BigInt(gasEstimate)) * 0.7);
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
