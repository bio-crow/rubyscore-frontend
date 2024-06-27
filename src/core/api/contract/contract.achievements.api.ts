import { readContract, readContracts, waitForTransaction, writeContract } from '@wagmi/core';
import { abiAchievements } from '@/constants/abiAchievements';
import { apiPrivateAxios } from '@/core/api/axiosConfig';
import { IClaimLevelPayload, IClaimLevelSignaturePayload, IClaimLevelSignatureResponse } from '@/core/types';
import { parseEther, parseGwei, formatEther } from 'viem';
import { toast } from 'react-toastify';
import { getContractConfig } from '@/utils/helpers';
import { ILevelsInfo } from '@/types/index';
import { abiIXProjectSBT } from '@/constants/abiIXProjectSBT';
import { networkContracts } from '@/providers/networkChains';
import { switchToContractChain } from '@/core/api/contract/helpers';
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
    const baseConfig = getContractConfig(project, networkContracts);
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
    const baseConfig = getContractConfig(project, networkContracts);
    await switchToContractChain(baseConfig.chainId);
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
    const baseConfig = getContractConfig(project, networkContracts);
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
      address,
      address,
    ];
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let contracts = [];
    Object.entries(networkContracts).forEach(item => {
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
      address: networkContracts.app.contract,
      abi: abiIXProjectSBT,
      chainId: networkContracts.app.chainId,
      functionName: 'getNameByOwner',
      args: [address],
    });
    contracts.push({
      address: networkContracts.app.contract,
      abi: abiIXProjectSBT,
      chainId: networkContracts.app.chainId,
      functionName: 'getPremiumStatus',
      args: [address],
    });
    contracts.push({
      address: networkContracts.app.contract,
      abi: abiIXProjectSBT,
      chainId: networkContracts.app.chainId,
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
      mantle:
        result[9].status === 'success' ? result[9].result.map((item: string) => parseInt(item)) : errData,
      taiko:
        result[10].status === 'success' ? result[10].result.map((item: string) => parseInt(item)) : errData,
      ethereum:
        result[11].status === 'success' ? result[11].result.map((item: string) => parseInt(item)) : errData,
      opbnb:
        result[12].status === 'success' ? result[12].result.map((item: string) => parseInt(item)) : errData,
    };
    const userName = result[13].status === 'success' ? result[12].result : null;
    const userStatus = result[14].status === 'success' ? result[13].result : null;
    const premiumPrice = result[15].status === 'success' ? result[14].result : null;
    return { levelsInfo, userName, userStatus, premiumPrice };
  };
  try {
    return await action(wallet);
  } catch (error) {
    // console.error(error);
  }
};
