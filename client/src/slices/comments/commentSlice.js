import { createSlice } from '@reduxjs/toolkit'
import { fetchPostComments } from './commentApi'

const initialState = {
    loading: false,
    comments: [],
    error: ''
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPostComments.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPostComments.fulfilled, (state, action) => {
            state.loading = false
            state.comments = action.payload
            state.error = ""
        })
        builder.addCase(fetchPostComments.rejected, (state, action) => {
            state.loading = false
            state.comments = []
            state.error = action.payload
        })
    }
})