import { Image } from "./Image"
import hearts from '../assets/images/hearts.png'
import speech from '../assets/images/speech.png'
import { Link } from 'react-router-dom'
import { handleDate } from '../helpers/petHelper'
import { createLike } from '../slices/posts/postApi'
import { useDispatch } from 'react-redux'

export const UserPostItem = ({ pet }) => {

    const dispatch = useDispatch()
    const handleLike = () => dispatch(createLike({ PostId: pet.id }))

    return <div className="w-full h-[150px] rounded-lg mt-2 flex">
        <div className="w-[30%] h-[150px]">
            {pet.image && pet.image.length > 0 && (
                <Image
                    src={`http://localhost:3001/public/images/${pet.image[0]?.url}`}
                    alt="pet image"
                    style="w-[100%] rounded-l-lg  h-[150px]" />
            )}
        </div>
        <div className="w-[70%] h-[150px] bg-gray-200 p-2 rounded-r-lg relative">
            <div className="flex justify-end">
                <span className="text-[12px] text-gray-500"> {handleDate(pet.createdAt)} </span>
            </div>
            <div className="text-[14px] text-gray-600 h-auto"> {pet.content} </div>
            <div className="flex justify-between pb-2 px-2 w-full absolute bottom-0 left-0">
                <div className="flex items-center pr-2">
                    <div className="flex items-center">
                        <button onClick={handleLike}>
                            <Image
                                src={hearts}
                                alt="heart"
                                style="w-[15px] h-[15px]" />
                        </button>
                        <span className="text-gray-500 text-[10px]"> {pet.likes?.length} </span>
                    </div>
                    <Link to={`/user/comment/${pet.id}`} className="ml-2">
                        <Image
                            src={speech}
                            alt="speech"
                            style="w-[15px] h-[15px]" />
                    </Link>
                </div>
                <div className="flex">
                    <button className="px-[10px] rounded-lg bg-red-500 mr-4 text-[15px] text-white">del</button>
                    <button className="px-[10px] rounded-lg bg-blue-500 text-[15px] text-white">edit</button>
                </div>
            </div>
        </div>
    </div>
}