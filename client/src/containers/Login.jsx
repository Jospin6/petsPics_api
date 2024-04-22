import { Input } from '../components/Input'
import { SubmitFormBtn } from '../components/SubmitFormBtn'
import { Checkbox } from '../components/Checkbox'
import { Link } from 'react-router-dom'
import { FormFrame } from '../components/FormFrame'
import * as Yup from 'yup'


export const Login = () => {

    const initialValues = {
        userName: "",
        password: "",
        checked: false
    }

    const validationSchema = Yup.object({
        userName: Yup.string().required(),
        password: Yup.string().required(),
    })

    const submit = () => {
        console.log("sent")
    }

    return <div className="w-full h-[100vh] flex items-center justify-center">
        <FormFrame
            formTitle="Login to petsPics"
            formDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta 
            unde sint qui, quis aut illo vitae velit."
            linkText="Sign In &#8594;"
            link_path="/registration"
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
            <div className='flex justify-between'>
                <Checkbox
                    checked="checked"
                    id="remember-me"
                    labelText="Remember me"
                />
                <Link to={"#"} className='mt-[5px] text-[14px] text-gray-500 
                                hover:text-blue-600'>
                    Forgot password
                </Link>
            </div>
            <SubmitFormBtn text="Login" />
        </FormFrame>
    </div>
}