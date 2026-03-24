import { Outlet } from 'react-router';
import { Footer } from '../Footer';
import { Header } from '../Heder';
import { TooltipProvider } from '@/components/ui/tooltip';

export const MainLayout = () => {
  return (
    <TooltipProvider>

    <div className="min-h-screen px-4 flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 w-full">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
    </TooltipProvider>
  );
};
