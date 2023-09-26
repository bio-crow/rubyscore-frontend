import { FC } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { mokeChartData } from '@/modules/Dashboard/DashboardTab/Transactions/TransactionChart/mokeChartData';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props {
  index: number;
}

const TransactionChart: FC<Props> = ({ index }) => {
  const theme = useCustomTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <ResponsiveContainer width='100%' aspect={isMd ? 11.0 / 4.0 : 2.0 / 1.1}>
      <AreaChart
        data={mokeChartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop
              offset='5%'
              stopColor={theme.palette.chartGradientStartColor}
              stopOpacity={theme.palette.chartGradientStartOpacity}
            />
            <stop
              offset='95%'
              stopColor={theme.palette.chartGradientEndColor}
              stopOpacity={theme.palette.chartGradientEndOpacity}
            />
          </linearGradient>
        </defs>
        <XAxis
          dataKey={isLg ? 'name' : 'shortName'}
          stroke={theme.palette.gray}
          axisLine={{ display: 'none' }}
          tick={{
            fill: theme.palette.powderWhite,
            fontSize: isLg ? '14px' : '11px',
            fontFamily: 'var(--font-lato)',
            fontWeight: 500,
          }}
          dy={10}
        />
        <YAxis
          tickCount={9}
          domain={[0, (dataMax: number) => dataMax * 1.1]}
          stroke={theme.palette.gray}
          axisLine={{ display: 'none' }}
          tick={{
            fill: theme.palette.white50,
            fontSize: isLg ? '14px' : '11px',
            fontFamily: 'var(--font-lato)',
            fontWeight: 500,
          }}
          dx={-5}
        />
        <CartesianGrid repeatCount={4} stroke={theme.palette.gray} />
        <Tooltip
          content={props => <CustomTooltip {...props} />}
          wrapperStyle={{
            background: theme.palette.gray,
            border: `1px solid ${theme.palette.lightGreen}`,
            borderRadius: '20px',
            padding: '4px 16px',
            color: theme.palette.lightGreen,
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '16px',
          }}
          contentStyle={{
            background: 'transparent',
            border: 'none',
          }}
        />
        <Area
          type='monotone'
          dataKey='uv'
          dot={<CustomDot />}
          strokeWidth={4}
          stroke={theme.palette.chartGradientStartColor}
          fillOpacity={1}
          fill='url(#colorUv)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default TransactionChart;

const CustomTooltip = (props: any) => {
  const { active, payload, label } = props;
  if (active && payload && payload.length) {
    return <Box>{payload[0].value}</Box>;
  }

  return null;
};
const CustomDot = (props: any) => {
  const { cx, cy, stroke, payload, value } = props;
  const theme = useCustomTheme();
  return (
    <circle
      cx={cx}
      cy={cy}
      r={5}
      stroke={theme.palette.lightGreen}
      strokeWidth={2}
      fill={theme.palette.black}
    />
  );
};
