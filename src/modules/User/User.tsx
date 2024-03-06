import Layout from '@/components/layout/Layout/Layout';
import { Box, CircularProgress } from '@mui/material';
import ScoreSection from '@/components/common/sections/ScoreSection/ScoreSection';
import UserInfoSection from '@/components/common/sections/UserInfoSection/UserInfoSection';
import UserStatistics from '@/modules/User/UserStatistics/UserStatistics';
import { useEffect, useLayoutEffect, useState } from 'react';
import { getUserStatistics } from '@/core/thunk/leaderboard.thunk';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { setUserStatistics } from '@/core/state/leaderboard.state';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import {
  activeUserDataFromContract,
  getUserNFTList,
  getUserScoreList,
  loadUserProjectInfo,
} from '@/core/thunk/user.thunk';
import AchievementsSection from '@/components/common/sections/AchievementsSection/AchievementsSection';
import {
  getUserGradation,
  getUserTransactionsDates,
  updateUserLevelInfo,
} from '@/core/thunk/dashboard.thunk';
import { DashboardTabIndexType } from '@/types/index';
import { dashboardPanelTabs } from '@/constants/index';
import { setActiveUserLevelsInfo } from '@/core/state/user.state';
import { getCompletedUserTasks } from '@/core/thunk/task.thunk';

const breakpointsConfig = {
  0: {
    slidesPerView: 1,
  },
  500: {
    slidesPerView: 2,
  },
  767: {
    slidesPerView: 3,
  },
  992: {
    slidesPerView: 4,
  },
  1392: {
    slidesPerView: 5,
  },
};
const User = () => {
  const theme = useCustomTheme();
  const params: any = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const netTab = searchParams.get('net');
  const [activeProject, setActiveProject] = useState<{ index: DashboardTabIndexType; label: string }>(
    dashboardPanelTabs[0]
  );
  const userNotFound = useAppSelector(state => state.leaderboardState.userNotFound);
  const userStatistics = useAppSelector(state => state.leaderboardState.userStatistics);
  const userStatisticsLoading = useAppSelector(state => state.leaderboardState.userStatisticsLoading);
  const dispatch = useAppDispatch();
  const changeTab = (index: DashboardTabIndexType) => {
    const tab: any = dashboardPanelTabs.find(item => item.index === index);
    tab && setActiveProject(tab);
    router.push(`?net=${tab.index}`);
  };
  useLayoutEffect(() => {
    if (params.wallet) {
      dispatch(
        getUserStatistics({
          project: activeProject.index,
          wallet: `${params.wallet}`,
          withLoad: true,
        })
      );
      dispatch(getUserNFTList(params.wallet));
      dispatch(activeUserDataFromContract(params.wallet));
      dispatch(getCompletedUserTasks(params.wallet));
    } else {
      dispatch(setUserStatistics(null));
      dispatch(setActiveUserLevelsInfo(null));
    }
    return () => {
      dispatch(setUserStatistics(null));
      dispatch(setActiveUserLevelsInfo(null));
    };
  }, []);
  useLayoutEffect(() => {
    dispatch(
      getUserGradation({
        wallet: `${params.wallet}`,
        projectName: activeProject.index,
      })
    );
    dispatch(
      getUserStatistics({
        project: activeProject.index,
        wallet: `${params.wallet}`,
        withLoad: false,
      })
    );
  }, [params.wallet, activeProject.index]);
  const onRefresh = () => {
    dispatch(
      getUserStatistics({
        project: activeProject.index,
        wallet: `${params.wallet}`,
        withLoad: false,
      })
    );
    dispatch(getCompletedUserTasks(params.wallet));
    dispatch(getUserNFTList(params.wallet));
    dispatch(getUserScoreList(params.wallet));
  };
  useEffect(() => {
    if (netTab) {
      const tab = dashboardPanelTabs.find(item => item.index === netTab);
      tab && setActiveProject(tab);
    }
  }, [netTab]);
  return (
    <Layout>
      {userStatisticsLoading ? (
        <Box display='flex' width='100%' height='100%' alignItems='center' justifyContent='center'>
          <CircularProgress
            sx={{
              color: theme.palette.lightGreen,
            }}
          />
        </Box>
      ) : (
        <>
          {userNotFound ? (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                flex: '1',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.powderWhite,
              }}
              className='Body-Lato-fw-600-fs-24'
            >
              User not found
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '56px',
                width: '100%',
                padding: { xs: '0px 15px 0px 15px', sm: '0px 30px 0px 30px', xl: 0 },
              }}
            >
              {userStatistics && <UserInfoSection user={userStatistics} />}
              <ScoreSection
                bpConfig={breakpointsConfig}
                wallet={params.wallet}
                selectable={true}
                activeTab={activeProject}
                onSelect={changeTab}
                isTwoLine
              />
              <AchievementsSection activeTab={activeProject} wallet={params.wallet} onRefresh={onRefresh} />
              {userStatistics && <UserStatistics />}
            </Box>
          )}
        </>
      )}
    </Layout>
  );
};
export default User;
