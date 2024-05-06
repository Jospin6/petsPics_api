import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from './postApi'

const initialState = {
    loading: false,
    posts: [],
    error: ""
}

const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ""
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.payload
        })
    }

})


export default postSlice.reducer