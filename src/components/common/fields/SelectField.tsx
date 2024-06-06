import { Controller } from 'react-hook-form';
import { FC } from 'react';
import CustomSelect from '@/components/common/ui/CustomSelect/CustomSelect';
interface Props {
  name: string;
  control: any;
  placeholder?: string;
  options: any[];
}
export const FormSelect: FC<Props> = ({ name, control, placeholder, options }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <CustomSelect
          helperText={error ? error.message : null}
          error={!!error}
          options={options}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    />
  );
};
