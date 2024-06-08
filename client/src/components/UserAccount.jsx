import { Link } from "react-router-dom"
import { UserPets } from "./UserPets"
import { useSelector } from "react-redux"

export const UserAccount = () => {
    const { user } = useSelector(state => state.current)
    return <div>
        <div className="h-[50px] flex items-center bg-white px-2 justify-between">
            <span className="text-[20px] semi-bold"> {user.userName} </span> 
            <Link to="/user/infos">
                <span className="text-blue-600 text-[14px]">modify</span>
            </Link>
        </div>
        <UserPets/>
        <div>
            {/* <PostItem/> */}
        </div>
    </div>
}