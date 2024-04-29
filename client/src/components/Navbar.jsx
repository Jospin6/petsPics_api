import add from '../assets/images/add.png'
import male_user from '../assets/images/male_user.png'
import hearts from '../assets/images/hearts.png'
import exit from '../assets/images/exit.png'
import { Image } from './Image'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    let navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('accessToken')
        navigate("/")
    }

    return <div className="w-full h-[50px] border-b-[1px] flex 
            justify-between border-gray-300 fixed z-10 bg-white">
        <div className="pl-4 flex items-center semi-bold">
            <Link to="/user">
                petsPics
            </Link>
        </div>
        <div className="flex items-center justify-between pr-[20px] w-[25%]">
            <div className='flex'>
                <Link to="/user/newPet" className='mr-6'>
                    <Image src={add} alt="Add pet icon" style="w-[25px] h-[25px]"/>
                </Link>
                <Link to="/user/likes" className='mr-6'>
                    <Image src={hearts} alt="Likes" style="w-[25px] h-[25px]"/>
                </Link>
                <Link to="/user/account" className='mr-2'>
                    <Image src={male_user} alt="User profil" style="w-[25px] h-[25px]"/>
                </Link>
            </div>
            <button onClick={logout}>
                <Image src={exit} alt="Logout" style="w-[25px] h-[25px]"/>
            </button>
        </div>
    </div>
}