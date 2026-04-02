import { useEffect, useState } from 'react';
import { useForm} from "react-hook-form"
import { Button } from '@/components/ui/button';
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
import { loginShema, type LoginSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

import { Link } from 'react-router';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import api from '@/lib/axios';
import { useAuth } from '@/context/AuthContext';

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { token, setToken } = useAuth();

 

  const { handleSubmit, register, formState: {errors}} = useForm<LoginSchema>({
    resolver: zodResolver(loginShema),
    mode: 'onChange',
    defaultValues: {
        email: 'test22@gmail.com',
        password: '123456'
    }
  })

  const onSubmit = async (data: LoginSchema) => {
        try {
          setLoading(true);
          const response = await api.post('/auth/login', data);
          setToken(response.data.access_token);
        } catch (error) {
          console.error('Login failed:', error);
        }
        finally {
          setLoading(false);
        }
       

    }
  
     useEffect(() => {
    console.log('Token in LoginForm:', token);
  }, [token]);

  return (
    <SheetContent className="w-full px-5 sm:max-w-md">
      <SheetHeader>
        <SheetTitle className='text-2xl md:text-3xl font-bold'>Sign in</SheetTitle>
        <SheetDescription>
          Enter your credentials to access your account
        </SheetDescription>
      </SheetHeader>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">
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
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <FieldError errors={[errors.password]} />
            )}
          </Field>

       
        <Button type="submit" disabled={loading} className='cursor-pointer'>
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>

     
        <div className="flex justify-between text-sm text-muted-foreground">
          <button type="button" className="hover:underline cursor-pointer">
            Forgot password?
          </button>
          <Link to={'register'}>
          <SheetClose asChild>
          <button type="button" className="hover:underline cursor-pointer">
            Sign up
          </button>
          </SheetClose>
          </Link>
        </div>
      </form>
    </SheetContent>
  );
};
