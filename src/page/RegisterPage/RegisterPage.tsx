import { RegisterForm } from "@/components/forms/RegisterForm";


export const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      
      <div className="w-full max-w-md space-y-6 p-6 border rounded-2xl shadow-sm bg-background">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Create account</h1>
          <p className="text-sm text-muted-foreground">
            Sign up to start buying books
          </p>
        </div>
        <RegisterForm />      

      </div>
    </div>
  );
};