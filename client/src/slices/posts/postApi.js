import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    return await axios.get("http://localhost:3001/post")
        .then(reponse => reponse.data)
        .catch(error => error.message)
})