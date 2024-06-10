export const Input = (props) => {
    const { labelText, id, fieldName, type, placeholder, onchange, value } = props
    return <div className="mt-2">
        <label htmlFor={id} className="block mb-[5px] bolder text-[16px]"> {labelText} </label>
        <input
            id={id}
            name={fieldName}
            type={type}
            placeholder={placeholder}
            className="w-full h-[35px] border-[1px] border-gray-400 
                    rounded-lg pl-2 outline-none text-black"
            onChange={onchange}
            value={value} />
    </div>
}