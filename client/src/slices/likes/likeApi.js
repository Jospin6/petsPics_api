import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUsersLikedPost = createAsyncThunk("likes/getUsersLikedPost", async () => {
    return await axios.get("http://localhost:3001/like", {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
    .then(respons => respons.data)
    .catch(error => error.message)
})