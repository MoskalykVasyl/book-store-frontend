import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import { Field, FieldContent, FieldError, FieldLabel } from '../ui/field';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';





interface FormSelectProps<T extends FieldValues> {
    name: Path<T>;
    label?: string;
    placeholder?: string;
    control: Control<T>;
    selectItems: readonly string[];
}

export const FormSelect = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  selectItems,
}: FormSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field orientation="responsive" data-invalid={fieldState.invalid} className='w-fit h-fit'>
          <FieldContent>
            <FieldLabel htmlFor={`form-rhf-select-${name}`}>{label}</FieldLabel>
          </FieldContent>
          <Select
            name={field.name}
            value={field.value ?? ''}
            onValueChange={field.onChange}
           
            
          >
            <SelectTrigger
              id={`form-rhf-select-${name}`}
              aria-invalid={fieldState.invalid}
              className="min-w-30 bg-stone-300 border-0"
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent position="item-aligned" className='bg-stone-400 border-0' >
              {selectItems.map((item) => (
                <SelectItem  key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
           {fieldState.invalid && <FieldError className='text-red-100' errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};