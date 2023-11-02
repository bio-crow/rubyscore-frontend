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
import { IAchievementCard, IChartDot, IUserGradation } from '@/types/index';

export const copyToClickBoard = (text: string | undefined, message: string = 'Copied to clipboard') => {
  toast(message, { position: 'bottom-center' });
  text && copy(text);
};
export const formatCash = (n: any) => {
  if (n < 1e3) return '$' + n;
  if (n >= 1e3 && n < 1e6) return '$' + (n / 1e3).toFixed(2) + ' k';
  if (n >= 1e6 && n < 1e9) return '$' + (n / 1e6).toFixed(2) + ' m';
  if (n >= 1e9 && n < 1e12) return '$' + (n / 1e9).toFixed(2) + ' b';
  if (n >= 1e12) return '$' + (n / 1e12).toFixed(2) + ' t';
};
export const transformApiTransactionResponse = (data: IDashboardTransactionsResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: 'TX 1',
      shortName: '',
      uv: data.result.tx1,
    },
    {
      name: '2<TX<5',
      shortName: '2<TX<5',
      uv: data.result.tx2_5,
    },
    {
      name: '6<TX<10',
      shortName: '6<TX<10',
      uv: data.result.tx6_10,
    },
    {
      name: '11<TX<25',
      shortName: '11<TX<25',
      uv: data.result.tx11_25,
    },
    {
      name: '26<TX<50',
      shortName: '26<TX<50',
      uv: data.result.tx26_50,
    },
    {
      name: '51<TX<100',
      shortName: '51<TX<100',
      uv: data.result.tx51_100,
    },
    {
      name: '101<TX<500',
      shortName: '101<TX<500',
      uv: data.result.tx101_500,
    },
    {
      name: '501<TX<1000',
      shortName: '501<TX<1000',
      uv: data.result.tx501_1000,
    },
  ];
  return result;
};
export const transformApiContractsResponse = (data: IDashboardContractsResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: 'Contracts 1',
      shortName: 'C 1',
      uv: data.result.contracts1,
    },
    {
      name: '2<Contracts<5',
      shortName: '2<C<5',
      uv: data.result.contracts2_5,
    },
    {
      name: '6<Contracts<10',
      shortName: 'C 1',
      uv: data.result.contracts6_10,
    },
    {
      name: '11<Contracts<25',
      shortName: '11<C<25',
      uv: data.result.contracts11_25,
    },
    {
      name: '26<Contracts<50',
      shortName: '26<C<50',
      uv: data.result.contracts26_50,
    },
    {
      name: '51<Contracts<100',
      shortName: '51<C<100',
      uv: data.result.contracts51_100,
    },
  ];
  return result;
};
export const transformApiDaysResponse = (data: IDashboardDaysResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: 'Day 1',
      shortName: 'D 1',
      uv: data.result.days1,
    },
    {
      name: '2<Day<5',
      shortName: '2<D<5',
      uv: data.result.days2_5,
    },
    {
      name: '6<Day<10',
      shortName: '6<D<10',
      uv: data.result.days6_10,
    },
    {
      name: '11<Day<25',
      shortName: '11<D<25',
      uv: data.result.days11_25,
    },
    {
      name: '26<Day<50',
      shortName: '26<D<50',
      uv: data.result.days26_50,
    },
    {
      name: '51<Day<100',
      shortName: '51<D<100',
      uv: data.result.days51_100,
    },
  ];
  return result;
};
export const transformApiWeeksResponse = (data: IDashboardWeeksResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: 'Week 1',
      shortName: 'W 1',
      uv: data.result.weeks1,
    },
    {
      name: 'Week 2',
      shortName: 'W 2',
      uv: data.result.weeks2,
    },
    {
      name: 'Week 3',
      shortName: 'W 3',
      uv: data.result.weeks3,
    },
    {
      name: '4<Weeks<5',
      shortName: '4<W<5',
      uv: data.result.weeks4_5,
    },
    {
      name: '6<Weeks<7',
      shortName: '6<W<7',
      uv: data.result.weeks6_7,
    },
    {
      name: '8<Weeks<10',
      shortName: '8<W<10',
      uv: data.result.weeks8_10,
    },
    {
      name: '11<Weeks<15',
      shortName: '11<W<15',
      uv: data.result.weeks11_15,
    },
    {
      name: '16<Weeks<20',
      shortName: '16<W<20',
      uv: data.result.weeks16_20,
    },
  ];
  return result;
};
export const transformApiMonthsResponse = (data: IDashboardMonthsResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: 'Months 1',
      shortName: 'M 1',
      uv: data.result.months1,
    },
    {
      name: 'Months 2',
      shortName: 'M 2',
      uv: data.result.months2,
    },
    {
      name: 'Months 3',
      shortName: 'M 3',
      uv: data.result.months3,
    },
    {
      name: 'Months 4',
      shortName: 'M 4',
      uv: data.result.months4,
    },
    {
      name: 'Months 5',
      shortName: 'M 5',
      uv: data.result.months5,
    },
    {
      name: 'Months 6',
      shortName: 'M 6',
      uv: data.result.months6,
    },
    {
      name: 'Months 7',
      shortName: 'M 7',
      uv: data.result.months7,
    },
    {
      name: 'Months 8',
      shortName: 'M 8',
      uv: data.result.months8,
    },
    {
      name: 'Months 9',
      shortName: 'M 9',
      uv: data.result.months9,
    },
    {
      name: 'Months 10',
      shortName: 'M 10',
      uv: data.result.months10,
    },
    {
      name: 'Months 11',
      shortName: 'M 11',
      uv: data.result.months11,
    },
    {
      name: 'Months 12',
      shortName: 'M 12',
      uv: data.result.months12,
    },
  ];
  return result;
};
export const transformApiGasResponse = (data: IDashboardGasResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: 'Gas 1',
      shortName: 'G 1',
      uv: data.result.gas1,
    },
    {
      name: '1<Gas<3',
      shortName: '1<G<3',
      uv: data.result.gas1_3,
    },
    {
      name: '3<Gas<5',
      shortName: '3<G<5',
      uv: data.result.gas3_5,
    },
    {
      name: '5<Gas<10',
      shortName: '5<G<10',
      uv: data.result.gas5_10,
    },
    {
      name: '10<Gas<15',
      shortName: '10<G<15',
      uv: data.result.gas10_15,
    },
    {
      name: '15<Gas<25',
      shortName: '15<G<25',
      uv: data.result.gas15_25,
    },
    {
      name: '25<Gas<50',
      shortName: '25<G<50',
      uv: data.result.gas25_50,
    },
    {
      name: '50<Gas<100',
      shortName: '50<G<100',
      uv: data.result.gas50_100,
    },
    {
      name: '100<Gas<200',
      shortName: '100<G<200',
      uv: data.result.gas100_200,
    },
  ];
  return result;
};
export const transformApiVolumeResponse = (data: IDashboardVolumeResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: 'Volume 1',
      shortName: 'V 1',
      uv: data.result.volume1,
    },
    {
      name: '1<Volume<5',
      shortName: '1<V<5',
      uv: data.result.volume1_5,
    },
    {
      name: '6<Volume<10',
      shortName: '6<V<10',
      uv: data.result.volume6_10,
    },
    {
      name: '10<Volume<50',
      shortName: '10<V<50',
      uv: data.result.volume10_50,
    },
    {
      name: '50<Volume<100',
      shortName: '50<V<100',
      uv: data.result.volume50_100,
    },
    {
      name: '100<Volume<1000',
      shortName: '100<V<1000',
      uv: data.result.volume100_1000,
    },
    {
      name: '1k<Volume<10k',
      shortName: '1k<V<10k',
      uv: data.result.volume1000_10000,
    },
    {
      name: '10k<Volume<100k',
      shortName: '10k<V<100k',
      uv: data.result.volume10000_100000,
    },
  ];
  return result;
};
export const transformApiBalanceResponse = (data: IDashboardBalanceResponse): IChartDot[] => {
  const result: IChartDot[] = [
    {
      name: 'Balance 1',
      shortName: 'B 1',
      uv: data.result.balance1,
    },
    {
      name: '1<Balance<5',
      shortName: '1<B<5',
      uv: data.result.balance1_5,
    },
    {
      name: '6<Balance<10',
      shortName: '6<B<10',
      uv: data.result.balance6_10,
    },
    {
      name: '10<Balance<50',
      shortName: '10<B<50',
      uv: data.result.balance10_50,
    },
    {
      name: '50<Balance<100',
      shortName: '50<B<100',
      uv: data.result.balance50_100,
    },
    {
      name: '100<Balance<1000',
      shortName: '100<B<1000',
      uv: data.result.balance100_1000,
    },
    {
      name: '1k<Balance<10k',
      shortName: '1k<B<10k',
      uv: data.result.balance1000_10000,
    },
    {
      name: '10k<Balance<100k',
      shortName: '10k<B<100k',
      uv: data.result.balance10000_100000,
    },
  ];
  return result;
};
export const prepareUserGradationToAchievementsCards = (data: IUserGradation): IAchievementCard[] => {
  const result: IAchievementCard[] = [
    {
      label: 'Amount on balance',
      currency: '$',
      value: data['total_balance_usd'].value,
      score: data['total_balance_usd'].score,
      top: data['total_balance_usd'].top,
    },
    {
      label: 'Transaction volume',
      currency: '$',
      value: data['volume'].value,
      score: data['volume'].score,
      top: data['volume'].top,
    },
    {
      label: 'Transactions with unique contracts',
      currency: '',
      value: data['unique_contracts_count'].value,
      score: data['unique_contracts_count'].score,
      top: data['unique_contracts_count'].top,
    },
    {
      label: 'Wallet transactions',
      currency: '',
      value: data['outgoing_txs_count'].value,
      score: data['outgoing_txs_count'].score,
      top: data['outgoing_txs_count'].top,
    },
    {
      label: 'Transactions on days',
      currency: pluralize('day', data['unique_days_count'].score),
      value: data['unique_days_count'].value,
      score: data['unique_days_count'].score,
      top: data['unique_days_count'].top,
    },
    {
      label: 'Transactions of weeks',
      currency: pluralize('week', data['unique_weeks_count'].score),
      value: data['unique_weeks_count'].value,
      score: data['unique_weeks_count'].score,
      top: data['unique_weeks_count'].top,
    },
    {
      label: 'Transactions of months',
      currency: pluralize('month', data['unique_months_count'].score),
      value: data['unique_months_count'].value,
      score: data['unique_months_count'].score,
      top: data['unique_months_count'].top,
    },
    {
      label: 'Gas Spended',
      currency: '$',
      value: data['total_spent_gas'].value,
      score: data['total_spent_gas'].score,
      top: data['total_spent_gas'].top,
    },
  ];
  return result;
};
