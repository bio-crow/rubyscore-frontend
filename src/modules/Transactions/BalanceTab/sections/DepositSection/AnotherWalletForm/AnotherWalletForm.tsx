import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import LoadingButton from '@mui/lab/LoadingButton';
import PlusIcon from '@/components/common/Icons/PlusIcon';
import CustomTooltip from '@/components/common/CustomTooltip/CustomTooltip';
import { TooltipAnotherWallet } from '@/utils/tooltipsContent';
import InfoIcon from '@/components/common/Icons/InfoIcon';

import { FC, useState } from 'react';
import { DepositAnotherFormContext } from '@/context/index';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { depositAnotherSchema } from '@/utils/validationConfig';
import { FormInputText } from '@/components/common/fields/InputField';
import { DEPOSIT_ANOTHER_FIELDS, DEPOSIT_SINGLE_FIELDS } from '@/constants/formFields';
import { FormSelect } from '@/components/common/fields/SelectField';
import { depositAnother, depositSingle } from '@/core/thunk/deposit.thunk';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { networkOptions } from '@/constants/index';

interface Props {}

const AnotherWalletForm: FC<Props> = () => {
  const theme = useCustomTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const dispatch = useAppDispatch();
  const depositLoading = useAppSelector(state => state.depositState.depositLoading);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    setError,
    clearErrors,
    trigger,
    getValues,
    control,
    reset,
  } = useForm({
    resolver: yupResolver<any>(depositAnotherSchema),
    shouldUnregister: true,
    defaultValues: {
      [DEPOSIT_ANOTHER_FIELDS.NETWORK]: 'scroll',
    },
  });
  const onSubmit = async (data: any) => {
    dispatch(depositAnother(data));
    reset();
  };
  const onError = (data: any) => {
    // console.log(data);
  };
  return (
    <DepositAnotherFormContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        setValue,
        setError,
        watch,
        clearErrors,
        trigger,
        getValues,
        control,
        reset,
        isValid,
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 'fit-content',
          gap: '10px',
          borderRadius: '10px',
          border: `1px solid ${theme.palette.white10}`,
          background: theme.palette.backgroundColor,
          padding: '20px',
        }}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            alignItems: { xs: 'justify', lg: 'flex-start' },
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <Box
              sx={{
                color: theme.palette.white50,
              }}
              className='Body-Inter-fw-500-fs-10'
            >
              Network
            </Box>
            <Box
              sx={{
                minWidth: '250px',
              }}
            >
              <FormSelect
                name={DEPOSIT_ANOTHER_FIELDS.NETWORK}
                control={control}
                placeholder='Choose network'
                options={networkOptions}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <Box
              sx={{
                color: theme.palette.white50,
              }}
              className='Body-Inter-fw-500-fs-10'
            >
              Value
            </Box>
            <FormInputText name={DEPOSIT_ANOTHER_FIELDS.VALUE} control={control} placeholder='Enter value' />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <Box
              sx={{
                color: theme.palette.white50,
              }}
              className='Body-Inter-fw-500-fs-10'
            >
              Address
            </Box>
            <FormInputText
              name={DEPOSIT_ANOTHER_FIELDS.ADDRESS}
              control={control}
              placeholder='Enter address'
            />
          </Box>
          <LoadingButton
            variant='contained'
            type='submit'
            loading={depositLoading}
            sx={{
              padding: '12px',
              marginTop: '28px',
              background: theme.palette.btnSecondaryDefault,
              borderRadius: '10px',
              border: '1px solid var(--white-10, rgba(245, 247, 243, 0.10))',
              minWidth: '0',
              ':hover': {
                background: theme.palette.btnSecondaryHover,
              },
            }}
          >
            <PlusIcon fill={theme.palette.black} />
          </LoadingButton>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <CustomTooltip title={<TooltipAnotherWallet />}>
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
          <Box
            sx={{
              color: theme.palette.white50,
            }}
            className='Body-Inter-fw-500-fs-14'
          >
            The amount will go to the deposit of this wallet in the Rubiscore system
          </Box>
        </Box>
      </form>
    </DepositAnotherFormContext.Provider>
  );
};
export default AnotherWalletForm;
