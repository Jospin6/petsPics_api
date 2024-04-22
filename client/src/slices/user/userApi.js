import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const userRegistration = createAsyncThunk("user/userRegistration", async (data) => {
    return await axios.post("http://localhost:3001/users", data).then(response => {
        console.log("It worked")
    })
})

export const userLogin = createAsyncThunk("user/userLogin", async (data) => {
    return await axios.post("http://localhost:3001/users/login", data).then(response => {
        console.log("It worked")
    })
})

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    return await axios.get("http://localhost:3001/users")
    .then(response => response.data)
    .catch(error => error.message)
})