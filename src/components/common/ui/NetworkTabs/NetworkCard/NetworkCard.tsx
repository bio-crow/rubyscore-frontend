import { Box } from '@mui/system';
import { DashboardTabIndexType, IScoreNetwork } from '@/types/index';
import { FC } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import pluralize from 'pluralize';
import Image from 'next/image';
import { networkStaticData } from '@/constants/index';

interface Props {
  network: { label: string; index: DashboardTabIndexType };
  activeTab: { index: DashboardTabIndexType; label: string };
  setActiveTab: Function;
}

const NetworkCard: FC<Props> = ({ network, activeTab, setActiveTab }) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        borderRadius: '10px 30px 30px 10px',
        border: `1px solid ${
          network.index === activeTab.index ? theme.palette.lightGreen : theme.palette.white10
        }`,
        background: theme.palette.black,
        display: 'flex',
        paddingRight: '3px',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        cursor: 'pointer',
      }}
      onClick={() => setActiveTab(network)}
    >
      <Box
        sx={{
          color: theme.palette.powderWhite,
          padding: '0px 10px 0px 30px',
        }}
        className='Body-Lato-fw-600-fs-24'
      >
        {network.label}
      </Box>
      <Box marginRight='-3px' height='58px' padding='0'>
        <Image src={networkStaticData[network.index].icon} alt='icon' width='58' height='58' />
      </Box>
    </Box>
  );
};
export default NetworkCard;
