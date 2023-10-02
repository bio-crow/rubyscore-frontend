import { Box } from '@mui/system';
import PrimaryPagination from '@/components/common/ui/PrimaryPagination/PrimaryPagination';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { setCurrentPage } from '@/core/state/leaderboard.state';
import { ChangeEvent } from 'react';

const LeaderBoardPagination = () => {
  const dispatch = useAppDispatch();
  const pageCount = useAppSelector(state => state.leaderboardState.pageCount);
  const currentPage = useAppSelector(state => state.leaderboardState.currentPage);
  const onChange = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setCurrentPage(page));
  };
  return (
    <>
      {pageCount > 1 && (
        <Box alignSelf='flex-end'>
          <PrimaryPagination
            page={currentPage}
            count={pageCount}
            onChange={onChange}
            variant='outlined'
            shape='rounded'
          />
        </Box>
      )}
    </>
  );
};
export default LeaderBoardPagination;
