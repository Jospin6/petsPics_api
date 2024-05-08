import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    comments: [],
    error: ''
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    extraReducers: (builer) => {
        
    }
})