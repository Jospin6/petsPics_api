import { Input } from '../components/Input'
import { SubmitFormBtn } from '../components/SubmitFormBtn'
import { FormFrame } from '../components/FormFrame'
import { useDispatch } from 'react-redux'
import { userRegistration } from '../slices/user/userApi'
import { useNavigate } from "react-router-dom"
import {initialValues, validationSchema} from '../helpers/userHelper'


export const Signin = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const submit = (data, { resetForm }) => {
        dispatch(userRegistration(data))
        resetForm()
        navigate("/user")
    }

    return <div className="w-full h-[100vh] flex items-center justify-center">
        <FormFrame
            formTitle="Sign in to petsPics"
            formDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta 
            unde sint qui, quis aut illo vitae velit."
            linkText="&#8592; LogIn"
            link_path="/"
            initialValue={initialValues}
            onsubmit={submit}
            validationschema={validationSchema}>

            <Input
                labelText="User name"
                id="userName"
                type="text"
                fieldName="userName"
                placeholder="Enter your name"
            />
            <Input
                labelText="Password"
                id="password"
                type="password"
                fieldName="password"
                placeholder="Enter your password"
            />
            <SubmitFormBtn text="Sign In" />
        </FormFrame>
    </div>
}