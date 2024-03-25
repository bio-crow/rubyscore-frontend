import { testContracts } from '@/providers/testChains';
import { readContract, readContracts, switchNetwork, waitForTransaction, writeContract } from '@wagmi/core';
import { abiAchievements } from '@/constants/abiAchievements';
import { apiPrivateAxios } from '@/core/api/axiosConfig';
import { getNetwork } from '@wagmi/core';
import { IClaimLevelPayload, IClaimLevelSignaturePayload, IClaimLevelSignatureResponse } from '@/core/types';
import { parseEther, parseGwei, formatEther } from 'viem';
import { toast } from 'react-toastify';
import { getAchievementsBaseContractConfig } from '@/utils/helpers';
import { ILevelsInfo } from '@/types/index';
import { abiIXProjectSBT } from '@/constants/abiIXProjectSBT';
import { prodContracts } from '@/providers/prodChains';
const contractInfo = process.env.NEXT_PUBLIC_IS_PROD === 'true' ? prodContracts : testContracts;
const appNet = process.env.NEXT_PUBLIC_IS_PROD === 'true' ? prodContracts.app : testContracts.app;
export const wagmiLevels = async (params: { wallet: string; project: string }): Promise<any> => {
  const action = async (params: { wallet: string; project: string }) => {
    const { wallet: address, project } = params;
    const accounts = [
      address,
      address,
      address,
      address,
      address,
      address,
      address,
      address,
      address,
      address,
    ];
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const baseConfig = getAchievementsBaseContractConfig(project, contractInfo);
    let config: any = {
      ...baseConfig,
      abi: abiAchievements,
      functionName: 'balanceOfBatch',
      args: [accounts, ids],
    };
    let result: any;
    try {
      result = await readContract(config);
    } catch (err) {
      // console.log(err);
    }
    return result.map((item: string) => parseInt(item));
  };
  try {
    return await action(params);
  } catch (error) {
    // console.error(error);
  }
};
export const wagmiClaimLevel = async (data: IClaimLevelPayload): Promise<any> => {
  const action = async ({ signature, mintParams, project, account }: IClaimLevelPayload) => {
    const { chain, chains } = await getNetwork();
    const baseConfig = getAchievementsBaseContractConfig(project, contractInfo);

    if (chain && chain.id !== baseConfig.chainId) {
      await switchNetwork({
        chainId: baseConfig.chainId,
      });
    }
    const price = await wagmiClaimPrice(project);
    let config: any = {
      ...baseConfig,
      abi: abiAchievements,
      functionName: 'safeMint',
      value: parseEther(formatEther(price)),
      account: account,
      args: [[mintParams.userAddress, mintParams.userNonce, mintParams.nftIds], signature],
    };
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
    return await apiPrivateAxios.post<IClaimLevelSignatureResponse>('/achievement/claim', null, { params });
  } catch (error) {
    //console.error(error);
  }
  return;
};
export const wagmiClaimPrice = async (project: string): Promise<any> => {
  const action = async () => {
    const baseConfig = getAchievementsBaseContractConfig(project, contractInfo);
    let config: any = {
      ...baseConfig,
      abi: abiAchievements,
      functionName: 'getPrice',
    };
    return await readContract(config);
  };
  try {
    return await action();
  } catch (error) {
    //  console.error(error);
  }
};
export const wagmiInitUserDataFromContract = async (wallet: string): Promise<any> => {
  const action = async (address: string) => {
    const accounts = [
      address,
      address,
      address,
      address,
      address,
      address,
      address,
      address,
      address,
      address,
    ];
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let contracts = [];
    Object.entries(contractInfo).forEach(item => {
      if (item[0] !== 'app') {
        contracts.push({
          address: item[1].contract,
          chainId: item[1].chainId,
          abi: abiAchievements,
          functionName: 'balanceOfBatch',
          args: [accounts, ids],
        });
      }
    });
    contracts.push({
      address: appNet.contract,
      abi: abiIXProjectSBT,
      chainId: appNet.chainId,
      functionName: 'getNameByOwner',
      args: [address],
    });
    contracts.push({
      address: appNet.contract,
      abi: abiIXProjectSBT,
      chainId: appNet.chainId,
      functionName: 'getPremiumStatus',
      args: [address],
    });
    contracts.push({
      address: appNet.contract,
      abi: abiIXProjectSBT,
      chainId: appNet.chainId,
      functionName: 'getPremiumPrice',
    });
    const config: any = { contracts };
    const result: any = await readContracts(config);
    const errData = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    const levelsInfo: ILevelsInfo = {
      rubyscore:
        result[0].status === 'success' ? result[0].result.map((item: string) => parseInt(item)) : errData,
      base: result[1].status === 'success' ? result[1].result.map((item: string) => parseInt(item)) : errData,
      linea:
        result[2].status === 'success' ? result[2].result.map((item: string) => parseInt(item)) : errData,
      zk_evm:
        result[3].status === 'success' ? result[3].result.map((item: string) => parseInt(item)) : errData,
      zk_era:
        result[4].status === 'success' ? result[4].result.map((item: string) => parseInt(item)) : errData,
      scroll:
        result[5].status === 'success' ? result[5].result.map((item: string) => parseInt(item)) : errData,
      manta:
        result[6].status === 'success' ? result[6].result.map((item: string) => parseInt(item)) : errData,
      blast:
        result[7].status === 'success' ? result[7].result.map((item: string) => parseInt(item)) : errData,
      zora: result[8].status === 'success' ? result[8].result.map((item: string) => parseInt(item)) : errData,
    };
    const userName = result[9].status === 'success' ? result[9].result : null;
    const userStatus = result[10].status === 'success' ? result[10].result : null;
    const premiumPrice = result[11].status === 'success' ? result[11].result : null;
    return { levelsInfo, userName, userStatus, premiumPrice };
  };
  try {
    return await action(wallet);
  } catch (error) {
    // console.error(error);
  }
};
