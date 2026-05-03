
import type { CartItem } from '@/types/api/book';
import {
  createContext,
  useContext,
} from 'react';

type CartContextType = {
  cart: CartItem[];
  addToCart: (book: CartItem) => void;
  removeFromCart: (bookId: string) => void;
  clearCart: () => void;
  incrementQuantity: (bookId: string) => void;
  decrementQuantity: (bookId: string) => void;
  totalPrice: number;
  totalItems: number;
};

export const CartContext = createContext<CartContextType | null>(null);



export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }
  return context;
};
