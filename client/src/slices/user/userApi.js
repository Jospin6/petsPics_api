import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const userRegistration = createAsyncThunk("user/userRegistration", async (data) => {
    return await axios.post("http://localhost:3001/users", data).then(response => {
        localStorage.setItem("accessToken", response.data)
    })
})

export const userLogin = createAsyncThunk("user/userLogin", async (data) => {
    return await axios.post("http://localhost:3001/users/login", data).then(response => {
        if (response.data.error) {
            console.log(response.data.error)
        } else {
            localStorage.setItem("accessToken", response.data)
        }
    })
})

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    return await axios.get("http://localhost:3001/users", {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
    .then(response => response.data)
    .catch(error => error.message)
})

export const fetchCurrentUser = createAsyncThunk("current/fetchCurrentUser", async () => {
    return await axios.get("http://localhost:3001/users/auth", {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
    .then(response => response.data)
    .catch(error => error.message)
})

export const updateUserName = createAsyncThunk("user/updateUserName", async (data) => {
    return await axios.put("http://localhost:3001/users", data, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    }).then(response => {
        console.log(response.data.message)
    })
    .catch(error => error.message)
})