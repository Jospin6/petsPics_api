import { Input } from '../components/Input'
import { useState } from 'react'
import { SubmitFormBtn } from '../components/SubmitFormBtn'
import { FormFrame } from '../components/FormFrame'


export const Signin = () => {

    const [userName, setUserName] = useState("")
    const [password, setpassword] = useState("")

    const handleUserName = (e) => setUserName(e.target.value)
    const handlePassword = (e) => setpassword(e.target.value)

    return <div className="w-full h-[100vh] flex items-center justify-center">
        <FormFrame
            formTitle="Sign in to petsPics"
            formDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta 
            unde sint qui, quis aut illo vitae velit."
            linkText="&#8592; LogIn"
            link_path="/">
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
                <SubmitFormBtn text="Sign In" />
            </form>
        </FormFrame>
    </div>
}