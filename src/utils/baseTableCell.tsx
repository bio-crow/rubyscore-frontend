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
import { networkStaticData } from '@/constants/index';
import { DashboardTabIndexType } from '@/types/index';
import moment from 'moment';
import { FC, MouseEvent, useCallback, useContext, useEffect, useState } from 'react';
import { InputAdornment, Menu, MenuItem } from '@mui/material';
import { setActiveProject } from '@/core/state/deposit.state';
import { useTimer } from 'react-timer-hook';
import { FormInputText } from '@/components/common/fields/InputField';
import { BALANCE_AND_SEND_FIELDS } from '@/constants/formFields';
import { FormSelect } from '@/components/common/fields/SelectField';
import { fetchProjectTax } from '@/core/api/deposit.api';
import { BalanceAndSentFormContext } from '@/context/index';
import { debounce } from 'lodash';
import { appRoutes } from '@/constants/routes';

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
export const ReferralLinkCell = (params: GridRenderCellParams<any>) => {
  const theme = useCustomTheme();
  const { field, row } = params;
  const refCode = row[field];
  const refLink = `${window.location.origin}${appRoutes.PROFILE}/?ref=${refCode}`;
  const copyReferralLink = () => {
    refCode && copyToClickBoard(refLink);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '5px',
        alignItems: 'center',
      }}
    >
      <Box>{refCode && refLink}</Box>
      <Box
        sx={{
          cursor: 'pointer',
          height: '24px',
        }}
      >
        <Box height='24px' onClick={copyReferralLink}>
          <CopyIcon fill={theme.palette.white50} />
        </Box>
      </Box>
    </Box>
  );
};
export const ProfitCell = (params: GridRenderCellParams<any>) => {
  const { field, row } = params;
  return <Box>{row[field]} ETH</Box>;
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
  const networkOptions = useAppSelector(state => state.depositState.networkOptions);
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
        justifyContent: 'center',
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
export const CommissionCell = (params: GridRenderCellParams<any>) => {
  const { row } = params;
  const theme = useCustomTheme();
  const projectFieldName = `${row.fieldArrayName}.${row.index}.${BALANCE_AND_SEND_FIELDS.NETWORK}`;
  const valueFieldName = `${row.fieldArrayName}.${row.index}.${BALANCE_AND_SEND_FIELDS.VALUE}`;
  const { getValues, watch } = useContext(BalanceAndSentFormContext);
  const [project, setProject] = useState(getValues(projectFieldName));
  const [value, setValue] = useState(0);
  const [tax, setTax] = useState<any>(0);
  useEffect(() => {
    loadTax({ project, value });
  }, [project, value]);
  const loadTaxCallback = async ({ project, value }: any) => {
    const res: any = await fetchProjectTax({ project, value });
    if (res?.data?.is_ok) {
      setTax(res.data.result.tax);
    } else {
      setTax('unknown');
    }
  };
  const loadTax = useCallback(debounce(loadTaxCallback, 1000), []);
  useEffect(() => {
    const subscription = watch((value: any, { name, type }: any) => {
      if (name === projectFieldName) {
        const pr = value[row.fieldArrayName][row.index][BALANCE_AND_SEND_FIELDS.NETWORK];
        setProject(pr);
      }
      if (name === valueFieldName) {
        const val = value[row.fieldArrayName][row.index][BALANCE_AND_SEND_FIELDS.VALUE];
        setValue(val);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <Box
      sx={{
        display: 'flex',
        alignSelf: 'flex-start',
        paddingTop: '15px',
        color: theme.palette.white50,
      }}
      className='Body-Lato-fw-600-fs-14'
    >
      {tax}
    </Box>
  );
};
export const InputAddressTableCell = (params: GridRenderCellParams<any>) => {
  const { field, row } = params;
  return (
    <Box
      sx={{
        display: 'flex',
        alignSelf: 'flex-start',
        paddingTop: '5px',
        width: '100%',
      }}
    >
      <FormInputText
        name={`${row.fieldArrayName}.${row.index}.${field}`}
        control={row.control}
        size='small'
        fullWidth
        placeholder='Enter address'
      />
    </Box>
  );
};
export const InputValueTableCell = (params: GridRenderCellParams<any>) => {
  const { field, row } = params;
  const { setValue, getValues } = useContext(BalanceAndSentFormContext);
  const networkOptions = useAppSelector(state => state.depositState.networkOptions);
  const setMaxValue = () => {
    const values = getValues && getValues();
    const project = values['array'][row.index][BALANCE_AND_SEND_FIELDS.NETWORK];
    const maxValue = networkOptions.find(item => item.value === project)?.balance;
    if (maxValue) {
      setValue(`${row.fieldArrayName}.${row.index}.${field}`, maxValue);
    }
  };
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
        size='small'
        InputProps={{
          endAdornment: (
            <Box
              sx={{
                cursor: 'pointer',
              }}
              onClick={setMaxValue}
            >
              MAX
            </Box>
          ),
        }}
        placeholder='Enter value'
      />
    </Box>
  );
};
export const SelectTableCell = (params: GridRenderCellParams<any>) => {
  const { field, row } = params;
  const networkOptions = useAppSelector(state => state.depositState.networkOptions);
  const OptionRender: FC<{ option: any }> = ({ option }) => {
    const theme = useCustomTheme();
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          paddingRight: '15px',
          overflow: 'hidden',
        }}
      >
        <Image src={option.icon} alt='icon' width='20' height='20' />
        <Box
          sx={{
            color: theme.palette.powderWhite,
          }}
          className='Body-Lato-fw-600-fs-14'
        >
          {option.text}
        </Box>
        <Box
          sx={{
            color: theme.palette.white50,
            marginLeft: 'auto',
          }}
          className='Body-Lato-fw-600-fs-14'
        >
          {option.balance}
        </Box>
      </Box>
    );
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignSelf: 'flex-start',
        paddingTop: '5px',
        width: '100%',
      }}
    >
      <FormSelect
        name={`${row.fieldArrayName}.${row.index}.${field}`}
        control={row.control}
        placeholder='Choose network'
        options={networkOptions}
        size='small'
        RenderOption={OptionRender}
      />
    </Box>
  );
};
export const InputDateCell = (params: GridRenderCellParams<any>) => {
  const { row } = params;
  const { setValue } = useContext(BalanceAndSentFormContext);
  const isSendInstant = useAppSelector(state => state.depositState.isSendInstant);
  useEffect(() => {
    if (isSendInstant) {
      setValue(`${row.fieldArrayName}.${row.index}.${BALANCE_AND_SEND_FIELDS.MINUTE}`, 0);
      setValue(`${row.fieldArrayName}.${row.index}.${BALANCE_AND_SEND_FIELDS.HOUR}`, 0);
      setValue(`${row.fieldArrayName}.${row.index}.${BALANCE_AND_SEND_FIELDS.DAY}`, 0);
    } else {
      setValue(`${row.fieldArrayName}.${row.index}.${BALANCE_AND_SEND_FIELDS.MINUTE}`, 1);
      setValue(`${row.fieldArrayName}.${row.index}.${BALANCE_AND_SEND_FIELDS.HOUR}`, 0);
      setValue(`${row.fieldArrayName}.${row.index}.${BALANCE_AND_SEND_FIELDS.DAY}`, 0);
    }
  }, [isSendInstant]);
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '5px',
        alignSelf: 'flex-start',
        paddingTop: '5px',
        '.MuiFormHelperText-root': {
          position: 'absolute !important',
          bottom: '-20px',
          left: '-10px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
        }}
      >
        <FormInputText
          name={`${row.fieldArrayName}.${row.index}.${BALANCE_AND_SEND_FIELDS.MINUTE}`}
          control={row.control}
          placeholder=''
          size='small'
          disabled={isSendInstant}
        />
        <Box>m</Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
        }}
      >
        <FormInputText
          name={`${row.fieldArrayName}.${row.index}.${BALANCE_AND_SEND_FIELDS.HOUR}`}
          control={row.control}
          placeholder=''
          size='small'
          disabled={isSendInstant}
        />
        <Box>h</Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
        }}
      >
        <FormInputText
          name={`${row.fieldArrayName}.${row.index}.${BALANCE_AND_SEND_FIELDS.DAY}`}
          control={row.control}
          placeholder=''
          size='small'
          disabled={isSendInstant}
        />
        <Box>d</Box>
      </Box>
    </Box>
  );
};
