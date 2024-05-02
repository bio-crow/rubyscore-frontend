import { FC } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IChartDot } from '@/types/index';
import { CircularProgress } from '@mui/material';

interface Props {
  data: IChartDot[];
  axisLabel: {
    x: string;
    y: string;
  };
  loading: boolean;
}

const TransactionChart: FC<Props> = ({ data, loading, axisLabel }) => {
  const theme = useCustomTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <ResponsiveContainer width='100%' aspect={isMd ? 11.0 / 4.0 : 2.0 / 1.1}>
      {loading ? (
        <Box display='flex' width='100%' height='100%' alignItems='center' justifyContent='center'>
          <CircularProgress
            sx={{
              color: theme.palette.lightGreen,
            }}
          />
        </Box>
      ) : (
        <AreaChart
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 30,
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
            label={{ value: axisLabel.x, angle: 0, position: 'insideBottomRight', dx: 30, dy: -5 }}
            dataKey={isLg ? 'name' : 'shortName'}
            stroke={theme.palette.gray}
            axisLine={{ display: 'none' }}
            tick={{
              fill: theme.palette.powderWhite,
              fontSize: isLg ? '14px' : '11px',
              fontFamily: 'var(--font-lato)',
              fontWeight: 500,
            }}
            dy={25}
          />
          <YAxis
            tickCount={9}
            label={{ value: axisLabel.y, angle: 0, position: 'insideTopRight', dx: 0, dy: -30 }}
            tickFormatter={value =>
              new Intl.NumberFormat('en-US', {
                notation: 'compact',
                compactDisplay: 'short',
              }).format(value)
            }
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
          <CartesianGrid repeatCount={4} stroke={theme.palette.gray} strokeDasharray='3 3' opacity={0.7} />
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
      )}
    </ResponsiveContainer>
  );
};
export default TransactionChart;

const CustomTooltip = (props: any) => {
  const { active, payload, label } = props;
  if (active && payload && payload.length) {
    return (
      <Box>
        {`wallets: ${payload[0]['payload']['uvString']}`}
        <br />
        {`${Object.keys(payload[0]['payload'])[4]}: ${payload[0]['payload']['cumulative']}`}
      </Box>
    );
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
