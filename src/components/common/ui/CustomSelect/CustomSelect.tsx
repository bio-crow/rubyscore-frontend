import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { useRef } from 'react';
import { CustomTheme } from '@/theme/index';
import Image from 'next/image';
import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
const BootstrapInput = styled(InputBase)(({ theme }: { theme: CustomTheme | any }) => ({
  '&.MuiInputBase-root': {
    width: '100%',
  },
  '& .MuiInputBase-input': {
    width: '100%',
    position: 'relative',
    background: theme.palette.white10,
    border: `1px solid ${theme.palette.white10}`,
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '23px',
    borderRadius: '10px',
    padding: '12px 24px 12px 24px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      border: `1px solid ${theme.palette.white50}`,
      boxShadow: 'none',
      borderRadius: '10px',
    },
    '&:hover': {
      border: `1px solid ${theme.palette.white50}`,
      boxShadow: 'none',
      borderRadius: '10px',
    },
  },
}));
interface Props {
  value: any;
  onChange: Function;
  options: any[];
}
export default function CustomSelect({ value, onChange, options }: Props) {
  const theme = useCustomTheme();
  const anchorEl = useRef(null);
  const handleChange = (event: { target: { value: string } }) => {
    onChange(event.target.value);
  };
  return (
    <Select
      ref={anchorEl}
      labelId='demo-customized-select-label'
      id='demo-customized-select'
      value={value}
      MenuProps={{
        disableScrollLock: true,
      }}
      onChange={handleChange}
      input={<BootstrapInput />}
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Image src={option.icon} alt='icon' width='24' height='24' />
            <Box
              sx={{
                color: theme.palette.powderWhite,
              }}
              className='Body-Lato-fw-600-fs-14'
            >
              {option.text}
            </Box>
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}
