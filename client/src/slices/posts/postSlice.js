import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    posts: [],
    error: ""
}

const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
    
    }

})


export default postSlice.reducer