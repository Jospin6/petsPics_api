import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import petReducer from './pets/petSlice'
import postReducer from './posts/postSlice'
import userPetReducer from './pets/userPetSlice'
import commentsReducer from './comments/commentSlice'
import singlePostReducer from './posts/singlePostSlice'
import likeReducer from './likes/likeSlise'
import currentReducer from './user/currentSlice'
import userPostsReducer from './posts/userPostsSlice'
import singlePetReducer from './pets/singlePetSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        pet: petReducer,
        post: postReducer,
        userPet: userPetReducer,
        comments: commentsReducer,
        singlePost: singlePostReducer,
        likes: likeReducer,
        current: currentReducer,
        userPosts: userPostsReducer,
        singlePet: singlePetReducer
    }
})

export default store