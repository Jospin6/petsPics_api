export const InputFile = (props) => {
    const { labelText, onchange } = props
    return <div className="mt-2">
        <label htmlFor="image" className="block mb-[5px] bolder text-[16px]"> {labelText} </label>
        <input
            type="file"
            id="image"
            className="w-full h-[35px] border-[1px] border-gray-400 
                    rounded-lg pl-2 outline-none text-black"
            accept='image/*'
            onChange={onchange} />
    </div>
}