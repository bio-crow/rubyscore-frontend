import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import pluralize from 'pluralize';
import {
  IDashboardBalanceResponse,
  IDashboardContractsResponse,
  IDashboardDaysResponse,
  IDashboardGasResponse,
  IDashboardMonthsResponse,
  IDashboardTransactionsResponse,
  IDashboardVolumeResponse,
  IDashboardWeeksResponse,
} from '@/core/types';
import { IAchievementCard, IChartDot, ILevelsInfo, IUserGradation } from '@/types/index';
import { steps } from '@motionone/easing';
import {
  TooltipAchievementsBalance,
  TooltipAchievementsDays,
  TooltipAchievementsGas,
  TooltipAchievementsMonths,
  TooltipAchievementsTransactionContract,
  TooltipAchievementsTransactionVolume,
  TooltipAchievementsWallet,
  TooltipAchievementsWeeks,
} from '@/utils/tooltipsContent';
import { track } from '@vercel/analytics';

export const copyToClickBoard = (text: string | undefined, message: string = 'Copied to clipboard') => {
  toast(message, { position: 'bottom-center' });
  text && copy(text);
};
export const formatCash = (n: any) => {
  if (n < 1e3) return '$' + (n / 1).toFixed(2);
  if (n >= 1e3 && n < 1e6) return '$' + (n / 1e3).toFixed(2) + ' k';
  if (n >= 1e6 && n < 1e9) return '$' + (n / 1e6).toFixed(2) + ' m';
  if (n >= 1e9 && n < 1e12) return '$' + (n / 1e9).toFixed(2) + ' b';
  if (n >= 1e12) return '$' + (n / 1e12).toFixed(2) + ' t';
  return '';
};
export const formatCash2 = (n: any) => {
  if (n < 1e4) return '$' + (n / 1).toFixed(3);
  if (n >= 1e4 && n < 1e6) return '$' + (n / 1e3).toFixed(3) + ' K';
  if (n >= 1e6 && n < 1e9) return '$' + (n / 1e6).toFixed(3) + ' M';
  if (n >= 1e9 && n < 1e12) return '$' + (n / 1e9).toFixed(3) + ' B';
  if (n >= 1e12) return '$' + (n / 1e12).toFixed(3) + ' T';
  return '';
};
export const transformApiTransactionResponse = (data: IDashboardTransactionsResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: '1',
      shortName: '1',
      uv: data.result.tx1,
    },
    {
      name: '2<5',
      shortName: '2<5',
      uv: data.result.tx2_5,
    },
    {
      name: '6<10',
      shortName: '6<10',
      uv: data.result.tx6_10,
    },
    {
      name: '11<20',
      shortName: '11<20',
      uv: data.result.tx11_20,
    },
    {
      name: '21<30',
      shortName: '21<30',
      uv: data.result.tx21_30,
    },
    {
      name: '31<50',
      shortName: '31<50',
      uv: data.result.tx31_50,
    },
    {
      name: '51<100',
      shortName: '51<100',
      uv: data.result.tx51_100,
    },
    {
      name: '101<200',
      shortName: '101<200',
      uv: data.result.tx101_200,
    },
    {
      name: '201<500',
      shortName: '201<500',
      uv: data.result.tx201_500,
    },
    {
      name: '501<1000',
      shortName: '501<1000',
      uv: data.result.tx501_1000,
    },
  ];

  return result;
};
export const transformApiContractsResponse = (data: IDashboardContractsResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: '1',
      shortName: '1',
      uv: data.result.contracts1,
    },
    {
      name: '2<5',
      shortName: '2<5',
      uv: data.result.contracts2_5,
    },
    {
      name: '6<10',
      shortName: '6<10',
      uv: data.result.contracts6_10,
    },
    {
      name: '11<25',
      shortName: '11<25',
      uv: data.result.contracts11_25,
    },
    {
      name: '26<50',
      shortName: '26<50',
      uv: data.result.contracts26_50,
    },
    {
      name: '51<100',
      shortName: '51<100',
      uv: data.result.contracts51_100,
    },
  ];
  return result;
};
export const transformApiDaysResponse = (data: IDashboardDaysResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: '1',
      shortName: '1',
      uv: data.result.days1,
    },
    {
      name: '2<5',
      shortName: '2<5',
      uv: data.result.days2_5,
    },
    {
      name: '6<10',
      shortName: '6<10',
      uv: data.result.days6_10,
    },
    {
      name: '11<25',
      shortName: '11<25',
      uv: data.result.days11_25,
    },
    {
      name: '26<50',
      shortName: '26<50',
      uv: data.result.days26_50,
    },
    {
      name: '51<100',
      shortName: '51<100',
      uv: data.result.days51_100,
    },
  ];
  return result;
};
export const transformApiWeeksResponse = (data: IDashboardWeeksResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: '1',
      shortName: '1',
      uv: data.result.weeks1,
    },
    {
      name: '2',
      shortName: '2',
      uv: data.result.weeks2,
    },
    {
      name: '3',
      shortName: '3',
      uv: data.result.weeks3,
    },
    {
      name: '4<5',
      shortName: '4<5',
      uv: data.result.weeks4_5,
    },
    {
      name: '6<7',
      shortName: '6<7',
      uv: data.result.weeks6_7,
    },
    {
      name: '8<10',
      shortName: '8<10',
      uv: data.result.weeks8_10,
    },
    {
      name: '11<15',
      shortName: '11<15',
      uv: data.result.weeks11_15,
    },
    {
      name: '16<20',
      shortName: '16<20',
      uv: data.result.weeks16_20,
    },
    {
      name: '21<30',
      shortName: '21<30',
      uv: data.result.weeks21_30,
    },
    {
      name: '31<50',
      shortName: '31<50',
      uv: data.result.weeks31_50,
    },
  ];
  return result;
};
export const transformApiMonthsResponse = (data: IDashboardMonthsResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: '1',
      shortName: '1',
      uv: data.result.months1,
    },
    {
      name: '2',
      shortName: '2',
      uv: data.result.months2,
    },
    {
      name: '3',
      shortName: '3',
      uv: data.result.months3,
    },
    {
      name: '4',
      shortName: '4',
      uv: data.result.months4,
    },
    {
      name: '5',
      shortName: '5',
      uv: data.result.months5,
    },
    {
      name: '6',
      shortName: '6',
      uv: data.result.months6,
    },
    {
      name: '7',
      shortName: '7',
      uv: data.result.months7,
    },
    {
      name: '8',
      shortName: '8',
      uv: data.result.months8,
    },
    {
      name: '9',
      shortName: '9',
      uv: data.result.months9,
    },
    {
      name: '10',
      shortName: '10',
      uv: data.result.months10,
    },
    {
      name: '11',
      shortName: '11',
      uv: data.result.months11,
    },
    {
      name: '12',
      shortName: '12',
      uv: data.result.months12,
    },
  ];
  return result;
};
export const transformApiGasResponse = (data: IDashboardGasResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: '1',
      shortName: '1',
      uv: data.result.gas1,
    },
    {
      name: '1<3',
      shortName: '1<3',
      uv: data.result.gas1_3,
    },
    {
      name: '3<5',
      shortName: '3<5',
      uv: data.result.gas3_5,
    },
    {
      name: '5<10',
      shortName: '5<10',
      uv: data.result.gas5_10,
    },
    {
      name: '10<15',
      shortName: '10<15',
      uv: data.result.gas10_15,
    },
    {
      name: '15<25',
      shortName: '15<25',
      uv: data.result.gas15_25,
    },
    {
      name: '25<50',
      shortName: '25<50',
      uv: data.result.gas25_50,
    },
    {
      name: '50<100',
      shortName: '50<100',
      uv: data.result.gas50_100,
    },
    {
      name: '100<200',
      shortName: '100<200',
      uv: data.result.gas100_200,
    },
  ];
  return result;
};
export const transformApiVolumeResponse = (data: IDashboardVolumeResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: '1',
      shortName: '1',
      uv: data.result.volume1,
    },
    {
      name: '1<5',
      shortName: '1<5',
      uv: data.result.volume1_5,
    },
    {
      name: '5<10',
      shortName: '5<10',
      uv: data.result.volume5_10,
    },
    {
      name: '10<20',
      shortName: '10<20',
      uv: data.result.volume10_20,
    },
    {
      name: '20<50',
      shortName: '20<50',
      uv: data.result.volume20_50,
    },
    {
      name: '50<100',
      shortName: '50<100',
      uv: data.result.volume50_100,
    },
    {
      name: '100<500',
      shortName: '100<500',
      uv: data.result.volume100_500,
    },
    {
      name: '500<1000',
      shortName: '500<1000',
      uv: data.result.volume500_1000,
    },
    {
      name: '1k<10k',
      shortName: '1k<10k',
      uv: data.result.volume1000_10000,
    },
    {
      name: '10k<100k',
      shortName: '10k<100k',
      uv: data.result.volume10000_100000,
    },
    {
      name: '100k<1m',
      shortName: '100k<1m',
      uv: data.result.volume100000_1000000,
    },
  ];
  return result;
};
export const transformApiBalanceResponse = (data: IDashboardBalanceResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: '1',
      shortName: '1',
      uv: data.result.balance1,
    },
    {
      name: '1<5',
      shortName: '1<5',
      uv: data.result.balance1_5,
    },
    {
      name: '6<10',
      shortName: '6<10',
      uv: data.result.balance6_10,
    },
    {
      name: '10<50',
      shortName: '10<50',
      uv: data.result.balance10_50,
    },
    {
      name: '50<100',
      shortName: '50<100',
      uv: data.result.balance50_100,
    },
    {
      name: '100<1000',
      shortName: '100<1000',
      uv: data.result.balance100_1000,
    },
    {
      name: '1k<10k',
      shortName: '1k<10k',
      uv: data.result.balance1000_10000,
    },
    {
      name: '10k<100k',
      shortName: '10k<100k',
      uv: data.result.balance10000_100000,
    },
  ];
  return result;
};
export const transformApiChartInfoResponse = (data: any): IChartDot[] => {
  return data.result.chart.map((dot: any) => {
    return {
      name: dot.date,
      shortName: '',
      uv: dot.count || dot.volume || dot.tvl,
    };
  });
};
export const achievementCardKeys = [
  'Amount on Balance',
  'Transactions',
  'WITH UNIQUE CONTRACTS',
  'ON DIFFERENT DAYS',
  'ON DIFFERENT WEEKS',
  'ON DIFFERENT MONTHS',
  'Transaction Volume',
  'Number Of Transactions',
  'Gas Spent',
];

export const prepareUserGradationToAchievementsCards = (data: IUserGradation): IAchievementCard[] => {
  const result: IAchievementCard[] = [
    {
      key: 'total_balance_usd',
      label: <div>Amount on balance</div>,
      currency: '',
      value: formatCash2(data['total_balance_usd'].value),
      score: data['total_balance_usd'].score,
      top: data['total_balance_usd'].top,
      ToolTip: <TooltipAchievementsBalance />,
    },
    {
      key: 'unique_contracts_count',
      label: (
        <div>
          Transactions with unique <br />
          contracts
        </div>
      ),
      currency: '',
      value: data['unique_contracts_count'].value,
      score: data['unique_contracts_count'].score,
      top: data['unique_contracts_count'].top,
      ToolTip: <TooltipAchievementsTransactionContract />,
    },
    {
      key: 'unique_days_count',
      label: (
        <div>
          Transactions on different <br /> days
        </div>
      ),
      currency: pluralize('day', data['unique_days_count'].score),
      value: data['unique_days_count'].value,
      score: data['unique_days_count'].score,
      top: data['unique_days_count'].top,
      ToolTip: <TooltipAchievementsDays />,
    },
    {
      key: 'unique_weeks_count',
      label: (
        <div>
          Transactions on different <br /> weeks
        </div>
      ),
      currency: pluralize('week', data['unique_weeks_count'].score),
      value: data['unique_weeks_count'].value,
      score: data['unique_weeks_count'].score,
      top: data['unique_weeks_count'].top,
      ToolTip: <TooltipAchievementsWeeks />,
    },
    {
      key: 'unique_months_count',
      label: (
        <div>
          Transactions on different <br /> months
        </div>
      ),
      currency: pluralize('month', data['unique_months_count'].score),
      value: data['unique_months_count'].value,
      score: data['unique_months_count'].score,
      top: data['unique_months_count'].top,
      ToolTip: <TooltipAchievementsMonths />,
    },
    {
      key: 'volume',
      label: <div>Transaction volume</div>,
      currency: '',
      value: formatCash2(data['volume'].value),
      score: data['volume'].score,
      top: data['volume'].top,
      ToolTip: <TooltipAchievementsTransactionVolume />,
    },

    {
      key: 'outgoing_txs_count',
      label: <div>Number of transactions</div>,
      currency: '',
      value: data['outgoing_txs_count'].value,
      score: data['outgoing_txs_count'].score,
      top: data['outgoing_txs_count'].top,
      ToolTip: <TooltipAchievementsWallet />,
    },

    {
      key: 'total_spent_gas',
      label: <div>Gas spent</div>,
      currency: '',
      value: formatCash2(data['total_spent_gas'].value),
      score: data['total_spent_gas'].score,
      top: data['total_spent_gas'].top,
      ToolTip: <TooltipAchievementsGas />,
    },
  ];
  return result;
};
export const getAchievementsBaseContractConfig = (project: string, contractInfo: any) => {
  switch (project) {
    case 'base':
      return {
        address: contractInfo.base.contract,
        chainId: contractInfo.base.chainId,
      };
    case 'manta':
      return {
        address: contractInfo.manta.contract,
        chainId: contractInfo.manta.chainId,
      };
    case 'blast':
      return {
        address: contractInfo.blast.contract,
        chainId: contractInfo.blast.chainId,
      };
    case 'linea':
      return {
        address: contractInfo.linea.contract,
        chainId: contractInfo.linea.chainId,
      };
    case 'zk_evm':
      return {
        address: contractInfo.zkEVM.contract,
        chainId: contractInfo.zkEVM.chainId,
      };
    case 'zk_era':
      return {
        address: contractInfo.zkSync.contract,
        chainId: contractInfo.zkSync.chainId,
      };
    case 'scroll':
      return {
        address: contractInfo.scroll.contract,
        chainId: contractInfo.scroll.chainId,
      };
    case 'zora':
      return {
        address: contractInfo.zora.contract,
        chainId: contractInfo.zora.chainId,
      };
    default:
      return {
        address: contractInfo.projectAchievements.contract,
        chainId: contractInfo.projectAchievements.chainId,
      };
  }
};
export const getVoteBaseContractConfig = (project: string, contractInfo: any) => {
  switch (project) {
    case 'base':
      return {
        address: contractInfo.base.contract,
        chainId: contractInfo.base.chainId,
      };
    case 'manta':
      return {
        address: contractInfo.manta.contract,
        chainId: contractInfo.manta.chainId,
      };
    case 'blast':
      return {
        address: contractInfo.blast.contract,
        chainId: contractInfo.blast.chainId,
      };
    case 'linea':
      return {
        address: contractInfo.linea.contract,
        chainId: contractInfo.linea.chainId,
      };
    case 'zk_evm':
      return {
        address: contractInfo.zkEVM.contract,
        chainId: contractInfo.zkEVM.chainId,
      };
    case 'zk_era':
      return {
        address: contractInfo.zkSync.contract,
        chainId: contractInfo.zkSync.chainId,
      };
    case 'scroll':
      return {
        address: contractInfo.scroll.contract,
        chainId: contractInfo.scroll.chainId,
      };
    case 'zora':
      return {
        address: contractInfo.zora.contract,
        chainId: contractInfo.zora.chainId,
      };
    default:
      return {
        address: contractInfo.projectAchievements.contract,
        chainId: contractInfo.projectAchievements.chainId,
      };
  }
};
export const mapUserLevelInfoToNFTList = (data: ILevelsInfo | null) => {
  if (data) {
    const result: any[] = [];
    Object.entries(data).forEach(el => {
      el[1].forEach((item: number, index: number) => {
        if (item === 1) {
          result.push({
            lvl: index + 1,
            icon: `/asserts/levelNFT/${el[0]}/${index + 1}.png`,
            project: el[0],
          });
        }
      });
    });
    return result
      .sort((a: any, b: any) => {
        if (a.lvl > b.lvl) {
          return -1;
        } else {
          return 1;
        }
      })
      .map(item => item.icon);
  }
  return [];
};

export const getStreakDaysSteps = (current: number) => {
  const scores: number[] = [5, 20, 50];
  let streakPassed: number = 0;
  let days: number[];

  if (current > 15) {
    streakPassed = Math.floor(current / 15);
  }

  if (streakPassed > 0) {
    days = [15 * streakPassed + 5, 15 * streakPassed + 10, 15 * streakPassed + 15];
  } else {
    days = [5, 10, 15];
  }

  return scores.map((score, index) => {
    return {
      day: days[index],
      points: score,
      percent: (index + 1) * 33,
    };
  });
};
export const mapMayLevelDataFromResult = (result: any, levelStatus: any) => {
  return {
    level: result.user.profile.rank.level,
    levelUp: result.user.profile.rank.levelUp,
    score: result.user.profile.rank.score,
    position: {
      current: result.user.position.current,
      max: result.user.position.max,
    },
    levelStatus: levelStatus || [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  };
};
export const formatPercentsForCards = (value: number | null) => {
  if (!value) {
    return null;
  }
  if (value < 0.001) {
    return 0.001;
  }
  if (value < 1) {
    return value.toFixed(3);
  }
  return Math.floor(value);
};

export const getTwoLinesNetworksData = (networks: any[], minLineLength = 5) => {
  let result: any[] = [];
  const lineLength = Math.ceil(networks.length / 2);
  if (lineLength < minLineLength) {
    for (let i = 0; i < minLineLength; i++) {
      result.push({ network1: networks[i] });
    }
    result = result.map((item, index) => {
      return {
        ...item,
        network2: networks[minLineLength + index] || null,
      };
    });
  } else {
    for (let i = 0; i < networks.length; i++) {
      if (i % 2 === 0) {
        result.push({ network1: networks[i] });
      } else {
        result[result.length - 1] = { ...result[result.length - 1], network2: networks[i] };
      }
    }
  }
  return result;
};
