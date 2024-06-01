import { waitForTransaction, writeContract } from '@wagmi/core';
import { getContractConfig } from '@/utils/helpers';
import { depositContracts } from '@/providers/networkChains';
import { switchToContractChain } from '@/core/api/contract/helpers';
import { abiDeposit } from '@/constants/abiDeposit';
import { IDepositSinglePayload } from '@/core/types';
import { parseEther } from 'viem';
export const wagmiDepositSingleWallet = async (data: IDepositSinglePayload): Promise<any> => {
  const action = async ({ project, value }: IDepositSinglePayload) => {
    const baseConfig = getContractConfig(project, depositContracts);
    await switchToContractChain(baseConfig.chainId);
    let config: any = {
      ...baseConfig,
      abi: abiDeposit,
      functionName: 'deposit',
      value: parseEther(value),
    };
    const { hash } = await writeContract(config);
    return await waitForTransaction({
      hash: hash,
    });
  };
};
