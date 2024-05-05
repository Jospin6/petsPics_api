import { createSlice } from '@reduxjs/toolkit'
import { fetchPets } from './petApi'

const initialState = {
    loading: false,
    pets: [],
    error: ""
}

const petSlice = createSlice({
    name: "pet",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPets.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPets.fulfilled, (state, action) => {
            state.loading = false
            state.pets = action.payload
            state.error = ""
        })
        builder.addCase(fetchPets.rejected, (state, action) => {
            state.loading = false
            state.pets = []
            state.error = action.payload
        })
    }
})


export default petSlice.reducer