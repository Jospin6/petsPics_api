import { Formik, Form, useFormik } from 'formik'
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

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (data, { resetForm }) => {
            dispatch(updatePassword(data))
            resetForm()
        }
    })
    return <form onSubmit={formik.handleSubmit}>
        <Input
            labelText="Old password"
            id="password"
            type="password"
            fieldName="oldPassword"
            placeholder="Enter your old password"
            onchange={formik.handleChange}
            value={formik.values.oldPassword}
        />
        {formik.errors.oldPassword && formik.touched.oldPassword && (
            <div className="text-red-500">{formik.errors.oldPassword}</div>
        )}
        <Input
            labelText="New password"
            id="newpassword"
            type="password"
            fieldName="newPassword"
            placeholder="Enter your new password"
            onchange={formik.handleChange}
            value={formik.values.newPassword}
        />
        {formik.errors.newPassword && formik.touched.newPassword && (
            <div className="text-red-500">{formik.errors.newPassword}</div>
        )}
        <div className='flex justify-end'>
            <SubmitFormBtn text="Change password" className="w-[150px]" />
        </div>
    </form>
}