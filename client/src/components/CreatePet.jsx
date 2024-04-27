import { Button } from "./Button"
import { MiniPetCard } from "./MiniPetCard"
import { NewPetForm } from "./NewPetForm"
import { Link } from 'react-router-dom'

export const CreatePet = () => {

    return <div className="text-black">
        <div className="w-full h-[320px] rounded-lg bg-white mt-4 p-2">
            <div className="text-lg arial semi-bold">Add new pet</div>
            <NewPetForm/>
        </div>
        <div className="w-full h-[250px] mt-4">
            <div className="p-2 arial flex justify-between rounded-lg bg-white">
                <span className="text-lg semi-bold">Your pets</span>
                <Link to="/user/post">
                    <Button text="Post pet" className="bg-green-500" />
                </Link>
            </div>
            <div className="w-full flex">
                <MiniPetCard/>
            </div>
        </div>
    </div>
}