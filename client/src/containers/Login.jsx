import cat from '../assets/images/cat.jpg'

export const Login = () => {
    return <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="w-[60%] h-[500px] grid grid-cols-8 rounded-lg">
            <div className="col-span-4 h-full p-4 bg-green-600 rounded-l-lg">login</div>
            <div className="col-span-4 f-full">
                <img src={cat} alt="cat" className="w-full h-[500px] rounded-r-lg object-cover" />
            </div>
        </div>
    </div>
}