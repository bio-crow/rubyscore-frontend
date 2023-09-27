import { Box } from '@mui/system';
import CustomInput from '@/components/common/ui/CustomInput/CustomInput';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC, useContext } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { ClaimProfileFormContext } from '@/context/index';
import { FormInputText } from '@/components/common/fields/InputField';
import { CLAIM_PROFILE_FIELDS } from '@/constants/formFields';

interface Props {
  activePrefix: string;
  onSubmit: Function;
  onError: Function;
  isLoading: boolean;
}

const ClaimProfileForm: FC<Props> = ({ activePrefix, onSubmit, onError }) => {
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const { control, handleSubmit, errors } = useContext(ClaimProfileFormContext);
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: isSm ? 'row' : 'column',
        alignItems: isSm ? 'center' : 'unset',
        padding: '32px 0px 20px 0px',
        width: '100%',
        gap: '20px',
      }}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormInputText
        name={CLAIM_PROFILE_FIELDS.NAME}
        control={control}
        placeholder='Search for your name'
        InputProps={{
          endAdornment: <Box>{activePrefix}</Box>,
        }}
      />
      <PrimaryButton
        variant='contained'
        size='large'
        fullWidth={!isSm}
        type='submit'
        sx={{
          alignSelf: 'flex-start',
        }}
      >
        Claim
      </PrimaryButton>
    </form>
  );
};
export default ClaimProfileForm;
