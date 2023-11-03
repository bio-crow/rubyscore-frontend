import { Chain } from '@rainbow-me/rainbowkit';
export const testChains: Chain[] = [
  {
    id: 420,
    name: 'Optimism Goerli Testnet',
    network: 'Optimism Goerli Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Optimism Goerli Testnet',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://optimism-goerli.public.blastapi.io'],
      },
      default: {
        http: ['https://optimism-goerli.public.blastapi.io'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Optimism Goerli Testnet',
        url: 'https://goerli-optimism.etherscan.io/',
      },
    },
    testnet: false,
  },
  {
    id: 84531,
    name: 'Base Goerli Testnet',
    network: 'Base Goerli Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Base Goerli Testnet',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://goerli.base.org'],
      },
      default: {
        http: ['https://goerli.base.org'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Base Goerli Testnet',
        url: 'https://goerli.basescan.org',
      },
    },
    testnet: true,
  },
  {
    id: 999,
    name: 'Zora Goerli',
    network: 'Zora Goerli',
    nativeCurrency: {
      decimals: 18,
      name: 'Zora Goerli',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://testnet.rpc.zora.energy'],
      },
      default: {
        http: ['https://testnet.rpc.zora.energy'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Zora Goerli',
        url: 'https://testnet.explorer.zora.energy',
      },
    },
    testnet: true,
  },
  {
    id: 59140,
    name: 'Linea Testnet',
    network: 'Linea Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Linea Testnet',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://rpc.goerli.linea.build'],
      },
      default: {
        http: ['https://rpc.goerli.linea.build'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Linea Testnet',
        url: 'https://explorer.goerli.linea.build',
      },
    },
    testnet: true,
  },
  {
    id: 1442,
    name: 'Polygon zkEVM Testnet',
    network: 'Polygon zkEVM Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Polygon zkEVM Testnet',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://rpc.public.zkevm-test.net'],
      },
      default: {
        http: ['https://rpc.public.zkevm-test.net'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Polygon zkEVM Testnet',
        url: 'https://testnet-zkevm.polygonscan.com',
      },
    },
    testnet: true,
  },
  {
    id: 280,
    name: 'zkSync Era Testnet',
    network: 'zkSync Era Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'zkSync Era Testnet',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://zksync2-mainnet.zksync.io'],
      },
      default: {
        http: ['https://zksync2-mainnet.zksync.io'],
      },
    },
    blockExplorers: {
      default: {
        name: 'zkSync Era Testnet',
        url: 'https://explorer.zksync.io',
      },
    },
    testnet: true,
  },
  {
    id: 534351,
    name: 'Scroll Sepolia Testnet',
    network: 'Scroll Sepolia Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Scroll Sepolia Testnet',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: {
        http: ['https://sepolia-rpc.scroll.io'],
      },
      default: {
        http: ['https://sepolia-rpc.scroll.io'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Scroll Sepolia Testnet',
        url: 'https://sepolia-blockscout.scroll.io',
      },
    },
    testnet: true,
  },
];
export const testContracts = {
  optimism: '0xc35C6497D6eDEf0D288236Ca5aDf63299e3AAD3b',
  base: '0x0A1B739ea1230dB33B7F6dce9f77Fcc0901a49f0',
  zora: '0xc35C6497D6eDEf0D288236Ca5aDf63299e3AAD3b',
  linea: '0x2A1000293467a221F5d4cA98F4b7912c4c9c22b3',
  zkEVM: '0x81C55bbA5d5D05a0C02f4B561B560194f34a6D07',
  zkSync: '0xDA0F79DB2F00e93aBE1AB6FfA51bbd9043605917',
  scroll: '0x81C55bbA5d5D05a0C02f4B561B560194f34a6D07',
};