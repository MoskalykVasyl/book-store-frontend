import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { registerSchema, type RegisterSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema), mode: 'onChange' });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      
          <Field data-invalid={!!errors.email}>
            <FieldLabel>Email</FieldLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <FieldError errors={[errors.email]} />
            )}
          </Field>

          
          <Field data-invalid={!!errors.password}>
            <FieldLabel>Password</FieldLabel>
            <Input
              type="password"
              placeholder="Enter password"
              {...register("password")}
            />
            {errors.password && (
              <FieldError errors={[errors.password]} />
            )}
          </Field>

          
          <Field data-invalid={!!errors.confirmPassword}>
            <FieldLabel>Confirm Password</FieldLabel>
            <Input
              type="password"
              placeholder="Repeat password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <FieldError errors={[errors.confirmPassword]} />
            )}
          </Field>

      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};
