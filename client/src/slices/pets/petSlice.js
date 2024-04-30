import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    pets: [],
    error: ""
}

const petSlice = createSlice({
    name: "pet",
    initialState,
    extraReducers: (builder) => {
        
    }
})


export default petSlice.reducer