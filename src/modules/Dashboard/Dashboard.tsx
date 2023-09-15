'use client';
import Layout from '@/components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import PrimaryButton from '@/components/ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '@/components/ui/SecondaryButton/SecondaryButton';
import ThirdlyButton from '@/components/ui/ThirdlyButton/ThirdlyButton';
import Image from 'next/image';
import CustomInput from '@/components/ui/CustomInput/CustomInput';
const Dashboard = () => {
  const theme = useCustomTheme();
  return (
    <Layout>
      <Box>
        <Typography fontFamily='var(--font-lato)' fontWeight='700' color={theme.palette.powderWhite}>
          Dashboard
        </Typography>
        <Box display='flex' flexDirection='column' gap='20px'>
          <PrimaryButton variant='contained' size='small'>
            Default
          </PrimaryButton>
          <PrimaryButton variant='contained' size='medium'>
            Default
          </PrimaryButton>
          <PrimaryButton variant='contained' size='large' disabled>
            Default
          </PrimaryButton>
          <PrimaryButton variant='contained' size='large'>
            Default
          </PrimaryButton>
          <SecondaryButton variant='outlined' size='small'>
            Default
          </SecondaryButton>
          <SecondaryButton variant='outlined' size='medium'>
            Default
          </SecondaryButton>
          <SecondaryButton variant='outlined' size='large' disabled>
            Default
          </SecondaryButton>
          <SecondaryButton variant='outlined' size='large'>
            Default
          </SecondaryButton>
          <ThirdlyButton variant='contained' size='small'>
            Default
          </ThirdlyButton>
          <ThirdlyButton variant='contained' size='medium'>
            Default
          </ThirdlyButton>
          <ThirdlyButton variant='contained' size='large' disabled>
            Default
          </ThirdlyButton>
          <ThirdlyButton
            startIcon={<Image src='/asserts/crownBlack.png' alt='icon' height='24' width='24' />}
            variant='contained'
            size='large'
          >
            Default
          </ThirdlyButton>
          <CustomInput variant='outlined' placeholder='Search for your name' autoComplete='off' />
        </Box>
      </Box>
    </Layout>
  );
};
export default Dashboard;
