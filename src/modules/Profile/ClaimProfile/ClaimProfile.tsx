import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import pluralize from 'pluralize';
import { useState } from 'react';
import ClaimProfileForm from '@/modules/Profile/ClaimProfile/ClaimProfileForm/ClaimProfileForm';
import ProfilePrefixSelect from '@/modules/Profile/ClaimProfile/ProfilePrefixSelect/ProfilePrefixSelect';

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
  return (
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
      <ClaimProfileForm activePrefix={activePrefix} />
      <ProfilePrefixSelect activePrefix={activePrefix} setActivePrefix={setActivePrefix} />
    </Box>
  );
};
export default ClaimProfile;
