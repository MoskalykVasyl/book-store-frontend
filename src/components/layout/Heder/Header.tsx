import { Input } from '@/components/ui/input';
import Logo from '../../../assets/book-store.png';
import { User, Heart, ShoppingCart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { LoginForm } from '@/components/forms/LoginFom';
import { Link } from 'react-router';
import { Cart } from '@/components/common/Cart';
import { useState } from 'react';
import { useMe } from '@/features/useMe';
import { useCart } from '@/context/CartContext';

export const Header = () => {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const { totalItems } = useCart();
  const { data } = useMe();
  const user = data?.data;

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
        <Link to={'admin'}>
          <p>ADMIN</p>
        </Link>
      </div>
      <div className="flex items-center gap-2  ">
        <User className="cursor-pointer " />
        {user ? (
          <span>{user.displayName}</span>
        ) : (
          <Sheet open={isOpenSignIn} onOpenChange={setIsOpenSignIn}>
            <SheetTrigger>
              <span>Sign in</span>
            </SheetTrigger>
            <LoginForm onSuccess={() => setIsOpenSignIn(false)} />
          </Sheet>
        )}

        <Separator orientation="vertical" />
        <Link to={'wish-list'}>
          <Heart className="cursor-pointer " />
        </Link>
        <Sheet>
          <SheetTrigger>
            <ShoppingCart className="cursor-pointer " />
            {totalItems > 0 && (
              <span className="absolute top-2 right-2 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold ">
                {totalItems}
              </span>
            )}
          </SheetTrigger>
          <Cart />
        </Sheet>
      </div>
    </header>
  );
};
