import { writeContract } from '@wagmi/core';
import { abiIXProjectSBT } from '@/constants/abiIXProjectSBT';
import { waitForTransaction } from '@wagmi/core';
import { IClaimPayload } from '@/core/types';
import { readContract } from '@wagmi/core';
import { toast } from 'react-toastify';
import { parseEther } from 'viem';
import * as process from 'process';
const address: any = process.env.NEXT_PUBLIC_SMART_CONTRACT;
export const wagmiClaimName = async (data: IClaimPayload): Promise<any> => {
  const action = async ({ account, name, payable }: IClaimPayload) => {
    const { hash } = await writeContract({
      address: '0x295954Ed3A7BDd3bbe875926adea5e5d7ab65571',
      abi: abiIXProjectSBT,
      functionName: 'claimName',
      account: account,
      value: parseEther(payable ? '0.000001' : '0'),
      args: [name],
    });
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
export const wagmiGetNameByOwner = async (address: any): Promise<any> => {
  const action = async (address: any) => {
    return await readContract({
      address: '0x295954Ed3A7BDd3bbe875926adea5e5d7ab65571',
      abi: abiIXProjectSBT,
      functionName: 'getNameByOwner',
      args: [address],
    });
  };
  try {
    return await action(address);
  } catch (error) {
    //console.error(error);
  }
};
export const wagmiGetPremiumStatus = async (address: any): Promise<any> => {
  const action = async (address: any) => {
    return await readContract({
      address: '0x295954Ed3A7BDd3bbe875926adea5e5d7ab65571',
      abi: abiIXProjectSBT,
      functionName: 'getPremiumStatus',
      args: [address],
    });
  };
  try {
    return await action(address);
  } catch (error) {
    //console.error(error);
  }
};
