import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    likes: [],
    error: ""
}

const likeSlice = createSlice({
    name: "likes",
    initialState,
    extraReducers: (builder) => {

    }
})

export default likeSlice.reducer
