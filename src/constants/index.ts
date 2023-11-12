import { DashboardTabIndexType } from '@/types/index';

export const networkStaticData: {
  zk_evm: { icon: string };
  zk_era: { icon: string };
  zora: { icon: string };
  linea: { icon: string };
  base: { icon: string };
  scroll: { icon: string };
  rubyscore: { icon: string };
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
  scroll: {
    icon: '/asserts/net/Scroll.svg',
  },
  rubyscore: {
    icon: '/asserts/net/rubyscore.svg',
  },
};
export const myLevelIcons = {
  zk_era: [
    '/asserts/box/zkSynk/zkSynk1.png',
    '/asserts/box/zkSynk/zkSynk2.png',
    '/asserts/box/zkSynk/zkSynk3.png',
    '/asserts/box/zkSynk/zkSynk4.png',
    '/asserts/box/zkSynk/zkSynk5.png',
    '/asserts/box/zkSynk/zkSynk6.png',
    '/asserts/box/zkSynk/zkSynk7.png',
    '/asserts/box/zkSynk/zkSynk8.png',
    '/asserts/box/zkSynk/zkSynk9.png',
    '/asserts/box/zkSynk/zkSynk10.png',
  ],
  linea: [
    '/asserts/box/linea/linea1.png',
    '/asserts/box/linea/linea2.png',
    '/asserts/box/linea/linea3.png',
    '/asserts/box/linea/linea4.png',
    '/asserts/box/linea/linea5.png',
    '/asserts/box/linea/linea6.png',
    '/asserts/box/linea/linea7.png',
    '/asserts/box/linea/linea8.png',
    '/asserts/box/linea/linea9.png',
    '/asserts/box/linea/linea10.png',
  ],
  base: [
    '/asserts/box/base/base1.png',
    '/asserts/box/base/base2.png',
    '/asserts/box/base/base3.png',
    '/asserts/box/base/base4.png',
    '/asserts/box/base/base5.png',
    '/asserts/box/base/base6.png',
    '/asserts/box/base/base7.png',
    '/asserts/box/base/base8.png',
    '/asserts/box/base/base9.png',
    '/asserts/box/base/base10.png',
  ],
  zora: [
    '/asserts/box/zora/zora1.png',
    '/asserts/box/zora/zora2.png',
    '/asserts/box/zora/zora3.png',
    '/asserts/box/zora/zora4.png',
    '/asserts/box/zora/zora5.png',
    '/asserts/box/zora/zora6.png',
    '/asserts/box/zora/zora7.png',
    '/asserts/box/zora/zora8.png',
    '/asserts/box/zora/zora9.png',
    '/asserts/box/zora/zora10.png',
  ],
  zk_evm: [
    '/asserts/box/zkEvm/zkEvm1.png',
    '/asserts/box/zkEvm/zkEvm2.png',
    '/asserts/box/zkEvm/zkEvm3.png',
    '/asserts/box/zkEvm/zkEvm4.png',
    '/asserts/box/zkEvm/zkEvm5.png',
    '/asserts/box/zkEvm/zkEvm6.png',
    '/asserts/box/zkEvm/zkEvm7.png',
    '/asserts/box/zkEvm/zkEvm8.png',
    '/asserts/box/zkEvm/zkEvm9.png',
    '/asserts/box/zkEvm/zkEvm10.png',
  ],
  scroll: [
    '/asserts/box/scroll/scroll1.png',
    '/asserts/box/scroll/scroll2.png',
    '/asserts/box/scroll/scroll3.png',
    '/asserts/box/scroll/scroll4.png',
    '/asserts/box/scroll/scroll5.png',
    '/asserts/box/scroll/scroll6.png',
    '/asserts/box/scroll/scroll7.png',
    '/asserts/box/scroll/scroll8.png',
    '/asserts/box/scroll/scroll9.png',
    '/asserts/box/scroll/scroll10.png',
  ],
  rubyscore: [
    '/asserts/box/rubyscore/rubyscore1.png',
    '/asserts/box/rubyscore/rubyscore2.png',
    '/asserts/box/rubyscore/rubyscore3.png',
    '/asserts/box/rubyscore/rubyscore4.png',
    '/asserts/box/rubyscore/rubyscore5.png',
    '/asserts/box/rubyscore/rubyscore6.png',
    '/asserts/box/rubyscore/rubyscore7.png',
    '/asserts/box/rubyscore/rubyscore8.png',
    '/asserts/box/rubyscore/rubyscore9.png',
    '/asserts/box/rubyscore/rubyscore10.png',
  ],
};
export const dashboardPanelTabs: { index: DashboardTabIndexType; label: string }[] = [
  {
    index: 'zk_era',
    label: 'ZkSync',
  },
  {
    index: 'linea',
    label: 'Linea',
  },
  {
    index: 'base',
    label: 'Base',
  },
  {
    index: 'zk_evm',
    label: 'ZkEvm',
  },
  {
    index: 'scroll',
    label: 'Scroll',
  },
];
