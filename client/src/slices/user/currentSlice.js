import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading : false,
    user: [],
    isAuth: false,
    error: ""
}

const currentSlice = createSlice({
    name: "current",
    initialState,
    extraReducers: (builder) => {

    }
})


export default currentSlice.reducer