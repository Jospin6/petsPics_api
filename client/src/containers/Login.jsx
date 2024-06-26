import { Input } from '../components/Input'
import { SubmitFormBtn } from '../components/SubmitFormBtn'
import { Checkbox } from '../components/Checkbox'
import { Link, useNavigate } from 'react-router-dom'
import { AuthFrame } from '../components/AuthFrame'
import { initialValues, validationSchema } from '../helpers/userHelper'
import { userLogin } from '../slices/user/userApi'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'


export const Login = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const initialLoginValues = { ...initialValues, checked: false }

    const formik = useFormik({
        initialValues: initialLoginValues,
        validationSchema,
        onSubmit: (data, { resetForm }) => {
            dispatch(userLogin(data))
            resetForm()
            navigate("/user")
        }
    })

    return <div className="w-full h-[100vh] flex items-center justify-center">
        <AuthFrame
            formTitle="Login to petsPics"
            formDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta 
            unde sint qui, quis aut illo vitae velit."
            linkText="Sign In &#8594;"
            link_path="/registration"
        >
            <form onSubmit={formik.handleSubmit}>
                <Input
                    labelText="User name"
                    id="userName"
                    type="text"
                    fieldName="userName"
                    onchange={formik.handleChange}
                    value={formik.values.userName}
                    placeholder="Enter your name"
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
                <div className='flex justify-between'>
                    <Checkbox
                        checked="checked"
                        id="remember-me"
                        labelText="Remember me"
                        onchange={formik.handleChange}
                        isChecked={formik.values.checked}
                    />
                    <Link to={"#"} className='mt-[5px] text-[14px] text-gray-500 
                                hover:text-blue-600'>
                        Forgot password
                    </Link>
                </div>
                <SubmitFormBtn text="Login" className="w-full" />
            </form>
        </AuthFrame>
    </div>
}