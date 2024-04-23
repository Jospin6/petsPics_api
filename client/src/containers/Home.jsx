import { useDispatch, useSelector } from 'react-redux'
import { getUsers, currentUser } from '../helpers/userHelper'
import { fetchUsers } from '../slices/user/userApi'
import { useEffect } from 'react'

export const Home = () => {
    const users = useSelector(getUsers)
    const activeUser = useSelector(currentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return <div>
        <div>
            user name: {activeUser.userName}
        </div>
        {   users.map(user => (
                <div className='text-red-500' key={user.id}> {user.userName} </div>
            ))
        }
    </div>
}