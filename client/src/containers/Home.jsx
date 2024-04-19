import { useDispatch, useSelector } from 'react-redux'
import { getUsers, fetchUsers } from '../slices/userSlice'
import { useEffect } from 'react'

export const Home = () => {
    const users = useSelector(getUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return <div>
        {
            users.map(user => (
                <div className='text-red-500' key={user.id}> {user.userName} </div>
            ))
        }
    </div>
}