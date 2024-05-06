import { createSlice } from '@reduxjs/toolkit'
import { fetchUserPets } from './petApi'

const initialState = {
    loading: "",
    pets: [],
    error: ""
}

const userPetSlice = createSlice({
    name: "userPet",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUserPets.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUserPets.fulfilled, (state, action) => {
            state.loading = false
            state.pets = action.payload
            state.error = ""
        })
        builder.addCase(fetchUserPets.rejected, (state, action) => {
            state.loading = false
            state.pets = []
            state.error = action.payload
        })
    }
})

export default userPetSlice.reducer