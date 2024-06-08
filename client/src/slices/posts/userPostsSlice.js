import { createSlice } from "@reduxjs/toolkit";
import { fetchUserPosts } from "./postApi"

const initialState = {
    loading: false,
    posts: [],
    error: ""
}

const userPostsSlice = createSlice({
    name: "userPosts",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUserPosts.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchUserPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ""
        })
        .addCase(fetchUserPosts.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.payload
        })
    }
})

export default userPostsSlice.reducer