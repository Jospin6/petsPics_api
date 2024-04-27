import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from './userApi'

const initialState = {
    loading: false,
    users: [],
    isAuth: false,
    currentUser: {},
    error: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        checkeAuth: (state, action) => {
            state.isAuth = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload.getUsers
            state.currentUser = action.payload.currentUser
            state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.payload
        })
    }
})

export const { checkeAuth } = userSlice.actions

export default userSlice.reducer