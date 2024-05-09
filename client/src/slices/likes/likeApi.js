import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersLikedPost = createAsyncThunk("likes/getUsersLikedPost", async () => {
    return await axios.get("http://localhost:3001/like", {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
})