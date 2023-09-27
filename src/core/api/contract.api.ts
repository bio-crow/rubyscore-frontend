import { writeContract } from '@wagmi/core';
import { abiIXProjectSBT } from '@/constants/abiIXProjectSBT';
import { waitForTransaction } from '@wagmi/core';
import { IClaimPayload } from '@/core/types';
import { readContract } from '@wagmi/core';
import { toast } from 'react-toastify';

export const wagmiClaimName = async (data: IClaimPayload): Promise<any> => {
  const action = async ({ account, name }: IClaimPayload) => {
    const { hash } = await writeContract({
      address: '0xe96dd52840c9c592b6bb0b534f44f18c6c94c512',
      abi: abiIXProjectSBT,
      functionName: 'claimName',
      account: account,
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
      address: '0xe96dd52840c9c592b6bb0b534f44f18c6c94c512',
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
