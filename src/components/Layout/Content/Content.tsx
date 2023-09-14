import {Box} from '@mui/system';
import {FC, ReactNode} from 'react';
import {useCustomTheme} from "../../../hooks/useCustomTheme";

interface Props {
    children: ReactNode;
}

const Content: FC<Props> = ({children}) => {
    const theme = useCustomTheme();
    return (
        <Box width='100%' flex='1' display='flex' justifyContent='center' bgcolor={theme.palette.backgroundColor}>
            <Box maxWidth='1392px' width='100%'>
                {children}
            </Box>
        </Box>
    );
};
export default Content;
