import { Controller } from 'react-hook-form';
import { FC } from 'react';
import CustomInput from '@/components/common/ui/CustomInput/CustomInput';
import { Box } from '@mui/system';
interface Props {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  InputProps?: any;
  size?: 'small' | 'medium';
  startAdornment?: any;
  disabled?: boolean;
  fullWidth?: boolean;
}
export const FormInputText: FC<Props> = ({
  name,
  control,
  label,
  placeholder,
  InputProps,
  disabled,
  fullWidth,
  size = 'medium',
}) => {
  return (
    <Controller
      name={name}
      defaultValue=''
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <CustomInput
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          disabled={disabled}
          sx={{ flex: 1 }}
          size={size}
          fullWidth={fullWidth}
          variant='outlined'
          placeholder={placeholder}
          autoComplete='off'
          InputProps={InputProps}
        />
      )}
    />
  );
};
