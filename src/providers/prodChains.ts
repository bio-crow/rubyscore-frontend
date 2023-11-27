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
        http: [
          'https://rpc.ankr.com/optimism/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153',
        ],
      },
      default: {
        http: [
          'https://rpc.ankr.com/optimism/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153',
        ],
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
        http: ['https://rpc.ankr.com/base/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153'],
      },
      default: {
        http: ['https://rpc.ankr.com/base/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153'],
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
        http: ['https://rpc.ankr.com/linea/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153'],
      },
      default: {
        http: ['https://rpc.ankr.com/linea/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153'],
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
        http: [
          'https://rpc.ankr.com/polygon_zkevm/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153',
        ],
      },
      default: {
        http: [
          'https://rpc.ankr.com/polygon_zkevm/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153',
        ],
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
        http: [
          'https://rpc.ankr.com/zksync_era/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153',
        ],
      },
      default: {
        http: [
          'https://rpc.ankr.com/zksync_era/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153',
        ],
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
    id: 534351,
    name: 'Scroll',
    network: 'Scroll',
    nativeCurrency: {
      decimals: 18,
      name: 'Scroll',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: [
          'https://rpc.ankr.com/scroll/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153',
        ],
      },
      default: {
        http: [
          'https://rpc.ankr.com/scroll/7469b65bc433b15506c988eddeca58c3408e5a3f99ddbbbbf5d5f1cfaa13a153',
        ],
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
];
export const prodContracts = {
  app: { contract: '0x009dbfee9e155766af434ed1652ca3769b05e76f', chainId: 10 },
  projectAchievements: { contract: '0xB9cC0Bb020cF55197C4C3d826AC87CAdba51f272', chainId: 10 },
  base: { contract: '0xbDB018e21AD1e5756853fe008793a474d329991b', chainId: 8453 },
  linea: { contract: '0xbDB018e21AD1e5756853fe008793a474d329991b', chainId: 59144 },
  zkEVM: { contract: '0xF57Cb671D50535126694Ce5Cc3CeBe3F32794896', chainId: 1101 },
  zkSync: { contract: '0x8A1142620CbdE2f2d63E88F35D0D76eAAce0AC9e', chainId: 324 },
  scroll: { contract: '0xDC3D8318Fbaec2de49281843f5bba22e78338146', chainId: 534351 },
};
