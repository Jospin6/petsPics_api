export const Select = ({ labelText, fieldName, id, onchange, className, value, children }) => {
    return <div className={`mt-2 ${className}`}>
        <label htmlFor={id} className="block mb-[5px] bolder text-[16px]"> {labelText} </label>
        <select
            name={fieldName}
            id={id}
            className="w-full h-[35px] border-[1px] border-gray-400 
                    rounded-lg pl-2 outline-none text-black"
            onChange={onchange}
            value={value}>
                { children }
        </select>
    </div>
}