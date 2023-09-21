import { Box } from '@mui/system';
import { Tab } from '@mui/material';
import LeaderboardUserTabs from '@/components/common/ui/LeaderboardUserTabs/LeaderboardUserTabs';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SyntheticEvent, useState } from 'react';
import DashboardTab from '@/modules/Dashboard/DashboardTab/DashboardTab';
import LeaderBoardAchievementTab from '@/modules/LeaderBoardUser/LeaderBoardUserStatistics/LeaderBoardAchievementTab/LeaderBoardAchievementTab';
import LeaderBoardNFTTab from '@/modules/LeaderBoardUser/LeaderBoardUserStatistics/LeaderBoardNFTTab/LeaderBoardNFTTab';

type TabIndexType = 0 | 1;
const panelTabs = [
  {
    index: 0,
    label: 'Quests completed',
    value: 278,
  },
  {
    index: 1,
    label: 'NFTs unlocked',
    value: 3,
  },
];
const LeaderBoardUserStatistics = () => {
  const theme = useCustomTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [activeTabIndex, setActiveTabIndex] = useState<TabIndexType>(0);
  const handleChange = (event: SyntheticEvent, newValue: TabIndexType) => {
    setActiveTabIndex(newValue);
  };
  const dashboardTabs = {
    0: <LeaderBoardAchievementTab />,
    1: <LeaderBoardNFTTab />,
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '56px',
      }}
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
export default LeaderBoardUserStatistics;

function a11yProps(index: number) {
  return {
    id: `leaderboard-tab-${index}`,
    'aria-controls': `leaderboard-tabpanel-${index}`,
  };
}
