'use client';
import Layout from '@/components/Layout/Layout';
import {Box, Button, Typography} from '@mui/material';
import {useAccount} from 'wagmi';
import {useCustomTheme} from "../../hooks/useCustomTheme";
const Dashboard = () => {
    const theme = useCustomTheme();
    const {address, isConnected} = useAccount();
    return (
        <Layout>
            <Box>
                <Typography fontFamily='var(--font-lato)' fontWeight='700' color={theme.palette.powderWhite} >
                    Dashboard
                </Typography>
                <Button variant="contained">
                    Hello
                </Button>
            </Box>
        </Layout>
    );
};
export default Dashboard;
