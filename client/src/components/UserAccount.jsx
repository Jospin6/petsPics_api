import { Link } from "react-router-dom"
import { UserPets } from "./UserPets"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchUserPosts } from "../slices/posts/postApi"
import { fetchCurrentUser } from '../slices/user/userApi'
import { PostItem } from "./PostItem"

export const UserAccount = () => {
    const { user } = useSelector(state => state.current)
    const { posts } = useSelector(state => state.userPosts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentUser())
        dispatch(fetchUserPosts())
    }, [dispatch])

    return <div>
        <div className="h-[50px] flex items-center bg-white px-2 justify-between">
            <span className="text-[20px] semi-bold"> {user.userName} </span> 
            <Link to="/user/infos">
                <span className="text-blue-600 text-[14px]">modify</span>
            </Link>
        </div>
        <UserPets/>
        <div>
            {
                posts.map(pet => (<PostItem  pet={pet} key={pet.id} />))
            }
        </div>
    </div>
}