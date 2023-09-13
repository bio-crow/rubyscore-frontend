'use client';
import Layout from '@/components/Layout/Layout';
import { Box, Button, Typography } from '@mui/material';
import { useAccount } from 'wagmi';
const Dashboard = () => {
  const { address, isConnected } = useAccount();
  return (
    <Layout>
      <Box>
        <Typography fontFamily='var(--font-lato)' fontWeight='700' color='#FFFFFF'>
          Dashboard
        </Typography>
      </Box>
    </Layout>
  );
};
export default Dashboard;
