import { Link } from 'react-router-dom'
import cat from '../assets/images/cat.jpg'
import { Image } from './Image'

export const AuthFrame = (props) => {
    const {
        formTitle, 
        formDescription,
        link_path, 
        linkText, 
        children
    } = props
    return <div className="lg:w-[60%] md:w-[80%] h-[500px] mx-2 md:px-0 md:grid md:grid-cols-8 rounded-lg shadow">
        <div className="md:col-span-4 h-full p-4 rounded-l-lg flex items-center justify-center">
            <div className="md:w-[80%] w-[95%] min-h-[300px] h-auto relative">
                <div className="text-lg semi-bold">
                    { formTitle }
                </div>
                <div className="text-[12px] text-gray-500">
                    { formDescription }
                </div>
                <div className='mt-6'>
                    { children }
                </div>
                <div className='mt-6 flex justify-center'>
                    <Link to={link_path}> {linkText} </Link>
                </div>
            </div>
        </div>
        <div className="md:col-span-4 f-full hidden md:block">
            <Image 
                src={cat} 
                alt="cat" 
                style="w-full h-[500px] rounded-r-lg object-cover" />
        </div>
</div>
}