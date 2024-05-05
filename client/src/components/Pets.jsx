import { PostItem } from "./PostItem"
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../helpers/petHelper'
import { fetchPosts } from '../slices/posts/postApi'
import { useEffect } from "react"

export const Pets = () => {
    const posts = useSelector(getPosts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return <div>
        {
            posts.map(pet => (<PostItem pet={pet} key={pet.id}/>))
        }
    </div>
}