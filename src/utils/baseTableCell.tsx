import { GridColumnHeaderParams, GridRenderCellParams } from '@mui/x-data-grid';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { Box } from '@mui/system';
import Image from 'next/image';
import CopyIcon from '@/components/common/Icons/CopyIcon';
import { copyToClickBoard } from '@/utils/helpers';
import { useAppDispatch, useAppSelector } from '@/core/store';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import { GasHeaderTooltip, TimeHeaderTooltip } from '@/utils/tooltipsContent';
import InfoIcon from '@/components/common/Icons/InfoIcon';
import CustomInput from '@/components/common/ui/CustomInput/CustomInput';
import { networkOptions, networkStaticData } from '@/constants/index';
import { DashboardTabIndexType } from '@/types/index';
import moment from 'moment';
import { MouseEvent, useEffect, useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { setActiveProject } from '@/core/state/deposit.state';
import { useTimer } from 'react-timer-hook';
import { FormInputText } from '@/components/common/fields/InputField';
import { DEPOSIT_ANOTHER_FIELDS } from '@/constants/formFields';
import { FormSelect } from '@/components/common/fields/SelectField';

export const ReferralUserCell = (params: GridRenderCellParams<any>) => {
  const theme = useCustomTheme();
  const leaderboardUser = useAppSelector(state => state.leaderboardState.leaderboardUser);
  const copyValue = params.row.wallet;
  const maskedWallet =
    params.row.wallet && params.row.wallet.slice(0, 6) + '...' + params.row.wallet.slice(-6);
  const isYou = leaderboardUser && leaderboardUser.profile.wallet === params.row.wallet;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Image
        src={params.row.isPremium ? '/asserts/PremiumAvatar.svg' : '/asserts/FreeAvatar.svg'}
        alt='icon'
        width='32'
        height='32'
        style={{
          borderRadius: '5px',
        }}
      />
      {isYou ? (
        <Box>You</Box>
      ) : (
        <>
          <Box>{params.row.name || maskedWallet}</Box>
          <Box
            sx={{
              cursor: 'pointer',
              height: '24px',
            }}
          >
            <Box
              height='24px'
              onClick={e => {
                e.stopPropagation();
                copyToClickBoard(copyValue);
              }}
            >
              <CopyIcon fill={theme.palette.white50} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};
export const FromNowCell = (params: GridRenderCellParams<any>) => {
  const date = params.row.sendAt;
  return <Box>{moment(date).fromNow()}</Box>;
};
export const TimerCell = (params: GridRenderCellParams<any>) => {
  const date = new Date(params.row.sendAt);
  const expiryTimestamp = date.getTime();
  const config: any = {
    expiryTimestamp,
  };
  const { seconds, minutes, hours, days, start } = useTimer(config);
  useEffect(() => {
    start();
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
      }}
    >
      <Box>{seconds}s</Box>
      <Box>:</Box>
      <Box>{minutes}m</Box>
      <Box>:</Box>
      <Box>{hours}h</Box>
      <Box>:</Box>
      <Box>{days}d</Box>
      <Box></Box>
    </Box>
  );
};
export const NetworkCell = (params: GridRenderCellParams<any>) => {
  const project = params.row.project.name;
  // @ts-ignore
  const icon = networkStaticData[project]?.icon;
  // @ts-ignore
  const label = networkStaticData[project]?.label;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <Image src={icon} alt='icon' width='24' height='24' />
      <Box>{label}</Box>
    </Box>
  );
};
export const NetworkHeader = (params: GridColumnHeaderParams) => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const activeProject = useAppSelector(state => state.depositState.activeProject);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const chooseProject = (project: DashboardTabIndexType) => {
    dispatch(setActiveProject(project));
  };
  return (
    <Box>
      <Box
        id='net-select-button'
        aria-controls={open ? 'net-select-menu' : undefined}
        aria-haspopup='true'
        sx={{
          cursor: 'pointer',
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
        }}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Box>Network</Box>
        <Image src={networkStaticData[activeProject].icon} alt='icon' width='24' height='24' />
      </Box>
      <Menu
        id='net-select-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'net-select-button',
        }}
      >
        {networkOptions.map(option => (
          <MenuItem
            sx={{ background: activeProject === option.value ? theme.palette.white10 : 'transparent' }}
            key={option.value}
            onClick={() => chooseProject(option.value)}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Image src={option.icon} alt='icon' width='24' height='24' />
              <Box
                sx={{
                  color: theme.palette.powderWhite,
                }}
                className='Body-Lato-fw-600-fs-14'
              >
                {option.text}
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export const TimeHeader = (params: GridColumnHeaderParams) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: theme.palette.white50,
      }}
    >
      <Box>Time</Box>
      <CustomTooltip title={<TimeHeaderTooltip />}>
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
  );
};

export const GasHeader = (params: GridColumnHeaderParams) => {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: theme.palette.white50,
      }}
    >
      <Box>Gas l1 (ETH)</Box>
      <CustomTooltip title={<GasHeaderTooltip />}>
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
  );
};

export const InputTableCell = (params: GridRenderCellParams<any>) => {
  const { field, row } = params;
  return (
    <Box
      sx={{
        display: 'flex',
        alignSelf: 'flex-start',
        paddingTop: '5px',
      }}
    >
      <FormInputText
        name={`${row.fieldArrayName}.${row.index}.${field}`}
        control={row.control}
        placeholder='Enter value'
      />
    </Box>
  );
};
export const SelectTableCell = (params: GridRenderCellParams<any>) => {
  const { field, row } = params;
  return (
    <Box
      sx={{
        display: 'flex',
        alignSelf: 'flex-start',
        paddingTop: '5px',
      }}
    >
      <FormSelect
        name={`${row.fieldArrayName}.${row.index}.${field}`}
        control={row.control}
        placeholder='Choose network'
        options={networkOptions}
      />
    </Box>
  );
};
