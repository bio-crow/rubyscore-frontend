import { prodAttestationContracts } from '@/providers/networkChains';
import { getAchievementsBaseContractConfig } from '@/utils/helpers';
import {
  getNetwork,
  readContract,
  switchNetwork,
  waitForTransaction,
  writeContract,
  prepareWriteContract,
} from '@wagmi/core';
import { abiAttestation } from '@/constants/abiAttestation';
import { IClaimAttestationPayload, IClaimLevelPayload } from '@/core/types';
import { abiAchievements } from '@/constants/abiAchievements';
import { formatEther, parseEther } from 'viem';
import { toast } from 'react-toastify';
import { wagmiClaimPrice } from '@/core/api/contract/contract.achievements.api';
import { IAttestationData } from '@/types/index';
import { abiAttestationCertificate } from '@/constants/abiAttestationCertificate';

export const wagmiAttestationPrice = async (params: { schemaId: string; project: string }): Promise<any> => {
  const action = async (params: { schemaId: string; project: string }) => {
    const { schemaId, project } = params;
    const baseConfig = getAchievementsBaseContractConfig(project, prodAttestationContracts);
    let config: any = {
      ...baseConfig,
      abi: abiAttestation,
      functionName: 'attestationFees',
      args: [schemaId],
    };
    return await readContract(config);
  };
  try {
    return await action(params);
  } catch (error) {
    // console.error(error);
  }
};
export const wagmiClaimAttestation = async (params: IClaimAttestationPayload): Promise<any> => {
  const action = async (params: IClaimAttestationPayload) => {
    const {
      project,
      price,
      account,
      attestationData: { attestationParams, signature },
    } = params;
    const { chain, chains } = await getNetwork();
    const baseConfig = getAchievementsBaseContractConfig(project, prodAttestationContracts);

    if (chain && chain.id !== baseConfig.chainId) {
      await switchNetwork({
        chainId: baseConfig.chainId,
      });
    }
    let config: any = {
      ...baseConfig,
      abi: abiAttestation,
      functionName: 'attestRubyscore',
      value: parseEther(price),
      account: account,
      gas: 370000,
      args: [
        [
          attestationParams?.schemaId,
          attestationParams?.expirationDate,
          attestationParams?.subject,
          attestationParams?.attestationData,
        ],
        [signature],
      ],
    };
    const { request } = await prepareWriteContract(config);
    const { hash } = await writeContract(request);

    const data = await waitForTransaction({
      hash: hash,
    });

    if (data.status === 'success') return data;
  };
  try {
    return await action(params);
  } catch (error: any) {
    toast(error.shortMessage, { position: 'top-right' });
  }
  return;
};
