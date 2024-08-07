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

export const fetchUserPets = createAsyncThunk("userPet/fetchUserPets", async () => {
    return await axios.get("http://localhost:3001/userPet", {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
    .then(response => response.data)
    .catch(error => error.message)
})

export const fetchSinglePet = createAsyncThunk("singlePet/fetchSinglePet", async (id) => {
    return await axios.get(`http://localhost:3001/pets/${id}`)
        .then(response => response.data)
        .catch(error => error.message)
})

export const updatePet = createAsyncThunk("singlePet/updatePet", async (id,data) => {
    return await axios.put(`http://localhost:3001/pets/${id}`, data, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
    .then(response => {
        console.log(response.data)
    })
})

export const deletePet = createAsyncThunk("singlePet/deletePet", async (id) => {
    return await axios.delete(`http://localhost:3001/pets/${id}`, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
})