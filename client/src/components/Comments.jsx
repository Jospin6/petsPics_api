import { PostItem } from "./PostItem"

export const Comments = () => {
    return <div className="mt-2">
        <PostItem showCommentIcon="hidden"/>
        <div className="h-[40px] rounded-lg bg-white mt-2">
            commentfield
        </div>
        <div className="bg-white rounded-lg mt-2 h-[200px] p-2">
            comments
        </div>
    </div>
}