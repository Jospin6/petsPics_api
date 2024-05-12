import { createSlice } from '@reduxjs/toolkit'
import { fetchCurrentUser } from './userApi'

const initialState = {
    loading : false,
    user: [],
    isAuth: false,
    error: ""
}

const currentSlice = createSlice({
    name: "current",
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload
        }
    },
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentUser.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchCurrentUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ""
        })
        .addCase(fetchCurrentUser.rejected, (state, action) => {
            state.loading = false
            state.user = []
            state.isAuth = false
            state.error = action.payload
        })
    }
})

export const { setAuth } = currentSlice.actions

export default currentSlice.reducer