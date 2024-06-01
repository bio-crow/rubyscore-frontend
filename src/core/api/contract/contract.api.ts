import { writeContract } from '@wagmi/core';
import { abiIXProjectSBT } from '@/constants/abiIXProjectSBT';
import { waitForTransaction } from '@wagmi/core';
import { IClaimPayload } from '@/core/types';
import { readContract } from '@wagmi/core';
import { toast } from 'react-toastify';
import { parseEther } from 'viem';
import { networkContracts } from '@/providers/networkChains';
import { switchToContractChain } from '@/core/api/contract/helpers';
const baseConfig = {
  address: networkContracts.app.contract,
  abi: abiIXProjectSBT,
  chainId: networkContracts.app.chainId,
};
export const wagmiClaimName = async (data: IClaimPayload): Promise<any> => {
  const action = async ({ account, name, payable, price }: IClaimPayload) => {
    await switchToContractChain(networkContracts.app.chainId);
    let config: any = {
      ...baseConfig,
      functionName: 'claimName',
      account: account,
      args: [''],
    };
    if (payable) {
      config.value = parseEther(price);
    }
    if (name) {
      config.args = [`${name}`];
    }
    const { hash } = await writeContract(config);
    return await waitForTransaction({
      hash: hash,
    });
  };
  try {
    return await action(data);
  } catch (error: any) {
    toast(error.shortMessage, { position: 'top-right' });
  }
};

export const wagmiCheckName = async (name: string): Promise<any> => {
  const action = async (name: string) => {
    let config: any = {
      ...baseConfig,
      functionName: 'checkName',
      args: [`${name}`],
    };
    return await readContract(config);
  };
  try {
    return await action(name);
  } catch (error: any) {
    //console.error(error);
  }
};
