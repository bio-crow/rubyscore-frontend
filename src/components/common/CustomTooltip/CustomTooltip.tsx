import { TextField, Tooltip } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { cloneElement, FC, ReactElement, ReactNode, useState } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { Box } from '@mui/system';

interface Props {
  title: any;
  children: any;
  controlled?: boolean;
  disableFocusListener?: boolean;
  disableHoverListener?: boolean;
  disableTouchListener?: boolean;
}

const CustomTooltip: FC<Props> = ({
  children,
  title,
  controlled = false,
  disableFocusListener = false,
  disableHoverListener = false,
  disableTouchListener = false,
}) => {
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
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  if (controlled) {
    return (
      <ClickAwayListener onClickAway={handleTooltipClose}>
        {controlled ? (
          <Tooltip
            onClose={handleTooltipClose}
            open={open}
            onClickCapture={handleTooltipOpen}
            onClick={handleTooltipOpen}
            disableFocusListener={disableFocusListener}
            disableHoverListener={disableHoverListener}
            disableTouchListener={disableTouchListener}
            title={title}
            placement='top'
            arrow
            PopperProps={{ sx: tooltipTop }}
          >
            {children}
          </Tooltip>
        ) : (
          <Tooltip title={title} placement='top' arrow PopperProps={{ sx: tooltipTop }}>
            {children}
          </Tooltip>
        )}
      </ClickAwayListener>
    );
  }
  return (
    <Tooltip title={title} placement='top' arrow PopperProps={{ sx: tooltipTop }}>
      {children}
    </Tooltip>
  );
};
export default CustomTooltip;
