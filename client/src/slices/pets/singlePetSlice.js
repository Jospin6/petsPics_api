import { createSlice } from "@reduxjs/toolkit"
import { fetchSinglePet } from "./petApi"

const initialState = {
    loading: false,
    pet: [],
    error: ""
}

const singlePetSlice = createSlice({
    name: "singlePet",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchSinglePet.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(fetchSinglePet.fulfilled, (state, action) => {
            state.loading = false
            state.pet = action.payload
        }),
        builder.addCase(fetchSinglePet.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default singlePetSlice.reducer