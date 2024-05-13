import { Formik, Form } from 'formik'
import { Input } from './Input'
import { SubmitFormBtn } from './SubmitFormBtn'
import { useDispatch, useSelector } from 'react-redux'
import {getcurrentUser} from '../helpers/userHelper'
import { fetchCurrentUser } from '../slices/user/userApi'
import { useEffect, useState } from 'react'
import { Button } from './Button'

export const ModifyUserName = () => {
    const currentUser = useSelector(getcurrentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentUser())
    }, [])

    const [userName, setUserName] = useState(`${currentUser.userName}`)
    const handleUserName = (e) => setUserName(e.target.value) 
    const modifyUserName = () => {
        if (userName !== "") {
            
        }
    }

    return <div>
        <input 
            type="text" 
            value={userName} 
            onChange={handleUserName} 
            className="w-full h-[35px] border-[1px] border-gray-400 
            rounded-lg pl-2 outline-none text-black" />
        <Button text="Modify" className="bg-blue-500 mt-2 float-end" onclick={modifyUserName}/>
    </div>
}