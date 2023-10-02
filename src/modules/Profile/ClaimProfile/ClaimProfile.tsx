import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import ClaimProfileForm from '@/modules/Profile/ClaimProfile/ClaimProfileForm/ClaimProfileForm';
import ProfilePrefixSelect from '@/modules/Profile/ClaimProfile/ProfilePrefixSelect/ProfilePrefixSelect';
import { claimProfileSchema } from '@/utils/validationConfig';
import { ClaimProfileFormContext } from '@/context/index';
import { CLAIM_PROFILE_FIELDS } from '@/constants/formFields';
import { wagmiClaimName } from '@/core/api/contract.api';
import { useAccount } from 'wagmi';
import { useAppDispatch, useAppSelector } from '@/core/store';
import { claimProfile } from '@/core/thunk/user.thunk';

const ClaimProfile = () => {
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();
  const claimProfileLoading = useAppSelector(state => state.userState.claimProfileLoading);
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [activePrefix, setActivePrefix] = useState('.x');
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
  const onSubmit = (data: any) => {
    const name = data[CLAIM_PROFILE_FIELDS.NAME] + activePrefix;
    data = {
      account: address,
      name: name,
      payable: isPaid,
    };
    dispatch(claimProfile(data));
  };
  const onError = (data: any) => {
    // console.log(data)
  };
  useEffect(() => {
    const subscription = watch((value: any, { name, type }: any) => {
      if (name === CLAIM_PROFILE_FIELDS.NAME) {
        setIsPaid(value[CLAIM_PROFILE_FIELDS.NAME].length < 6);
      }
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
        <Box color={theme.palette.white50} className='Body-Lato-fw-500-fs-18'>
          Own your identity in the digital world. Get started with a Web3 domain. {isPaid ? 'PAID' : 'FREE'}
        </Box>
        <ClaimProfileForm
          activePrefix={activePrefix}
          onSubmit={onSubmit}
          onError={onError}
          isLoading={claimProfileLoading}
        />
        <ProfilePrefixSelect activePrefix={activePrefix} setActivePrefix={setActivePrefix} />
      </Box>
    </ClaimProfileFormContext.Provider>
  );
};
export default ClaimProfile;
