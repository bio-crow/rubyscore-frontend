import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import CustomInput from '@/components/common/ui/CustomInput/CustomInput';
import PrimaryButton from '@/components/common/ui/PrimaryButton/PrimaryButton';
import pluralize from 'pluralize';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
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
        />
        <PrimaryButton variant='contained' size='large' fullWidth={!isSm}>
          Claim
        </PrimaryButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {namePrefix.map(item => (
          <Box
            sx={{
              padding: '8px 24px 8px 24px',
              borderRadius: '10px',
              gap: '5px',
              width: { xs: '100%', sm: 'unset' },
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              background: activePrefix === item.value ? theme.palette.gray : theme.palette.white10,
              border: `1px solid ${
                activePrefix === item.value ? theme.palette.lightGreen : theme.palette.white10
              }`,
            }}
            key={item.value}
            onClick={() => setActivePrefix(item.value)}
          >
            <Box className='menu-Lato-fw-700-fs-14' color={theme.palette.powderWhite}>
              {item.value}
            </Box>
            <Box className='menu-Lato-fw-700-fs-14'>|</Box>
            <Box className='menu-Lato-fw-500-fs-14' color={theme.palette.white50}>
              {`${item.points} ${pluralize('point', item.points)}`}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default ClaimProfile;
