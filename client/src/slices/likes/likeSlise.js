import { createSlice } from '@reduxjs/toolkit'
import {fetchUsersLikedPost} from './likeApi'

const initialState = {
    loading: false,
    likes: [],
    error: ""
}

const likeSlice = createSlice({
    name: "likes",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsersLikedPost.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsersLikedPost.fulfilled, (state, action) => {
            state.loading = false
            state.likes = action.payload
            state.error = ""
        })
        builder.addCase(fetchUsersLikedPost.rejected, (state, action) => {
            state.loading = false
            state.likes = []
            state.error = action.payload
        })
    }
})

export default likeSlice.reducer
