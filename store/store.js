import create from 'zustand'

export const useStore = create(
    (set) => ({
        
        cart : {
            pizzas : []
        },
        

        //add Pizza in cart

        addPizza: (data) =>
        set((state) => ({
            cart : {
                pizzas : [...state.cart.pizzas, data]
            }
        })),

        // remove pizzza 
        removePizza: (index) =>
        set((state) => ({
            cart : {
                pizzas: state.cart.pizzas.filter((_, i) => i !== index)
            }
        })),

        resetCart: () =>
        set(() => ({
            cart: {
                pizzas: []
            }
        }))
    })
)