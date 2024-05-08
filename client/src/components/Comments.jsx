import { PostItem } from "./PostItem"
import { Image } from './Image'
import paper_plane from '../assets/images/paper_plane.png'
import { CommentItem } from "./CommentItem"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchPostComments, createComment } from '../slices/comments/commentApi'
import { useEffect, useState } from "react"
import { getComments } from '../helpers/commentHelper'

export const Comments = () => {
    const { id } = useParams()
    const comments = useSelector(getComments)
    const dispatch = useDispatch()
    const [comment, setComment] = useState("")
    const handleComment = (e) => setComment(e.target.value)

    const postComment = () => {
        if (comment != "") {
            dispatch(createComment({post_id: id, content: comment}))
            setComment("")
        }
    }

    useEffect(() => {
        dispatch(fetchPostComments(id))
    }, [dispatch])

    return <div className="mt-2">
        {/* <PostItem showCommentIcon="hidden"/> */}
        <div className="h-[40px] rounded-lg bg-white mt-2 flex justify-between items-center">
            <input type="text" value={comment} onChange={handleComment} className="w-[94%] h-[35px] border-[1px] border-gray-400 
            rounded-lg pl-2 outline-none text-black" placeholder="Enter your comment" />
            <button onClick={postComment}>
                <Image src={paper_plane} alt="send" style="w-[25px] h-[25px] " />
            </button>
        </div>
        <div className="bg-white rounded-lg mt-2 h-auto p-2">
            {
                comments.map(comment => (<CommentItem comment={comment} key={comment.id} />))
            }
        </div>
    </div>
}