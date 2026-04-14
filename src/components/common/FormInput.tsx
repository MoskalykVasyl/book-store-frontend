import {
  Field,
  FieldError as UIFieldError,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type {
  FieldValues,
  Path,
  UseFormRegister,
  FieldErrors,
  FieldError,
} from 'react-hook-form';

type FormInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  placeholder?: string;
  type?: string;
};

export const FormInput = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  placeholder,
  type = 'text',
}: FormInputProps<T>) => {
  const error = errors[name] as FieldError | undefined;

  return (
    <Field data-invalid={!!error} className="mt-1">
      <FieldLabel>{label}</FieldLabel>

      <Input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          setValueAs: (v) => {
            if (type === 'number') {
              return v === '' ? undefined : Number(v);
            }
            return v;
          },
        })}
      />

      {error && <UIFieldError errors={[error]} />}
    </Field>
  );
};
