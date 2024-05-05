import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import petReducer from './pets/petSlice'
import postReducer from './posts/postSlice'



export const store = configureStore({
    reducer: {
        user: userReducer,
        pet: petReducer,
        post: postReducer
    }
})

export default store