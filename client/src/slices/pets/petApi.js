import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPets = createAsyncThunk("pet/fetchPets", async () => {
    return await axios.get("http://localhost:3001/pets")
        .then(response => response.data)
        .catch(error => error.message)
})