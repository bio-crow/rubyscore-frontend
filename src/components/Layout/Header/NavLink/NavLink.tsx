'use client';
import { Box } from '@mui/system';
import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
interface Props {
  route: string;
  label: string;
}
const NavLink: FC<Props> = ({ route, label }) => {
  const pathname = usePathname();
  return (
    <Link style={{ textDecoration: 'none' }} href={route}>
      <Box
        color={
          pathname === route ? 'var(--light-green, #92FE9D)' : 'var(--white-50, rgba(245, 247, 243, 0.50))'
        }
      >
        {label}
      </Box>
    </Link>
  );
};
export default NavLink;
