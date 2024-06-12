import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { FC, ReactNode, useRef } from 'react';
import { CustomTheme } from '@/theme/index';
import Image from 'next/image';
import { Box } from '@mui/system';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { FormHelperText, InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';
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
    '&.MuiInputBase-inputSizeSmall': {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '16px',
      borderRadius: '10px',
      padding: '10px 16px 10px 16px',
    },
  },
}));
interface Props {
  value: any;
  onChange: Function;
  RenderOption?: FC<{ option: any }>;
  placeholder?: string;
  options: any[];
  helperText?: string | null;
  error?: boolean;
  size?: 'small' | 'medium';
}
export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  error,
  helperText,
  RenderOption,
  size = 'medium',
}: Props) {
  const anchorEl = useRef(null);
  const handleChange = (event: { target: { value: string } }) => {
    onChange(event.target.value);
  };
  return (
    <FormControl error={error} fullWidth>
      <Select
        ref={anchorEl}
        labelId='demo-customized-select-label'
        id='demo-customized-select'
        value={value}
        MenuProps={{
          disableScrollLock: true,
        }}
        onChange={handleChange}
        input={<BootstrapInput size={size} />}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {RenderOption ? <RenderOption option={option} /> : <DefaultOptionRender option={option} />}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

export const DefaultOptionRender: FC<{ option: any }> = ({ option }) => {
  const theme = useCustomTheme();
  return (
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
  );
};
