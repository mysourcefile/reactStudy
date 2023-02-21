import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: { name: 'kim', age: 20 },
    reducers: {
        chagneName(state) {
            state.name = 'park'
        },
        changeAge(state, action) {
            state.age += action.payload
        }

    }
})
export let { chagneName, changeAge } = user.actions;
let stock = createSlice({
    name: 'stock',
    initialState: [10, 20, 30]
})
let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        incress_btn(state, action) {
            let id = state.findIndex((a) => { return a.id == action.payload })
            state[id].count += 1
        },
        addItem(state, action) {
            state.push(action.payload)
            console.log(state);
        }
    }
})
export let { incress_btn, addItem } = cart.actions;
export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer
    }
}) 