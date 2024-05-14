import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { getcurrentUser } from '../helpers/userHelper'
import { fetchCurrentUser } from '../slices/user/userApi'
import { useEffect } from 'react'
import {SubmitFormBtn} from './SubmitFormBtn'
import * as Yup from 'yup'
import { updateUserName } from '../slices/user/userApi'
import { useNavigate } from 'react-router-dom'

export const ModifyUserName = () => {
    const currentUser = useSelector(getcurrentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchCurrentUser())
    }, [])

    const initialValues = {
        userName: ""
    }

    const validationschema = Yup.object({
        userName: Yup.string().required()
    })

    const onsubmit = (data) => {
        dispatch(updateUserName(data))
        navigate("/user")
    }

    return <Formik 
        initialValues={initialValues}  
        validationSchema={validationschema}
        onSubmit={onsubmit}>
        <Form>
            <Field
                name="userName"
                type="text"
                className="w-full h-[35px] border-[1px] border-gray-400 
                rounded-lg pl-2 outline-none text-black"
                placeholder="New user name"
            />
            <div className='flex justify-end'>
                <SubmitFormBtn text="Modify" className="px-[10px] "/>
            </div>
        </Form>
    </Formik>
}