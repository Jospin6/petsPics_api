import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import petReducer from './pets/petSlice'
import postReducer from './posts/postSlice'
import userPetReducer from './pets/userPetSlice'
import commentsReducer from './comments/commentSlice'
import singlePostReducer from './posts/singlePostSlice'
import likeReducer from './likes/likeSlise'
import currentReducer from './user/currentSlice'



export const store = configureStore({
    reducer: {
        user: userReducer,
        pet: petReducer,
        post: postReducer,
        userPet: userPetReducer,
        comments: commentsReducer,
        singlePost: singlePostReducer,
        likes: likeReducer,
        current: currentReducer
    }
})

export default store