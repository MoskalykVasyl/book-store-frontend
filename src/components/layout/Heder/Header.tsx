import { Input } from '@/components/ui/input';
import Logo from '../../../assets/book-store.png';
import { User, Heart, ShoppingCart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { LoginForm } from '@/components/forms/LoginFom';
import { Link } from 'react-router';
import { Cart } from '@/components/common/Cart';

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-1 pt-2 h-16">
      <div className="flex items-center justify-center">
        <Link to={'/'}>
          <img className="h-16" src={Logo} alt="Book Store Logo" />
        </Link>

        <Input
          type="search"
          className="w-40 focus:w-60 transition-all duration-300"
          placeholder="Search..."
        />
      </div>
      <div className="flex items-center gap-2  ">
        <User className="cursor-pointer " />
        <Sheet>
          <SheetTrigger>
            <span>Sign in</span>
          </SheetTrigger>
          <LoginForm />
        </Sheet>
        <Separator orientation="vertical" />
        <Link to={'wish-list'}>
          <Heart className="cursor-pointer " />
        </Link>
        <Sheet>
          <SheetTrigger>
        <ShoppingCart className="cursor-pointer " />
          </SheetTrigger>
          <Cart />
        </Sheet>
      </div>
    </header>
  );
};
