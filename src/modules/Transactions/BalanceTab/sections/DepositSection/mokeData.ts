import { networkStaticData } from '@/constants/index';

export const networkOptions = [
  {
    text: 'Scroll',
    icon: networkStaticData['scroll'].icon,
    value: 'scroll',
  },
  {
    text: 'zkEVM',
    icon: networkStaticData['zk_evm'].icon,
    value: 'zk_evm',
  },
  {
    text: 'zkSync',
    icon: networkStaticData['zk_era'].icon,
    value: 'zk_era',
  },
  {
    text: 'Linea',
    icon: networkStaticData['linea'].icon,
    value: 'linea',
  },
  {
    text: 'Bas',
    icon: networkStaticData['base'].icon,
    value: 'base',
  },
  {
    text: 'Manta',
    icon: networkStaticData['manta'].icon,
    value: 'manta',
  },
  {
    text: 'Blast',
    icon: networkStaticData['blast'].icon,
    value: 'blast',
  },
  {
    text: 'Zora',
    icon: networkStaticData['zora'].icon,
    value: 'zora',
  },
  {
    text: 'Mantle',
    icon: networkStaticData['mantle'].icon,
    value: 'mantle',
  },
];
