import { getCartFromStorage, saveCartToStorage } from "@/lib/cart-storage";
import type { CartItem } from "@/types/api/book";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import { toast } from "sonner";

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    return getCartFromStorage();
  });

    useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const addToCart = (book: CartItem) => {
  let isExistingBook = false;

  setCart((prev) => {
    const existingBook = prev.find((item) => item.id === book.id);

    if (existingBook) {
      isExistingBook = true;

      return prev.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    }

    return [
      ...prev,
      {
        id: book.id,
        title: book.title,
        price: book.price,
        imageUrl: book.imageUrl,
        quantity: 1,
      },
    ];
  });

  toast.success(
    isExistingBook
      ? 'Book quantity updated'
      : 'Book added to cart',
  );
};
  // Remove book from cart
  const removeFromCart = (bookId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== bookId));
  };
  // Remove all books from cart
  const clearCart = () => {
    setCart([]);
  };
  // Increment quantity of book in cart
  const incrementQuantity = (bookId: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  // Decrement quantity of book in cart
  const decrementQuantity = (bookId: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === bookId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // Total price of books in cart
  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  // Total items in cart
  const totalItems = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};