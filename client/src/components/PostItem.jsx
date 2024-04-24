import { Image } from "./Image"
import pets from '../assets/images/pets.jpg'
import hearts from '../assets/images/hearts.png'
import speech from '../assets/images/speech.png'

export const PostItem = () => {
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
                <span className="text-[12px] text-gray-400">post date</span>
            </div>
            <div className="text-[14px] text-gray-500">Decription</div>
            <div className="flex justify-between">
                <Image 
                src={hearts} 
                alt="heart" 
                style="w-[20px] h-[20px]"/>
                <Image 
                src={speech} 
                alt="speech" 
                style="w-[20px] h-[20px]"/>
            </div>
        </div>
    </div>
}