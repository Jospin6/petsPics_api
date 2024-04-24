import { useDispatch, useSelector } from 'react-redux'
import { getUsers, currentUser } from '../helpers/userHelper'
import { fetchUsers } from '../slices/user/userApi'
import { useEffect } from 'react'
import { Navbar } from '../components/Navbar';
import { PostItem } from './PostItem';

export const Home = () => {
    const users = useSelector(getUsers)
    const activeUser = useSelector(currentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return <div>
        <Navbar />
        <div className='pt-[50px] w-full bg-gray-100 pb-4'>
            <div className='w-[40%] m-auto min-h-[400px] h-auto'>
                <PostItem/>
                <PostItem/>
            </div>
            {/* <div>
                user name: {activeUser.userName}
            </div>
            {users.map(user => (
                <div className='text-red-500' key={user.id}> {user.userName} </div>
            ))
            } */}
        </div>
    </div>
}