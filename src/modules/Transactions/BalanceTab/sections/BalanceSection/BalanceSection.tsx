import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { TooltipBalanceAndSend } from '@/utils/tooltipsContent';
import InfoIcon from '@/components/common/Icons/InfoIcon';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import Image from 'next/image';
import { useAppSelector } from '@/core/store';
import { networkStaticData } from '@/constants/index';

const BalanceSection = () => {
  const theme = useCustomTheme();
  const balanceData = useAppSelector(state => state.depositState.balanceData);
  const totalBalance = useAppSelector(state => state.depositState.totalBalance);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <Box
          sx={{
            color: theme.palette.powderWhite,
          }}
          className='H2-Lato-fw-700-fs-24'
        >
          Balance ( Amount on hold )
        </Box>
        <CustomTooltip title={<TooltipBalanceAndSend />}>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <InfoIcon fill={theme.palette.white50} />
          </Box>
        </CustomTooltip>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', xlg: '250px 1fr' },
          gap: '16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: '10px',
            border: `1px solid ${theme.palette.white10}`,
            padding: '20px',
            background: theme.palette.backgroundColor,
          }}
        >
          <Box
            sx={{
              color: theme.palette.powderWhite,
            }}
            className='Body-Inter-fw-700-fs-16'
          >
            Total RubyScore Balance
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '5px',
            }}
            className='Body-Inter-fw-700-fs-18'
          >
            <Box
              sx={{
                color: theme.palette.lightGreen,
              }}
            >
              {totalBalance.totalBalanceFormatted}
            </Box>
            <Box
              sx={{
                color: theme.palette.powderWhite,
              }}
            >
              {totalBalance.totalBalanceOnHoldFormatted}
            </Box>
            <Box
              sx={{
                color: theme.palette.white50,
              }}
            >
              ETH
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {balanceData.map(item => (
            <Box
              key={item.project}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '10px',
                minWidth: { xs: '100%', md: '250px' },
                border: `1px solid ${theme.palette.white10}`,
                padding: '10px',
                background: theme.palette.backgroundColor,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Image src={networkStaticData[item.project]?.icon} alt='icon' width='24' height='24' />
                <Box
                  sx={{
                    color: theme.palette.powderWhite,
                  }}
                  className='Body-Lato-fw-600-fs-14'
                >
                  {networkStaticData[item.project]?.label}
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '5px',
                }}
                className='Body-Inter-fw-500-fs-14'
              >
                <Box
                  sx={{
                    color: theme.palette.lightGreen,
                  }}
                >
                  {item.balanceFormatted}
                </Box>
                <Box
                  sx={{
                    color: theme.palette.powderWhite,
                  }}
                >
                  ({item.balanceOnHoldFormatted})
                </Box>
                <Box
                  sx={{
                    color: theme.palette.white50,
                  }}
                >
                  ETH
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default BalanceSection;
