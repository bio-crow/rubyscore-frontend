import { Box } from '@mui/system';
import { DashboardTabIndexType, IScoreNetwork } from '@/types/index';
import { FC } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import pluralize from 'pluralize';
import Image from 'next/image';
interface Props {
  network: IScoreNetwork;
  selectable?: boolean;
  activeTab?: { index: DashboardTabIndexType; label: string };
  onSelect?: Function;
}

const NetworkCard: FC<Props> = ({ network, selectable, activeTab, onSelect }) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        borderRadius: '10px 50px 10px 10px',
        border: `1px solid ${
          network.index === activeTab?.index ? theme.palette.lightGreen : theme.palette.white10
        }`,
        background: theme.palette.black,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        cursor: selectable ? 'pointer' : 'unset',
      }}
      onClick={() => onSelect && onSelect(network.index)}
    >
      <Box
        sx={{
          borderRadius: '10px 30px 30px 10px',
          border: `1px solid ${theme.palette.white10}`,
          padding: '0px 0px 0px 20px',
          background: theme.palette.gray,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
          height: '58px',
        }}
      >
        <Box
          sx={{
            color: theme.palette.powderWhite,
          }}
          className='Body-Lato-fw-600-fs-24'
        >
          {network.title}
        </Box>
        <Box marginRight='-3px' height='58px' padding='0'>
          <Image src={network.icon} alt='icon' width='58' height='58' />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Box
            sx={{
              color: theme.palette.lightGreen,
            }}
            className='Body-Lato-fw-800-fs-24'
          >
            {network.lvl}
          </Box>
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-600-fs-14'
          >
            LVL
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              color: theme.palette.powderWhite,
            }}
            className='Body-Lato-fw-700-fs-16'
          >
            {Math.round(network.points)}
          </Box>
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Lato-fw-600-fs-14'
          >
            {pluralize('Point', network.points)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default NetworkCard;
