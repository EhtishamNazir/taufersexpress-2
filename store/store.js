import { create } from "zustand";

export const useStore = create(
    (set) => ({

        // cart
        cart: {
            pizzas: []
        },

        // add Pizza into cart
        addPizza: (data) => set((state) => ({
            cart: {
                pizzas: [...state.cart.pizzas, data]
            }
        })),

        // remove item from the cart
        removePizza: (index) =>
            set((state) => ({
                cart: {
                    pizzas: state.cart.pizzas.filter((_, i) => i != index)
                }
            })),

        // reset cart
        resetCart: () =>
            set(() => ({
                cart: {
                    pizzas: []
                }
            })),


    })
)