import {
  prodAttestationCertificateContracts,
  prodAttestationContracts,
  prodContracts,
} from '@/providers/prodChains';
import {
  testAttestationCertificateContracts,
  testAttestationContracts,
  testContracts,
} from '@/providers/testChains';
import { getAchievementsBaseContractConfig } from '@/utils/helpers';
import { getNetwork, readContract, switchNetwork, waitForTransaction, writeContract } from '@wagmi/core';
import { abiAttestation } from '@/constants/abiAttestation';
import { IClaimAttestationPayload, IClaimLevelPayload } from '@/core/types';
import { abiAchievements } from '@/constants/abiAchievements';
import { formatEther, parseEther } from 'viem';
import { toast } from 'react-toastify';
import { wagmiClaimPrice } from '@/core/api/contract/contract.achievements.api';
import { IAttestationData } from '@/types/index';
import { abiAttestationCertificate } from '@/constants/abiAttestationCertificate';

const contractInfo =
  process.env.NEXT_PUBLIC_IS_PROD === 'true' ? prodAttestationContracts : testAttestationContracts;
const contractCertificateInfo =
  process.env.NEXT_PUBLIC_IS_PROD === 'true'
    ? prodAttestationCertificateContracts
    : testAttestationCertificateContracts;
export const wagmiAttestationPrice = async (params: { schemaId: string; project: string }): Promise<any> => {
  const action = async (params: { schemaId: string; project: string }) => {
    const { schemaId, project } = params;
    const baseConfig = getAchievementsBaseContractConfig(project, contractInfo);
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
    const baseConfig = getAchievementsBaseContractConfig(project, contractInfo);

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
    const { hash } = await writeContract(config);
    return await waitForTransaction({
      hash: hash,
    });
  };
  try {
    return await action(params);
  } catch (error: any) {
    toast(error.shortMessage, { position: 'top-right' });
  }
  return;
};
export const wagmiGetAttestationStatus = async (params: { address: any; project: string }): Promise<any> => {
  const action = async (params: { address: any; project: string }) => {
    const { address, project } = params;
    const accounts = [address];
    const ids = [1];
    const baseConfig = getAchievementsBaseContractConfig(project, contractCertificateInfo);
    let config: any = {
      ...baseConfig,
      abi: abiAttestationCertificate,
      functionName: 'balanceOfBatch',
      args: [accounts, ids],
    };
    const result: any = await readContract(config);
    return result[0] && parseInt(result[0]) === 1;
  };
  try {
    return await action(params);
  } catch (error) {
    // console.error(error);
  }
};
