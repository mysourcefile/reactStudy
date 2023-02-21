import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 'kim'
})

let stock = createSlice({
    name: 'stock',
    initialState: [10, 20, 30]
})
let Data = createSlice({
    id: [0, 2],
    name: ['White and Black', 'Grey Yordan'],
    initialState: [2, 1]
})

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        Data: Data.reducer
    }
}) 