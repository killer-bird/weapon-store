import { createSlice } from "@reduxjs/toolkit"


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart(state, action) {
            const isCart = state.items.find(item => item.id === action.payload.id ? true : false);
            if(isCart) {
                console.log(123);
                state.items.map(item => item.id === action.payload.id ? item.counter++ : item)
            } else {
                console.log(321);
                state.items = [...state.items, {...action.payload, counter: 1}]
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        adjustCounter(state, action) {
            state.items = state.items.map(item => item.id === action.payload.id ? { ...item, counter: action.payload.counter } : item )
        }
    },

})


export const getTotalCount = (state) => {
    const totalCount = state.cart.items.reduce((totalCount, item) => totalCount + item.counter, 0)
    return totalCount
}

export const getTotalAmount = (state) => {
    const totalAmount = state.cart.items.reduce((totalAmount, item) => totalAmount + item.price * item.counter, 0) 
    return totalAmount
}

export const { addToCart, removeFromCart, adjustCounter } = cartSlice.actions

const { reducer } = cartSlice;

export default reducer