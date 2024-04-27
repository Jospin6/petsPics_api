import { PostItem } from "./PostItem"
import { Image } from './Image'
import paper_plane from '../assets/images/paper_plane.png'
import { CommentItem } from "./CommentItem"

export const Comments = () => {
    return <div className="mt-2">
        <PostItem showCommentIcon="hidden"/>
        <div className="h-[40px] rounded-lg bg-white mt-2 flex justify-between items-center">
            <input type="text" className="w-[94%] h-[35px] border-[1px] border-gray-400 
            rounded-lg pl-2 outline-none text-black" placeholder="Enter your comment"/>
            <Image src={paper_plane} alt="send" style="w-[25px] h-[25px] "/>
        </div>
        <div className="bg-white rounded-lg mt-2 h-auto">
            <CommentItem/>
            <CommentItem/>
        </div>
    </div>
}