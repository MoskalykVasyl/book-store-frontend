import { useCart } from '@/context/CartContext';

export const useIsBookInCart = (bookId: string) => {
  const { cart } = useCart();

  return cart.some((item) => item.id === bookId);
};
