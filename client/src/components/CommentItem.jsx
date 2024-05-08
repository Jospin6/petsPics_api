import { handleDate } from '../helpers/petHelper'

export const CommentItem = ({comment}) => {
    return <div className="w-full bg-gray-200 rounded-lg mb-2 px-2 text-[14px]">
        <div className="text-gray-800">
            {comment.content}
        </div>
        <div className="text-gray-500 flex justify-end text-[12px]">
            <span> {handleDate(comment.createdAt)} </span>
            <span className="ml-2">. {comment.User.userName}</span>
        </div>
        
    </div>
}