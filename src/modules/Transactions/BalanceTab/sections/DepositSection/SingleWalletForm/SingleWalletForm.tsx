import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import LoadingButton from '@mui/lab/LoadingButton';
import PlusIcon from '@/components/common/Icons/PlusIcon';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { depositSingleSchema } from '@/utils/validationConfig';
import { DepositSingleFormContext } from '@/context/index';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DEPOSIT_ANOTHER_FIELDS, DEPOSIT_SINGLE_FIELDS } from '@/constants/formFields';

import { FormInputText } from '@/components/common/fields/InputField';
import { FormSelect } from '@/components/common/fields/SelectField';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { depositSingle } from '@/core/thunk/deposit.thunk';
import { networkOptions } from '@/constants/index';

interface Props {}

const SingleWalletForm: FC<Props> = () => {
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
    resolver: yupResolver<any>(depositSingleSchema),
    shouldUnregister: true,
    defaultValues: {
      [DEPOSIT_ANOTHER_FIELDS.NETWORK]: 'scroll',
    },
  });
  const onSubmit = async (data: any) => {
    dispatch(depositSingle(data));
    reset();
  };
  const onError = (data: any) => {
    //  console.log(data)
  };
  return (
    <DepositSingleFormContext.Provider
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
          gap: '20px',
          borderRadius: '10px',
          border: `1px solid ${theme.palette.white10}`,
          background: theme.palette.backgroundColor,
          padding: '20px',
          alignItems: isLg ? 'flex-start' : 'justify',
          flexDirection: isLg ? 'row' : 'column',
        }}
        onSubmit={handleSubmit(onSubmit, onError)}
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
              name={DEPOSIT_SINGLE_FIELDS.NETWORK}
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
          <FormInputText name={DEPOSIT_SINGLE_FIELDS.VALUE} control={control} placeholder='Enter value' />
        </Box>
        <LoadingButton
          variant='contained'
          type='submit'
          loading={depositLoading}
          sx={{
            marginTop: '28px',
            padding: '12px',
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
      </form>
    </DepositSingleFormContext.Provider>
  );
};
export default SingleWalletForm;
