import { Input } from '../components/Input'
import { useState } from 'react'
import { SubmitFormBtn } from '../components/SubmitFormBtn'
import { Checkbox } from '../components/Checkbox'
import { Link } from 'react-router-dom'
import { FormFrame } from '../components/FormFrame'


export const Login = () => {

    const [userName, setUserName] = useState("")
    const [password, setpassword] = useState("")
    const [remember, setremember] = useState(false)

    const handleUserName = (e) => setUserName(e.target.value)
    const handlePassword = (e) => setpassword(e.target.value)
    const toggleRemember = () => setremember(!remember)

    return <div className="w-full h-[100vh] flex items-center justify-center">
        <FormFrame
            formTitle="Login to petsPics"
            formDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta 
            unde sint qui, quis aut illo vitae velit.">
            <form method="post">
                <Input
                    labelText="User name"
                    id="userName"
                    type="text"
                    value={userName}
                    onchange={handleUserName}
                    placeholder="Enter your name"
                />
                <Input
                    labelText="Password"
                    id="password"
                    type="password"
                    value={password}
                    onchange={handlePassword}
                    placeholder="Enter your password"
                />
                <div className='flex justify-between'>
                    <Checkbox
                        checked={remember}
                        onchange={toggleRemember}
                        id="remember-me"
                        labelText="Remember me"
                    />
                    <Link to={"#"} className='mt-[5px] text-[14px] text-gray-500 
                                hover:text-blue-600'>
                        Forgot password
                    </Link>
                </div>
                <SubmitFormBtn text="Login" />
            </form>
        </FormFrame>
    </div>
}