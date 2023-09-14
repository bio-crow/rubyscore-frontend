import Layout from '@/components/Layout/Layout';
import {Box, Button, Typography} from '@mui/material';
import {useCustomTheme} from "../../hooks/useCustomTheme";

const Profile = () => {
    const theme = useCustomTheme();
    return (
        <Layout>
            <Box>
                <Typography fontFamily='var(--font-lato)' fontWeight='700' color={theme.palette.powderWhite}>
                    Profile
                </Typography>
            </Box>
        </Layout>
    );
};
export default Profile;
