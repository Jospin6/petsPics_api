import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    return await axios.get("http://localhost:3001/post")
        .then(reponse => reponse.data)
        .catch(error => error.message)
})

export const createPost = createAsyncThunk("post/createPost", async (data) => {
    return await axios.post("http://localhost:3001/post", data, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
})