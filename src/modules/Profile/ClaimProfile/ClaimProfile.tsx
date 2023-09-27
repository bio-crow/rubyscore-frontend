import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import ClaimProfileForm from '@/modules/Profile/ClaimProfile/ClaimProfileForm/ClaimProfileForm';
import ProfilePrefixSelect from '@/modules/Profile/ClaimProfile/ProfilePrefixSelect/ProfilePrefixSelect';
import { claimProfileSchema } from '@/utils/validationConfig';
import { ClaimProfileFormContext } from '@/context/index';
import fa from '@walletconnect/legacy-modal/dist/cjs/browser/languages/fa';
import { CLAIM_PROFILE_FIELDS } from '@/constants/formFields';

const namePrefix = [
  {
    value: '.x',
    points: 1,
  },
  {
    value: '.linea',
    points: 1,
  },
  {
    value: '.base',
    points: 1,
  },
  {
    value: '.zora',
    points: 1,
  },
  {
    value: '.zkSync',
    points: 1,
  },
];
const ClaimProfile = () => {
  const theme = useCustomTheme();
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
  const onSubmit = async (data: any) => {
    data = { [CLAIM_PROFILE_FIELDS.NAME]: data[CLAIM_PROFILE_FIELDS.NAME] + activePrefix };
    // console.log(data)
  };
  const onError = (data: any) => {
    // console.log(data)
  };
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
          Own your identity in the digital world. Get started with a Web3 domain.
        </Box>
        <ClaimProfileForm
          activePrefix={activePrefix}
          onSubmit={onSubmit}
          onError={onError}
          isLoading={false}
        />
        <ProfilePrefixSelect activePrefix={activePrefix} setActivePrefix={setActivePrefix} />
      </Box>
    </ClaimProfileFormContext.Provider>
  );
};
export default ClaimProfile;
