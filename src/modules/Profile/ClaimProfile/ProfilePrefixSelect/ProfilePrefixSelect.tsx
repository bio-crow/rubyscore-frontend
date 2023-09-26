import { Box } from '@mui/system';
import { FC } from 'react';
import pluralize from 'pluralize';
import { useCustomTheme } from '@/hooks/useCustomTheme';
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
interface Props {
  activePrefix: string;
  setActivePrefix: Function;
}
const ProfilePrefixSelect: FC<Props> = ({ activePrefix, setActivePrefix }) => {
  const theme = useCustomTheme();
  return (
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
  );
};
export default ProfilePrefixSelect;
