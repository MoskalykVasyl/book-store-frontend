import { Minus, Plus, Trash2 } from 'lucide-react';
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
export const Cart = () => {
  const {
    cart,
    totalPrice,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
  } = useCart();
  return (
    <SheetContent className="flex flex-col w-full px-4 pb-4 sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Cart</SheetTitle>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto mt-4 space-y-4 pr-2">
        {cart.length === 0 && (
          <p className="text-sm text-muted-foreground"> Cart is empty </p>
        )}
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 border rounded-lg p-2"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-16 h-20 object-contain"
            />

            <div className="flex-1">
              <p className="text-sm font-medium line-clamp-2">{item.title}</p>

              <div className="flex items-center gap-2 mt-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => decrementQuantity(item.id)}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span>{item.quantity}</span>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => incrementQuantity(item.id)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <p className="font-semibold text-sm mt-2">
                {item.price * item.quantity} $
              </p>
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={() => removeFromCart(item.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 mt-4 space-y-4">
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span> <span>{totalPrice} $</span>
        </div>

        <div className="flex gap-2">
          <Button variant="outline"  onClick={clearCart}>
            Clear Cart
          </Button>
          <Button > Confirm Order </Button>
        </div>
      </div>
    </SheetContent>
  );
};
