import { Formik, Form } from 'formik'
import { Input } from './Input'
import { SubmitFormBtn } from './SubmitFormBtn'
import * as Yup from 'yup'
import { updatePassword } from '../slices/user/userApi'
import { useDispatch } from 'react-redux'

export const ChangePassword = () => {
    const dispatch = useDispatch()

    const initialValues = {
        oldPassword: "",
        newPassword: ""
    }
    
    const validationSchema = Yup.object({
        oldPassword: Yup.string().required(),
        newPassword: Yup.string().required()
    })
    
    const submit = (data, {resetForm}) => {
        dispatch(updatePassword(data))
        resetForm()
    }
    return <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}>
        <Form>
            <Input
                labelText="Old password"
                id="password"
                type="password"
                fieldName="oldPassword"
                placeholder="Enter your old password"
            />
            <Input
                labelText="New password"
                id="newpassword"
                type="password"
                fieldName="newPassword"
                placeholder="Enter your new password"
            />
            <div className='flex justify-end'>
                <SubmitFormBtn text="Change password" className="w-[150px]" />
            </div>
        </Form>
    </Formik>
}