import { NetworksType } from '@/types/index';

export const networkStaticData: {
  zk_evm: { icon: string };
  zk_era: { icon: string };
  zora: { icon: string };
  linea: { icon: string };
  base: { icon: string };
} = {
  zk_era: {
    icon: '/asserts/net/zkSync.svg',
  },
  linea: {
    icon: '/asserts/net/Linea.svg',
  },
  base: {
    icon: '/asserts/net/Base.svg',
  },
  zora: {
    icon: '/asserts/net/Zora.svg',
  },
  zk_evm: {
    icon: '/asserts/net/zkEvm.svg',
  },
};
