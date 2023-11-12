import { Box } from '@mui/system';
import { Tab } from '@mui/material';
import LeaderboardUserTabs from '@/components/common/ui/LeaderboardUserTabs/LeaderboardUserTabs';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import DashboardTab from '@/modules/Dashboard/DashboardTab/DashboardTab';
import UserAchievementTab from '@/modules/User/UserStatistics/UserAchievementTab/UserAchievementTab';
import UserNFTTab from '@/modules/User/UserStatistics/UserNFTTab/UserNFTTab';
import { useAppSelector } from '@/core/store';
import { useSearchParams } from 'next/navigation';
import { mapUserLevelInfoToNFTList } from '@/utils/helpers';

type TabIndexType = 0 | 1;

const UserStatistics = () => {
  const statRef = useRef<any>(null);
  const theme = useCustomTheme();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const activeUserLevelsInfo = useAppSelector(state => state.userState.activeUserLevelsInfo);
  const userNFTList = useAppSelector(state => state.userState.userNFTList);
  const levelNfts = mapUserLevelInfoToNFTList(activeUserLevelsInfo);
  const list = [...userNFTList, ...levelNfts];
  const [activeTabIndex, setActiveTabIndex] = useState<TabIndexType>(0);
  const handleChange = (event: SyntheticEvent, newValue: TabIndexType) => {
    setActiveTabIndex(newValue);
  };
  const dashboardTabs = {
    0: <UserAchievementTab />,
    1: <UserNFTTab />,
  };
  const panelTabs = [
    {
      index: 0,
      label: 'Quests completed',
      value: 278,
    },
    {
      index: 1,
      label: 'NFTs unlocked',
      value: list.length,
    },
  ];
  useEffect(() => {
    if (tab === 'NFT') {
      setActiveTabIndex(1);
      statRef.current.scrollIntoView();
    }
  }, [tab]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '56px',
      }}
      ref={statRef}
    >
      <LeaderboardUserTabs
        value={activeTabIndex}
        onChange={handleChange}
        variant={isMd ? 'fullWidth' : 'scrollable'}
      >
        {panelTabs.map(item => (
          <Tab
            key={item.label}
            label={
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <Box className='active-value'>{item.label}</Box>
                <Box>{item.value}</Box>
              </Box>
            }
            {...a11yProps(item.index)}
          />
        ))}
      </LeaderboardUserTabs>
      {dashboardTabs[activeTabIndex]}
    </Box>
  );
};
export default UserStatistics;

function a11yProps(index: number) {
  return {
    id: `leaderboard-tab-${index}`,
    'aria-controls': `leaderboard-tabpanel-${index}`,
  };
}
