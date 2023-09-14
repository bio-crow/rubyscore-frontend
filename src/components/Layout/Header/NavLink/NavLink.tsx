'use client';
import {Box} from '@mui/system';
import Link from 'next/link';
import {FC} from 'react';
import {usePathname} from 'next/navigation';
import {useCustomTheme} from "../../../../hooks/useCustomTheme";

interface Props {
    route: string;
    label: string;
}

const NavLink: FC<Props> = ({route, label}) => {
    const theme = useCustomTheme();
    const pathname = usePathname();
    return (
        <Link style={{textDecoration: 'none'}} href={route}>
            <Box
                color={
                    pathname === route ? theme.palette.lightGreen : theme.palette.white50
                }
            >
                {label}
            </Box>
        </Link>
    );
};
export default NavLink;
