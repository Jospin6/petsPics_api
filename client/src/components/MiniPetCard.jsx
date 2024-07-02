import { Image } from "./Image"
import { getYearFormat } from "../helpers/petHelper"
export const MiniPetCard = ({ pet }) => {
    return <div className="w-[150px] h-[200px] mt-[5px] mr-2 bg-white rounded-lg small-shadow">
        <div className="w-full h-[150px] bg-red-300 rounded-t-lg relative">
            <Image
                src={`http://localhost:3001/public/images/${pet.image}`}
                alt="pet image"
                style="w-[100%] rounded-t-lg  h-[150px]" />
            <div className="flex justify-between w-full absolute top-0 letf-0">
                <button className="bg-red-500 text-white text-[12px] p-[5px] rounded-full">del</button>
                <button className="bg-blue-500 text-white text-[12px] p-[5px] rounded-full">edit</button>
            </div>
        </div>
        <div className="pl-2">
            <div>{pet.petName}</div>
            <div className="text-[12px] text-gray-500"> {getYearFormat(pet.age)} </div>
        </div>
    </div>
}