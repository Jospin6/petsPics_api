import { createSlice } from '@reduxjs/toolkit'
import { fetchSinglePost } from './postApi'

const initialState = {
    loading: false,
    post: [],
    error: ""
}

const singlePostSlice = createSlice({
    name: "singlePost",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchSinglePost.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchSinglePost.fulfilled, (state, action) => {
            state.loading = false
            state.post = action.payload
            state.error = ""
        })
        builder.addCase(fetchSinglePost.rejected, (state, action) => {
            state.loading = false
            state.post = []
            state.error = action.payload
        })
    }
})

export default singlePostSlice.reducer