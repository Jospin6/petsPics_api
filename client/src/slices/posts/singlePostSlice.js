import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    post: [],
    error: ""
}

const singlePostSlice = createSlice({
    name: "singlePost",
    initialState,
    extraReducers: (builder) => {

    }
})

export default singlePostSlice.reducer