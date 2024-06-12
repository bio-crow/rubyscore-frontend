import { Controller } from 'react-hook-form';
import { FC, ReactNode } from 'react';
import CustomSelect from '@/components/common/ui/CustomSelect/CustomSelect';
interface Props {
  name: string;
  control: any;
  placeholder?: string;
  options: any[];
  RenderOption?: FC<{ option: any }>;
  size?: 'small' | 'medium';
}
export const FormSelect: FC<Props> = ({ name, control, placeholder, options, RenderOption, size }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <CustomSelect
          helperText={error ? error.message : null}
          error={!!error}
          options={options}
          size={size}
          RenderOption={RenderOption}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    />
  );
};
