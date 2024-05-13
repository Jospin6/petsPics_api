import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { getcurrentUser } from '../helpers/userHelper'
import { fetchCurrentUser } from '../slices/user/userApi'
import { useEffect } from 'react'
import {SubmitFormBtn} from './SubmitFormBtn'
import * as Yup from 'yup'

export const ModifyUserName = () => {
    const currentUser = useSelector(getcurrentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentUser())
    }, [])

    const initialValues = {
        userName: currentUser.userName
    }

    const validationschema = Yup.object({
        userName: Yup.string().required()
    })

    const onsubmit = () => {

    }

    return <Formik 
        initialValues={initialValues} 
        onSubmit={onsubmit} 
        validationSchema={validationschema}>
        <Form>
            <Field
                name="userName"
                value={initialValues.userName}
                type="text"
                className="w-full h-[35px] border-[1px] border-gray-400 
                rounded-lg pl-2 outline-none text-black"
            />
            <div className='flex justify-end'>
                <SubmitFormBtn text="Modify" className="px-[10px] "/>
            </div>
        </Form>
    </Formik>
}