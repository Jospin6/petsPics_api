import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    posts: [],
    error: ""
}

const userPostsSlice = createSlice({
    name: "userPosts",
    initialState,
    extraReducers: (builder) => {
        builder.addCase()
    }
})