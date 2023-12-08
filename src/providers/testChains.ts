import { Chain } from '@rainbow-me/rainbowkit';
import { prodVoteContracts } from '@/providers/prodChains';
export const testChains: Chain[] = [
  {
    id: 80001,
    name: 'Mumbai',
    network: 'Mumbai',
    nativeCurrency: {
      decimals: 18,
      name: 'Mumbai',
      symbol: 'MATIC',
    },
    rpcUrls: {
      public: {
        http: ['https://endpoints.omniatech.io/v1/matic/mumbai/public'],
      },
      default: {
        http: ['https://endpoints.omniatech.io/v1/matic/mumbai/public'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Mumbai',
        url: 'https://mumbai.polygonscan.com/',
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
    testnet: false,
  },
  {
    id: 999,
    name: 'Zora Goerli',
    network: 'Zora Goerli',
    nativeCurrency: {
      decimals: 18,
      name: 'Zora Goerli',
      symbol: 'GöETH',
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
    testnet: false,
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
    testnet: false,
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
    testnet: false,
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
        http: ['https://testnet.era.zksync.dev'],
      },
      default: {
        http: ['https://testnet.era.zksync.dev'],
      },
    },
    blockExplorers: {
      default: {
        name: 'zkSync Era Testnet',
        url: 'https://explorer.zksync.io',
      },
    },
    testnet: false,
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
    testnet: false,
  },
];
export const testContracts = {
  app: { contract: '0x37C3837a0C37C002894BB035f5dD73933523B66d', chainId: 80001 },
  projectAchievements: { contract: '0x3eEfE6F34Ab7DB9c37De5246959C8409d5F96CDB', chainId: 80001 },
  base: { contract: '0x0A1B739ea1230dB33B7F6dce9f77Fcc0901a49f0', chainId: 84531 },
  linea: { contract: '0x2A1000293467a221F5d4cA98F4b7912c4c9c22b3', chainId: 59140 },
  zkEVM: { contract: '0x81C55bbA5d5D05a0C02f4B561B560194f34a6D07', chainId: 1442 },
  zkSync: { contract: '0xDA0F79DB2F00e93aBE1AB6FfA51bbd9043605917', chainId: 280 },
  scroll: { contract: '0x81C55bbA5d5D05a0C02f4B561B560194f34a6D07', chainId: 534351 },
};
export const testVoteContracts = prodVoteContracts;
