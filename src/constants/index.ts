import { DashboardTabIndexType } from '@/types/index';

interface NetworkStatic {
  icon: string;
  label: string;
}

export const networkStaticData: {
  zk_evm: NetworkStatic;
  zk_era: NetworkStatic;
  linea: NetworkStatic;
  base: NetworkStatic;
  scroll: NetworkStatic;
  rubyscore: NetworkStatic;
  manta: NetworkStatic;
  blast: NetworkStatic;
  zora: NetworkStatic;
  // taiko: { icon: string };
  mantle: NetworkStatic;
} = {
  zk_era: {
    icon: '/asserts/net/zkSync.svg',
    label: 'zkSync',
  },
  linea: {
    icon: '/asserts/net/Linea.svg',
    label: 'Linea',
  },
  base: {
    icon: '/asserts/net/Base.svg',
    label: 'Base',
  },
  zk_evm: {
    icon: '/asserts/net/zkEvm.svg',
    label: 'zkEvm',
  },
  scroll: {
    icon: '/asserts/net/Scroll.svg',
    label: 'Scroll',
  },
  rubyscore: {
    icon: '/asserts/net/rubyscore.svg',
    label: 'Rubyscore',
  },
  manta: {
    icon: '/asserts/net/manta.svg',
    label: 'Manta',
  },
  blast: {
    icon: '/asserts/net/blast.svg',
    label: 'Blast',
  },
  zora: {
    icon: '/asserts/net/Zora.svg',
    label: 'Zora',
  },
  // taiko: {
  //   icon: '/asserts/net/taiko.svg',   label: 'Taiko'
  // },
  mantle: {
    icon: '/asserts/net/mantle.svg',
    label: 'Mantle',
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
  manta: [
    '/asserts/box/manta/manta1.png',
    '/asserts/box/manta/manta2.png',
    '/asserts/box/manta/manta3.png',
    '/asserts/box/manta/manta4.png',
    '/asserts/box/manta/manta5.png',
    '/asserts/box/manta/manta6.png',
    '/asserts/box/manta/manta7.png',
    '/asserts/box/manta/manta8.png',
    '/asserts/box/manta/manta9.png',
    '/asserts/box/manta/manta10.png',
  ],
  blast: [
    '/asserts/box/blast/blast1.png',
    '/asserts/box/blast/blast2.png',
    '/asserts/box/blast/blast3.png',
    '/asserts/box/blast/blast4.png',
    '/asserts/box/blast/blast5.png',
    '/asserts/box/blast/blast6.png',
    '/asserts/box/blast/blast7.png',
    '/asserts/box/blast/blast8.png',
    '/asserts/box/blast/blast9.png',
    '/asserts/box/blast/blast10.png',
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
  taiko: [
    '/asserts/box/taiko/taiko1.png',
    '/asserts/box/taiko/taiko2.png',
    '/asserts/box/taiko/taiko3.png',
    '/asserts/box/taiko/taiko4.png',
    '/asserts/box/taiko/taiko5.png',
    '/asserts/box/taiko/taiko6.png',
    '/asserts/box/taiko/taiko7.png',
    '/asserts/box/taiko/taiko8.png',
    '/asserts/box/taiko/taiko9.png',
    '/asserts/box/taiko/taiko10.png',
  ],
  mantle: [
    '/asserts/box/mantle/mantle1.png',
    '/asserts/box/mantle/mantle2.png',
    '/asserts/box/mantle/mantle3.png',
    '/asserts/box/mantle/mantle4.png',
    '/asserts/box/mantle/mantle5.png',
    '/asserts/box/mantle/mantle6.png',
    '/asserts/box/mantle/mantle7.png',
    '/asserts/box/mantle/mantle8.png',
    '/asserts/box/mantle/mantle9.png',
    '/asserts/box/mantle/mantle10.png',
  ],
};
export const dashboardPanelTabs: { index: DashboardTabIndexType; label: string }[] = [
  {
    index: 'zk_era',
    label: 'zkSync',
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
    index: 'blast',
    label: 'Blast',
  },
  {
    index: 'scroll',
    label: 'Scroll',
  },
  {
    index: 'zk_evm',
    label: 'zkEVM',
  },
  {
    index: 'manta',
    label: 'Manta',
  },
  {
    index: 'zora',
    label: 'Zora',
  },
  // {
  //   index: 'taiko',
  //   label: 'Taiko',
  // },
  {
    index: 'mantle',
    label: 'Mantle',
  },
];
export const axisLabelMap = {
  transactions: {
    x: 'TX',
    y: 'Wallets',
  },
  contracts: {
    x: 'Contracts',
    y: 'Wallets',
  },
  days: {
    x: 'Days',
    y: 'Wallets',
  },
  weeks: {
    x: 'Weeks',
    y: 'Wallets',
  },
  months: {
    x: 'Months',
    y: 'Wallets',
  },
  gas: {
    x: 'Spent USD',
    y: 'Wallets',
  },
  volume: {
    x: 'Volume USD',
    y: 'Wallets',
  },
  balance: {
    x: 'Balance USD',
    y: 'Wallets',
  },
};
export const axisInfoChartLabelMap = {
  activeUser: {
    x: 'Date',
    y: 'Users',
  },
  transactions: {
    x: 'Date',
    y: 'Tx',
  },
  tvl: {
    x: 'Date',
    y: 'TVL',
  },
  transactionsBridge: {
    x: 'Date',
    y: 'Users',
  },
  volume: {
    x: 'Date',
    y: 'Volume',
  },
};
