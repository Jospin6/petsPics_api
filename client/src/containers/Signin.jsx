import { Input } from '../components/Input'
import { SubmitFormBtn } from '../components/SubmitFormBtn'
import { AuthFrame } from '../components/AuthFrame'
import { useDispatch } from 'react-redux'
import { userRegistration } from '../slices/user/userApi'
import { useNavigate } from "react-router-dom"
import {initialValues, validationSchema} from '../helpers/userHelper'
import { useFormik } from 'formik'


export const Signin = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (data, { resetForm }) => {
            dispatch(userRegistration(data))
            resetForm()
            navigate("/user")
        }
    })

    return <div className="w-full h-[100vh] flex items-center justify-center">
        <AuthFrame
            formTitle="Sign in to petsPics"
            formDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta 
            unde sint qui, quis aut illo vitae velit."
            linkText="&#8592; LogIn"
            link_path="/">
            <form onSubmit={formik.handleSubmit}>
                <Input
                    labelText="User name"
                    id="userName"
                    type="text"
                    fieldName="userName"
                    placeholder="Enter your name"
                    onchange={formik.handleChange}
                    value={formik.values.userName}
                />
                {formik.errors.userName && formik.touched.userName && (
                    <div className="text-red-500">{formik.errors.userName}</div>
                )}
                <Input
                    labelText="Password"
                    id="password"
                    type="password"
                    fieldName="password"
                    placeholder="Enter your password"
                    onchange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && (
                    <div className="text-red-500">{formik.errors.password}</div>
                )}
                <SubmitFormBtn text="Sign In" className="w-full" />
            </form>
        </AuthFrame>
    </div>
}