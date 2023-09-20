import { styled } from '@mui/system';
import { CustomTheme } from '@/theme/index';
import { Pagination } from '@mui/material';
const PrimaryPagination = styled(Pagination)(({ theme }: { theme: CustomTheme | any }) => {
  return {
    '.Mui-selected': {
      color: theme.palette.lightGreen,
      border: `1px solid ${theme.palette.lightGreen}`,
    },
  };
});
export default PrimaryPagination;
