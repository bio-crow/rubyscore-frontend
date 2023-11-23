import { getNetwork, switchNetwork, writeContract } from '@wagmi/core';
import { abiIXProjectSBT } from '@/constants/abiIXProjectSBT';
import { waitForTransaction } from '@wagmi/core';
import { IClaimPayload } from '@/core/types';
import { readContract } from '@wagmi/core';
import { toast } from 'react-toastify';
import { parseEther } from 'viem';
import { testContracts } from '@/providers/testChains';
import { prodContracts } from '@/providers/prodChains';
const appNet = process.env.NEXT_PUBLIC_IS_PROD === 'true' ? prodContracts.app : testContracts.app;
const baseConfig = {
  address: appNet.contract,
  abi: abiIXProjectSBT,
  chainId: appNet.chainId,
};
export const wagmiClaimName = async (data: IClaimPayload): Promise<any> => {
  const action = async ({ account, name, payable, price }: IClaimPayload) => {
    const { chain, chains } = await getNetwork();
    if (chain && chain.id !== appNet.chainId) {
      await switchNetwork({
        chainId: appNet.chainId,
      });
    }
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
