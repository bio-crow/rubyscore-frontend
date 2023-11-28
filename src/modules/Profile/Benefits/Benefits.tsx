import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import ThirdlyButton from '@/components/common/ui/ThirdlyButton/ThirdlyButton';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAppDispatch, useAppSelector } from '@/core/store';
import ClaimNameModal from '@/components/common/ClaimNameModal/ClaimNameModal';

const benefitsConfig = [
  {
    title: '200 points',
    content: `The user receives 200 points for a paid profile`,
  },
  {
    title: 'Unique avatar',
    content: 'The user receives unique\n golden avatar and nickname',
  },
];
const Benefits = () => {
  const theme = useCustomTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const claimProfileLoading = useAppSelector(state => state.userState.claimProfileLoading);
  return (
    <Box
      sx={{
        borderRadius: '10px',
        border: `1px solid ${theme.palette.white10}`,
        background: theme.palette.benefitsGradient,
        padding: '40px 32px',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 5,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          zIndex: -1,
          display: { xs: 'none', lg: 'flex' },
        }}
      >
        <Image src='/asserts/benefitsBg1.svg' alt='icon' width='393' height='282' />
      </Box>
      <Box maxWidth='562px' display='flex' flexDirection='column' gap='32px' zIndex='1'>
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'unset', sm: 'center' },
            gap: '20px',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            padding: '20px 40px 20px 40px',
            borderRadius: '10px',
            background: theme.palette.benefitsGradient2,
          }}
        >
          {benefitsConfig.map(item => (
            <Box key={item.title} display='flex' flexDirection='column' maxWidth='230px'>
              <Box color={theme.palette.powderWhite} className='benefit-title-Lato-fw-800-fs-32'>
                {item.title}
              </Box>
              <Box color={theme.palette.white50} className='benefit-content-Lato-fw-500-fs-14'>
                {item.content}
              </Box>
            </Box>
          ))}
        </Box>
        <ClaimNameModal
          Trigger={
            <ThirdlyButton
              variant='contained'
              size='large'
              loading={claimProfileLoading}
              startIcon={<Image src='/asserts/crownBlack.png' alt='icon' height='24' width='24' />}
              fullWidth={!isSm}
            >
              Upgrade Profile
            </ThirdlyButton>
          }
        />
      </Box>
    </Box>
  );
};
export default Benefits;
