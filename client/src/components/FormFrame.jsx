import cat from '../assets/images/cat.jpg'
import { Image } from './Image'

export const FormFrame = (props) => {
    const {formTitle, formDescription, children} = props
    return <div className="w-[60%] h-[500px] grid grid-cols-8 rounded-lg shadow">
        <div className="col-span-4 h-full p-4 rounded-l-lg flex items-center justify-center">
            <div className="w-[80%] h-[300px] relative">
                <div className="text-lg semi-bold">
                    { formTitle }
                </div>
                <div className="text-[12px] text-gray-500">
                    { formDescription }
                </div>
                <div className='mt-6'>
                    { children }
                </div>
            </div>
        </div>
        <div className="col-span-4 f-full">
            <Image src={cat} alt="cat" style="w-full h-[500px] rounded-r-lg object-cover" />
        </div>
</div>
}