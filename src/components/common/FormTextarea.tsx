import {
  Field,
    FieldError as UIFieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Textarea } from "../ui/textarea"
import type { FieldErrors, FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface FormTextareaProps <T extends FieldValues> {
    placeholder?: string;
    name: Path<T>;
    label?: string;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
}

export const FormTextarea = <T extends FieldValues> ({placeholder, name, label, register, errors}: FormTextareaProps<T>) => {
    const error = errors[name] as FieldError | undefined;
  return (
    <Field data-invalid={!!error} className="mt-1">
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Textarea
        id={name}
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={!!errors[name]}
      />
      {error && <UIFieldError errors={[error]} />}
    </Field>
  )
}
