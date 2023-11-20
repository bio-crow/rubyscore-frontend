import { TextField, Tooltip } from '@mui/material';
import { gridPageCountSelector, gridPageSelector, useGridApiContext } from '@mui/x-data-grid';
import PrimaryPagination from '@/components/common/ui/PrimaryPagination/PrimaryPagination';
import { FC, ReactElement, ReactNode } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { Box } from '@mui/system';

interface Props {
  title: any;
  children: ReactElement;
}

const CustomTooltip: FC<Props> = ({ children, title }) => {
  const theme = useCustomTheme();
  const tooltipTop = {
    '& .MuiTooltip-tooltip': {
      border: `1px solid ${theme.palette.gray}`,
      color: theme.palette.white50,
      borderRadius: '8px',
      background: theme.palette.black,
      boxShadow: '4px 4px 10px 0px rgba(72, 76, 91, 0.50)',
      padding: '10px',
    },
    '& .MuiTooltip-arrow': {
      '&:before': {
        background: theme.palette.black,
        border: `1px solid ${theme.palette.gray}`,
      },
    },
  };
  return (
    <Tooltip title={title} placement='top' arrow PopperProps={{ sx: tooltipTop }}>
      {children}
    </Tooltip>
  );
};
export default CustomTooltip;
