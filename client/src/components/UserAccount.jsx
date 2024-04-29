import { MiniPetCard } from "./MiniPetCard"
import { PostItem } from "./PostItem"

export const UserAccount = () => {
    return <div>
        <div className="h-[50px] flex items-center bg-white px-2 justify-between">
            <span className="text-[20px] semi-bold">user name</span> 
            <span className="text-blue-600 text-[14px]">modify</span>
        </div>
        <div className="flex">
            <MiniPetCard/>
        </div>
        <div>
            <PostItem/>
        </div>
    </div>
}