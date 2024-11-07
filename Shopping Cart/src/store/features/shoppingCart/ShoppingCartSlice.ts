import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface ShoppingCartState {
    items: {
        id: number;
        name: string;
        price: number;
        quantity: number;
        }[];
        total: number;
}  


const initialState: ShoppingCartState = {
    items: [
        {
            id: 1,
            name: "Hat",
            price: 10,
            quantity: 1
        },
        {
            id: 2,
            name: "Pants",
            price: 20,
            quantity: 2
        },
        {
            id: 3,
            name: "Shoes",
            price: 30,
            quantity: 3
        },
        {
            id: 4,
            name: "Jacket",
            price: 40,
            quantity: 4
        }
    ],
    total:0
}



export const shoppingCartSlice = createSlice({
    initialState,
    name: "shoppingCart",
    reducers: {
        increment: (state, action:PayloadAction<{id:number}>)=>{
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity++;
            }
        },
        decrement: (state, action:PayloadAction<{id:number}>)=>{
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity--;
            }
           
        },
        reset: (state)=>{
            state.items = []
            state.total = 0
        },
        getTotal:(state)=>{
            let totalPrice:number = 0;
            state.items.map((item) => (totalPrice +=item.price * item.quantity))
            state.total += totalPrice;
        }
        
    }
})
export const { increment, decrement, reset, getTotal } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer