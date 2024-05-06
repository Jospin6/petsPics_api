import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const createPet = createAsyncThunk("pet/createPet", async (data) => {
    return await axios.post("http://localhost:3001/pets", data, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
    .then(response => {
        console.log(response.data)
    })
})

export const fetchPets = createAsyncThunk("pet/fetchPets", async () => {
    return await axios.get("http://localhost:3001/pets")
        .then(response => response.data)
        .catch(error => error.message)
})

export const fetchUserPets = createAsyncThunk("pet/fetchUserPets", async () => {
    return await axios.get("http://localhost:3001/pets/me", {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
})