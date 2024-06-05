import { prodAttestationContracts } from '@/providers/networkChains';
import { getContractConfig } from '@/utils/helpers';
import { readContract, waitForTransaction, writeContract, prepareWriteContract } from '@wagmi/core';
import { abiAttestation } from '@/constants/abiAttestation';
import { IClaimAttestationPayload } from '@/core/types';
import { parseEther } from 'viem';
import { toast } from 'react-toastify';
import { switchToContractChain } from '@/core/api/contract/helpers';

export const wagmiAttestationPrice = async (params: { schemaId: string; project: string }): Promise<any> => {
  const action = async (params: { schemaId: string; project: string }) => {
    const { schemaId, project } = params;
    const baseConfig = getContractConfig(project, prodAttestationContracts);
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
    const baseConfig = getContractConfig(project, prodAttestationContracts);
    await switchToContractChain(baseConfig.chainId);
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
