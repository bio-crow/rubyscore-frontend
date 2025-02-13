import { Chain } from '@rainbow-me/rainbowkit';
export const prodChains: Chain[] = [
  {
    id: 10,
    name: 'Optimism',
    network: 'Optimism',
    nativeCurrency: {
      decimals: 18,
      name: 'Optimism',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://1rpc.io/op'],
      },
      default: {
        http: ['https://1rpc.io/op'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Optimism',
        url: 'https://optimistic.etherscan.io',
      },
    },
    testnet: false,
  },
  {
    id: 8453,
    name: 'Base',
    network: 'Base',
    nativeCurrency: {
      decimals: 18,
      name: 'Base',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://base.llamarpc.com'],
      },
      default: {
        http: ['https://base.llamarpc.com'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Base',
        url: 'https://basescan.org',
      },
    },
    testnet: false,
  },
  {
    id: 59144,
    name: 'Linea',
    network: 'Linea',
    nativeCurrency: {
      decimals: 18,
      name: 'Linea',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://linea.drpc.org'],
      },
      default: {
        http: ['https://linea.drpc.org'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Linea',
        url: 'https://lineascan.build',
      },
    },
    testnet: false,
  },
  {
    id: 1101,
    name: 'Polygon zkEVM',
    network: 'Polygon zkEVM',
    nativeCurrency: {
      decimals: 18,
      name: 'Polygon zkEVM',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://polygon-zkevm.drpc.org'],
      },
      default: {
        http: ['https://polygon-zkevm.drpc.org'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Polygon zkEVM',
        url: 'https://zkevm.polygonscan.com',
      },
    },
    testnet: false,
  },
  {
    id: 324,
    name: 'zkSync Era Mainnet',
    network: 'zkSync Era Mainnet',
    nativeCurrency: {
      decimals: 18,
      name: 'zkSync Era Mainnet',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://zksync-era.blockpi.network/v1/rpc/public'],
      },
      default: {
        http: ['https://zksync-era.blockpi.network/v1/rpc/public'],
      },
    },
    blockExplorers: {
      default: {
        name: 'zkSync Era Mainnet',
        url: 'https://explorer.zksync.io',
      },
    },
    testnet: false,
  },
  {
    id: 534352,
    name: 'Scroll',
    network: 'Scroll',
    nativeCurrency: {
      decimals: 18,
      name: 'Scroll',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://rpc.scroll.io'],
      },
      default: {
        http: ['https://rpc.scroll.io'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Scroll',
        url: 'https://scrollscan.com',
      },
    },
    testnet: false,
  },
  {
    id: 169,
    name: 'Manta Pacific Mainnet',
    network: 'Manta Pacific Mainnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Manta Pacific Mainnet',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://pacific-rpc.manta.network/http'],
      },
      default: {
        http: ['https://pacific-rpc.manta.network/http'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Manta Pacific Mainnet',
        url: 'https://pacific-explorer.manta.network',
      },
    },
    testnet: false,
  },
  {
    id: 81457,
    name: 'Blast',
    network: 'Blast',
    nativeCurrency: {
      decimals: 18,
      name: 'Blast',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://rpc.blast.io'],
      },
      default: {
        http: ['https://rpc.blast.io'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Blast',
        url: 'https://blastscan.io',
      },
    },
    testnet: false,
  },
  {
    id: 7777777,
    name: 'Zora',
    network: 'Zora',
    nativeCurrency: {
      decimals: 18,
      name: 'Zora',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://rpc.zora.energy'],
      },
      default: {
        http: ['https://rpc.zora.energy'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Zora',
        url: 'https://explorer.zora.energy',
      },
    },
    testnet: false,
  },
  // {
  //   id: 167008,
  //   name: 'Taiko Testnet',
  //   network: 'Taiko Testnet',
  //   nativeCurrency: {
  //     decimals: 18,
  //     name: 'Taiko Testnet',
  //     symbol: 'ETH',
  //   },
  //   rpcUrls: {
  //     public: {
  //       http: ['https://taiko-katla.blockpi.network/v1/rpc/public'],
  //     },
  //     default: {
  //       http: ['https://taiko-katla.blockpi.network/v1/rpc/public'],
  //     },
  //   },
  //   blockExplorers: {
  //     default: {
  //       name: 'Taiko Testnet',
  //       url: 'https://explorer.katla.taiko.xyz\n',
  //     },
  //   },
  //   testnet: false,
  // },
  {
    id: 5000,
    name: 'Mantle Mainnet',
    network: 'Mantle Mainnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Mantle Mainnet',
      symbol: 'MNT',
    },
    rpcUrls: {
      public: {
        http: ['https://mantle-rpc.publicnode.com'],
      },
      default: {
        http: ['https://mantle-rpc.publicnode.com'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Mantle Mainnet',
        url: 'https://explorer.mantle.xyz',
      },
    },
    testnet: false,
  },
];
export const prodContracts = {
  app: { contract: '0x009dbfee9e155766af434ed1652ca3769b05e76f', chainId: 10 },
  projectAchievements: { contract: '0xB9cC0Bb020cF55197C4C3d826AC87CAdba51f272', chainId: 10 },
  base: { contract: '0xbDB018e21AD1e5756853fe008793a474d329991b', chainId: 8453 },
  linea: { contract: '0xbDB018e21AD1e5756853fe008793a474d329991b', chainId: 59144 },
  zkEVM: { contract: '0xF57Cb671D50535126694Ce5Cc3CeBe3F32794896', chainId: 1101 },
  zkSync: { contract: '0x8A1142620CbdE2f2d63E88F35D0D76eAAce0AC9e', chainId: 324 },
  scroll: { contract: '0xDC3D8318Fbaec2de49281843f5bba22e78338146', chainId: 534352 },
  manta: { contract: '0xbDB018e21AD1e5756853fe008793a474d329991b', chainId: 169 },
  blast: { contract: '0x009DBFEe9E155766AF434ED1652CA3769B05E76f', chainId: 81457 },
  zora: { contract: '0xbDB018e21AD1e5756853fe008793a474d329991b', chainId: 7777777 },
  // taiko: { contract: '', chainId: 167008 },
  mantle: { contract: '0xDC3D8318Fbaec2de49281843f5bba22e78338146', chainId: 5000 },
};
export const prodVoteContracts = {
  base: { contract: '0xe10Add2ad591A7AC3CA46788a06290De017b9fB4', chainId: 8453 },
  linea: { contract: '0xe10Add2ad591A7AC3CA46788a06290De017b9fB4', chainId: 59144 },
  zkEVM: { contract: '0xe10Add2ad591A7AC3CA46788a06290De017b9fB4', chainId: 1101 },
  zkSync: { contract: '0xCb84d512F0C9943D3BC6B4Be8801aC8Aa6621a54', chainId: 324 },
  scroll: { contract: '0xe10Add2ad591A7AC3CA46788a06290De017b9fB4', chainId: 534352 },
  manta: { contract: '0xF57Cb671D50535126694Ce5Cc3CeBe3F32794896', chainId: 169 },
  blast: { contract: '0xbDB018e21AD1e5756853fe008793a474d329991b', chainId: 81457 },
  zora: { contract: '0xDC3D8318Fbaec2de49281843f5bba22e78338146', chainId: 7777777 },
  // taiko: { contract: '', chainId: 167008 },
  mantle: { contract: '0x4D1E2145082d0AB0fDa4a973dC4887C7295e21aB', chainId: 5000 },
};
export const prodAttestationContracts = {
  linea: { contract: '0xB9cC0Bb020cF55197C4C3d826AC87CAdba51f272', chainId: 59144 },
};
