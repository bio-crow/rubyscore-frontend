import { FC } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
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

const InfoChart: FC<Props> = ({ data, loading, axisLabel }) => {
  const theme = useCustomTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <ResponsiveContainer width={isMd ? '98%' : '95%'} aspect={isMd ? 11.0 / 4.0 : 2.0 / 1.1}>
      {loading ? (
        <Box display='flex' width='100%' height='100%' alignItems='center' justifyContent='center'>
          <CircularProgress
            sx={{
              color: theme.palette.lightGreen,
            }}
          />
        </Box>
      ) : (
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 30,
          }}
          style={{
            overflow: 'visible',
          }}
        >
          <Bar dataKey='uv' fill={theme.palette.lightBlue} />
          <XAxis
            tickCount={7}
            label={{ value: axisLabel.x, angle: 0, position: 'insideBottomRight', dx: 30, dy: -5 }}
            stroke={theme.palette.gray}
            axisLine={{ display: 'none' }}
            tickFormatter={value => ''}
            tick={{
              fill: theme.palette.powderWhite,
              fontSize: isLg ? '14px' : '11px',
              fontFamily: 'var(--font-lato)',
              fontWeight: 500,
            }}
            dy={25}
          />
          <YAxis
            tickCount={6}
            label={{ value: axisLabel.y, angle: 0, position: 'insideTopLeft', dx: 0, dy: -30 }}
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
          <CartesianGrid repeatCount={4} stroke={theme.palette.gray} strokeDasharray='3 3' opacity={0.3} />
          <Tooltip
            content={props => <CustomTooltip {...props} axisLabel={axisLabel} />}
            wrapperStyle={{
              background: theme.palette.gray,
              border: `1px solid ${theme.palette.lightBlue}`,
              borderRadius: '20px',
              padding: '4px 16px',
              color: theme.palette.lightBlue,
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
          <Brush
            dataKey='name'
            gap={1}
            height={30}
            className='infoChartBrush'
            fill='transparent'
            traveller={renderCustomTraveller}
            stroke={theme.palette.white50}
            alwaysShowText
            textRendering={6}
            textAnchor='start'
            tickFormatter={value => new Date(value * 1000).toLocaleDateString()}
          >
            <AreaChart data={data}>
              <defs>
                <linearGradient id='colorInfoUv' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor={theme.palette.lightBlue} stopOpacity={0.9} />
                  <stop offset='95%' stopColor={theme.palette.lightBlue} stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area type='monotone' dataKey='uv' fill={'rgba(4, 203, 253, 0.2)'} stroke='none' />
            </AreaChart>
          </Brush>
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};
export default InfoChart;

const CustomTooltip = (props: any) => {
  const { active, payload, label, axisLabel } = props;
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box>{new Date(payload[0].payload.name * 1000).toLocaleDateString()}</Box>
        <Box>{`${axisLabel.y}:${payload[0].value}`}</Box>
      </Box>
    );
  }

  return null;
};
function renderCustomTraveller(props: any) {
  const { x, y, width, height, stroke } = props;

  return (
    <>
      <rect x={x} y={y} width={width} height={height} fill={stroke} stroke='none' />
    </>
  );
}
