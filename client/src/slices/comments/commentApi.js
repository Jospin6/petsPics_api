import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchPostComments = createAsyncThunk("comments/fetchPostComments", async (post_id) => {
    return await axios.get(`http://localhost:3001/comments/${post_id}`)
        .then(response => response.data)
        .catch(error => error.message)
})