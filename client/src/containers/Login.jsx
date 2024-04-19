import cat from '../assets/images/cat.jpg'
import { Image } from '../components/Image'
import { Input } from '../components/Input'
import {useState} from 'react'
import { SubmitFormBtn } from '../components/SubmitFormBtn'
import { Checkbox } from '../components/Checkbox'
import { Link } from 'react-router-dom'




export const Login = () => {

    const [userName, setUserName] = useState("")
    const [password, setpassword] = useState("")
    const [remember, setremember] = useState(false)

    const handleUserName = (e) => setUserName(e.target.value)
    const handlePassword = (e) => setpassword(e.target.value)
    const toggleRemember = () => setremember(!remember)

    return <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="w-[60%] h-[500px] grid grid-cols-8 rounded-lg shadow">
            <div className="col-span-4 h-full p-4 rounded-l-lg flex items-center justify-center">
                <div className="w-[80%] h-[300px] relative">
                    <div className="text-lg semi-bold">
                        Login to petsPics
                    </div>
                    <div className="text-[12px] text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta 
                        unde sint qui, quis aut illo vitae velit.
                    </div>
                    <div className='mt-6'>
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
                            <SubmitFormBtn text="Login"/>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-span-4 f-full">
                <Image src={cat} alt="cat" style="w-full h-[500px] rounded-r-lg object-cover" />
            </div>
        </div>
    </div>
}