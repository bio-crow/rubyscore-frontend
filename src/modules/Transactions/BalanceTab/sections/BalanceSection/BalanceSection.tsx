import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { TooltipBalanceAndSend } from '@/utils/tooltipsContent';
import InfoIcon from '@/components/common/Icons/InfoIcon';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import {
  netsBalances,
  totalRubyScore,
} from '@/modules/Transactions/BalanceTab/sections/BalanceSection/modeData';
import Image from 'next/image';

const BalanceSection = () => {
  const theme = useCustomTheme();
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
              {totalRubyScore.amount}
            </Box>
            <Box
              sx={{
                color: theme.palette.powderWhite,
              }}
            >
              ({totalRubyScore.amountReal})
            </Box>
            <Box
              sx={{
                color: theme.palette.white50,
              }}
            >
              {totalRubyScore.currency}
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
          {netsBalances.map(item => (
            <Box
              key={item.net.title}
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
                <Image src={item.net.icon} alt='icon' width='24' height='24' />
                <Box
                  sx={{
                    color: theme.palette.powderWhite,
                  }}
                  className='Body-Lato-fw-600-fs-14'
                >
                  {item.net.title}
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
                  {item.amount}
                </Box>
                <Box
                  sx={{
                    color: theme.palette.powderWhite,
                  }}
                >
                  ({item.amountReal})
                </Box>
                <Box
                  sx={{
                    color: theme.palette.white50,
                  }}
                >
                  {item.currency}
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
