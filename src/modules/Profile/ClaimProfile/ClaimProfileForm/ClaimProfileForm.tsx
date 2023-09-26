import { Box } from '@mui/system';
import CustomInput from '@/components/common/ui/CustomInput/CustomInput';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC } from 'react';
import { useCustomTheme } from '@/hooks/useCustomTheme';
interface Props {
  activePrefix: string;
}
const ClaimProfileForm: FC<Props> = ({ activePrefix }) => {
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'unset', sm: 'center' },
        padding: '32px 0px 20px 0px',
        width: '100%',
        gap: '20px',
      }}
    >
      <CustomInput
        sx={{ flex: 1 }}
        size='medium'
        variant='outlined'
        placeholder='Search for your name'
        autoComplete='off'
        InputProps={{
          endAdornment: <Box>{activePrefix}</Box>,
        }}
      />
      <PrimaryButton variant='contained' size='large' fullWidth={!isSm}>
        Claim
      </PrimaryButton>
    </Box>
  );
};
export default ClaimProfileForm;
