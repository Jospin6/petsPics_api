import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import petReducer from './pets/petSlice'



export const store = configureStore({
    reducer: {
        user: userReducer,
        pet: petReducer
    }
})

export default store