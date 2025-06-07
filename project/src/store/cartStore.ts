import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PlatformData, Product } from '../types/product';

interface CartItem {
  product: Product;
  platform: PlatformData;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, platform: PlatformData) => void;
  removeItem: (productId: string, platformName: string) => void;
  updateQuantity: (productId: string, platformName: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, platform) => {
        set((state) => {
          const existingItem = state.items.find(
            item => item.product.id === product.id && item.platform.name === platform.name
          );
          
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.product.id === product.id && item.platform.name === platform.name
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            };
          }
          
          return {
            items: [...state.items, { product, platform, quantity: 1 }]
          };
        });
      },
      
      removeItem: (productId, platformName) => {
        set((state) => ({
          items: state.items.filter(
            item => !(item.product.id === productId && item.platform.name === platformName)
          )
        }));
      },
      
      updateQuantity: (productId, platformName, quantity) => {
        set((state) => ({
          items: state.items.map(item =>
            item.product.id === productId && item.platform.name === platformName
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ).filter(item => item.quantity > 0)
        }));
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        const state = get();
        return state.items.reduce((total, item) => total + (item.platform.price * item.quantity), 0);
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);