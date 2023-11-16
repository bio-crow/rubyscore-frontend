import { Box } from '@mui/system';
import { cloneElement, FC, useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import Image from 'next/image';
import ThirdlyButton from '@/components/common/ui/ThirdlyButton/ThirdlyButton';
import { useAppDispatch, useAppSelector } from '@/core/store';
import CloseIcon from '@/components/common/Icons/CloseIcon';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { claimProfileSchema } from '@/utils/validationConfig';
import { ClaimProfileFormContext } from '@/context/index';
import { FormInputText } from '@/components/common/fields/InputField';
import { CLAIM_PROFILE_FIELDS } from '@/constants/formFields';
import { wagmiCheckName } from '@/core/api/contract.api';
import { claimProfile } from '@/core/thunk/user.thunk';
import { useAccount } from 'wagmi';
import WarningIcon from '@/components/common/Icons/WarningIcon';
import CurrencyIcon from '@/components/common/Icons/CurrencyIcon';

interface Props {
  Trigger: any;
}

const ClaimNameModal: FC<Props> = ({ Trigger }) => {
  const claimProfileLoading = useAppSelector(state => state.userState.claimProfileLoading);
  const premiumPrice = useAppSelector(state => state.userState.premiumPrice);
  const userName = useAppSelector(state => state.userState.userName);
  const dispatch = useAppDispatch();
  const { address } = useAccount();
  const theme = useCustomTheme();
  const [open, setOpen] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    reset();
  };
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
    resolver: yupResolver<any>(claimProfileSchema),
    defaultValues: {
      [CLAIM_PROFILE_FIELDS.NAME]: userName,
    },
  });
  const onSubmit = async (data: any) => {
    setErrorText(false);
    const name = data[CLAIM_PROFILE_FIELDS.NAME];
    if (name !== userName) {
      const isValid = await wagmiCheckName(name);
      if (isValid) {
        data = {
          account: address,
          payable: true,
          name: name,
          price: premiumPrice,
        };
        dispatch(claimProfile(data));
      } else {
        setErrorText(true);
      }
    } else {
      data = {
        account: address,
        payable: true,
        price: premiumPrice,
      };
      dispatch(claimProfile(data));
    }
  };
  const onError = (data: any) => {
    // console.log(data)
  };
  useEffect(() => {
    const subscription = watch((value: any, { name, type }: any) => {
      setErrorText(false);
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  const TriggerButton = cloneElement(Trigger, { onClick: onOpen }, Trigger.props.children);
  return (
    <ClaimProfileFormContext.Provider
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
      {TriggerButton}
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 32px 40px 32px',
            gap: '20px',
            borderRadius: '20px',
            border: `1px solid ${theme.palette.white10}`,
            background: theme.palette.black,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: 500,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box color={theme.palette.powderWhite} className='Body-Lato-fw-600-fs-24'>
                Upgrade Profile
              </Box>
              <Box
                sx={{
                  cursor: 'pointer',
                }}
                onClick={onClose}
              >
                <CloseIcon fill={theme.palette.white50} />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                color: theme.palette.white50,
              }}
              className='Body-Lato-fw-700-fs-16'
            >
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <Box sx={{ color: theme.palette.powderWhite }}>3 - 6 symbols&nbsp;</Box>
                <Box>- Paid name, premium design (200 points)</Box>
              </Box>
              <Box>Extrapolation in scoring</Box>
            </Box>
          </Box>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: '60px',
            }}
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <FormInputText
                name={CLAIM_PROFILE_FIELDS.NAME}
                control={control}
                placeholder='Search for your name'
              />
              {errorText && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: theme.palette.red,
                    gap: '10px',
                    padding: '10px 10px 10px 10px',
                  }}
                  className='Body-Lato-fw-700-fs-16'
                >
                  <WarningIcon fill={theme.palette.red} />
                  <Box>Invalid name</Box>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                className='Body-Lato-fw-600-fs-24'
              >
                <Box>Total</Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CurrencyIcon fill={theme.palette.powderWhite} />
                  <Box>{premiumPrice}</Box>
                </Box>
              </Box>
              <ThirdlyButton
                variant='contained'
                size='large'
                type='submit'
                loading={claimProfileLoading}
                startIcon={<Image src='/asserts/crownBlack.png' alt='icon' height='24' width='24' />}
                fullWidth
              >
                Upgrade Profile
              </ThirdlyButton>
            </Box>
          </form>
        </Box>
      </Modal>
    </ClaimProfileFormContext.Provider>
  );
};
export default ClaimNameModal;
