import { Product } from '@/payload-types'
import { create } from 'zustand'
import {
  createJSONStorage,
  persist,
} from 'zustand/middleware'

export type CartItem = {
  product: Product
}

type CartState = {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  clearCart: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          return { items: [...state.items, { product }] }
        }),
        removeItem: (id) =>
          set((state) => {
            const indexToRemove = state.items.findIndex(item => item.product.id === id);
            if (indexToRemove !== -1) {
              const updatedItems = [...state.items];
              updatedItems.splice(indexToRemove, 1);
              return { items: updatedItems };
            }
            return { items: state.items };
          }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)