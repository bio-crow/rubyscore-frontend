import { testContracts } from '@/providers/chains';
import { readContract, switchNetwork, waitForTransaction, writeContract } from '@wagmi/core';
import { abiAchievements } from '@/constants/abiAchievements';
import { apiPrivateAxios } from '@/core/api/axiosConfig';
import {
  IClaimLevelPayload,
  IClaimLevelSignaturePayload,
  IClaimLevelSignatureResponse, IClaimPayload,
  ILoginPayload,
  IRefreshResponse,
} from '@/core/types';
import { parseEther } from 'viem';
import { toast } from 'react-toastify';
import { getAchievementsBaseContractConfig } from '@/utils/helpers';
const contractInfo = testContracts
const appNet =testContracts.app
export const wagmiLevels = async (params: {
  wallet: string;
  project: string;
}): Promise<any> => {
  const action = async (params: {
    wallet: string;
    project: string;
  }) => {

    const { wallet: address, project } = params;
    const accounts = [address, address, address, address, address, address, address, address, address, address];
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const baseConfig = getAchievementsBaseContractConfig(project, contractInfo);
    let config: any = {
      ...baseConfig,
      abi: abiAchievements,
      functionName: 'balanceOfBatch',
      args: [accounts, ids],
    };
    return await readContract(config);
  };
  try {
    return await action(params);
  } catch (error) {
    console.error(error);
  }
};
export const wagmiClaimLevel = async (data: IClaimLevelPayload): Promise<any> => {
  const action = async ({ signature, mintParams,project,account }: IClaimLevelPayload) => {
    const baseConfig = getAchievementsBaseContractConfig(project, contractInfo);
    console.log(baseConfig)
    let config: any = {
      ...baseConfig,
      functionName: 'safeMint',
      account: account,
      args: [mintParams, signature],
    };

    await switchNetwork({
      chainId: baseConfig.chainId,
    })
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
  return;
};
export const fetchClaimLevelSignature = async (params: IClaimLevelSignaturePayload) => {
  try {
    return await apiPrivateAxios.post<IClaimLevelSignatureResponse>('/achievement/claim',null, { params });
  } catch (error) {
    //console.error(error);
  }
  return;
};