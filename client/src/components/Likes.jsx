import { PostItem } from "./PostItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersLikedPost } from '../slices/likes/likeApi'
import { getUsersLikes } from '../helpers/likeHelper'
import { useEffect } from "react"

export const Likes = () => {
    const likedPosts = useSelector(getUsersLikes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersLikedPost())
    }, [dispatch])

    return <div>
        {
            likedPosts.map((like, key) => (<PostItem key={key} pet={like.Post}/>))
        }
    </div>
}