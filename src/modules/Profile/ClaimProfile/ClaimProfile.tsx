import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import ClaimProfileForm from '@/modules/Profile/ClaimProfile/ClaimProfileForm/ClaimProfileForm';
import { claimProfileSchema } from '@/utils/validationConfig';
import { ClaimProfileFormContext } from '@/context/index';
import { CLAIM_PROFILE_FIELDS } from '@/constants/formFields';
import { useAccount } from 'wagmi';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { claimProfile } from '@/core/thunk/user.thunk';
import { wagmiCheckName } from '@/core/api/contract.api';
import * as process from 'process';

const ClaimProfile = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const claimProfileLoading = useAppSelector(state => state.userState.claimProfileLoading);
  const premiumPrice = useAppSelector(state => state.userState.premiumPrice);
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
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
  });
  const onSubmit = async (data: any) => {
    setErrorText(false);
    const name = data[CLAIM_PROFILE_FIELDS.NAME];
    const isValid = await wagmiCheckName(name);
    if (isValid) {
      data = {
        account: address,
        name: name,
        payable: isPaid,
        price: premiumPrice,
      };
      dispatch(claimProfile(data));
    } else {
      setErrorText(true);
    }
  };
  const onError = (data: any) => {
    // console.log(data)
  };
  useEffect(() => {
    const subscription = watch((value: any, { name, type }: any) => {
      if (name === CLAIM_PROFILE_FIELDS.NAME) {
        setIsPaid(value[CLAIM_PROFILE_FIELDS.NAME].length < 7);
      }
      setErrorText(false);
    });
    return () => subscription.unsubscribe();
  }, [watch]);
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 32px',
          borderRadius: '10px',
          border: `1px solid ${theme.palette.white10}`,
          background: theme.palette.black,
        }}
      >
        <Box color={theme.palette.powderWhite} className='H2-Lato-fw-700-fs-24'>
          Claim Profile
        </Box>
        <Box
          sx={{
            color: theme.palette.white50,
            display: 'flex',
            flexDirection: 'column',
          }}
          className='Body-Lato-fw-500-fs-18'
        >
          <Box>Own your identity in the digital world. Get started with a Web3 domain.</Box>
          <Box>
            3-6 symbols - Paid name ({`${premiumPrice} ${process.env.NEXT_PUBLIC_CHAIN_CURRENCY}`}), premium
            design (200 points); 7-20 symbols - Free name (10 points).
          </Box>
        </Box>
        <ClaimProfileForm onSubmit={onSubmit} onError={onError} isLoading={claimProfileLoading} />
        {errorText && <Box color='red'>Invalid name</Box>}
      </Box>
    </ClaimProfileFormContext.Provider>
  );
};
export default ClaimProfile;
