import { getNetwork, switchNetwork } from '@wagmi/core';
export const switchToContractChain = async (contractChainId: number) => {
  const { chain, chains } = await getNetwork();
  if (chain && chain.id !== contractChainId) {
    await switchNetwork({
      chainId: contractChainId,
    });
  }
};
