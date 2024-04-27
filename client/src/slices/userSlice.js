import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    users: [],
    error: ""
}


export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    return await axios.get("http://localhost:3001/users")
    .then(response => response.data)
    .catch(error => error.message)
})

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.payload
        })
    }
})

export const getUsers = state => state.user.users

export default userSlice.reducer