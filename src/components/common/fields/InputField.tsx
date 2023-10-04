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
}
export const FormInputText: FC<Props> = ({ name, control, label, placeholder, InputProps }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <CustomInput
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          sx={{ flex: 1 }}
          size='medium'
          variant='outlined'
          placeholder={placeholder}
          autoComplete='off'
          InputProps={InputProps}
        />
      )}
    />
  );
};
