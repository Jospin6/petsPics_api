import { PostForm } from './PostForm'
import { UserPets } from './UserPets'



export const PostPet = () => {
    

    return <div className="text-black">
        <div className="w-full h-[210px] mt-4">
            <UserPets/>
        </div>
        <div className="w-full h-[250px] rounded-lg bg-white mt-4 p-2">
            <div className="text-lg arial semi-bold">Post your pet</div>
            <PostForm />
        </div>
    </div>
}