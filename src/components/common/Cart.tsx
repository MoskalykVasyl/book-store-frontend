import { Trash2 } from 'lucide-react';
import {
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

const mockCart: CartItem[] = [
  {
    id: 1,
    title: 'Game of Thrones',
    price: 20,
    image:
      'https://ksd.ua/storage/products/gallery/medium/0QjjMg1C754OAeypQcQBP3BSdX4QyvfDzTANd5ZR.jpg.webp?v=1733324810',
    quantity: 1,
  },
  {
    id: 2,
    title: 'The Hobbit',
    price: 15,
    image: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
    quantity: 2,
  },
];

export const Cart = () => {
  const cart = mockCart;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <SheetContent className="flex flex-col w-full px-4 pb-4 sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>

      {/* LIST */}
      <div className="flex-1 overflow-y-auto mt-4 space-y-4 pr-2">
        {cart.length === 0 && (
          <p className="text-sm text-muted-foreground">Cart is empty</p>
        )}

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 border rounded-lg p-2"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-20 object-contain"
            />

            {/* INFO */}
            <div className="flex-1">
              <p className="text-sm font-medium line-clamp-2">{item.title}</p>

              <p className="text-xs text-muted-foreground">
                Qty: {item.quantity}
              </p>

              <p className="font-semibold text-sm">
                {item.price * item.quantity} $
              </p>
            </div>

            {/* REMOVE */}
            <Button size="icon" variant="ghost">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="border-t pt-4 mt-4 space-y-4">
        {/* TOTAL */}
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>{total} $</span>
        </div>

        {/* CHECKOUT */}
        <Button className="w-full cursor-pointer">Confirm Order</Button>
      </div>
    </SheetContent>
  );
};
