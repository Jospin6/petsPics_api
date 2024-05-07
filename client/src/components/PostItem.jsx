import { Image } from "./Image"
import pets from '../assets/images/pets.jpg'
import hearts from '../assets/images/hearts.png'
import speech from '../assets/images/speech.png'
import { Link } from 'react-router-dom'
import { handleDate } from '../helpers/petHelper'

export const PostItem = ({showCommentIcon, pet}) => {
    return <div className="mt-2 bg-white h-auto rounded-lg w-[100%] small-shadow">
        <div className="w-[100%]">
            <Image 
                src={pets} 
                alt="pet image" 
                style="w-[100%] rounded-t-lg  h-[300px]"/>
        </div>
        <div className="py-[5px] px-[10px]">
            <div className="flex justify-between">
                <span className="text-[14px] semi-bold">User name</span>
                <span className="text-[12px] text-gray-400"> {handleDate(pet.createdAt)} </span>
            </div>
            <div className="text-[14px] text-gray-500"> {pet.content} </div>
            <div className="flex justify-between">
                <button>
                    <Image 
                    src={hearts} 
                    alt="heart" 
                    style="w-[20px] h-[20px]"/>
                </button>
                <Link to="/user/comment" className={showCommentIcon}>
                    <Image 
                    src={speech} 
                    alt="speech" 
                    style="w-[20px] h-[20px]"/>
                </Link>
            </div>
        </div>
    </div>
}