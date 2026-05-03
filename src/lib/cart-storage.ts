import type { CartItem } from "@/types/api/book";

const CART_KEY = 'bookstore_cart';

export const getCartFromStorage = (): CartItem[] => {
    try {
        const data = localStorage.getItem(CART_KEY);

        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

export const saveCartToStorage = (cart: CartItem[]) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};