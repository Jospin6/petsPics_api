
export const Checkbox = (props) => {
    const { checked, onchange, id, labelText } = props
    return <div className="mt-[5px]">
        <input 
            type="checkbox" 
            checked={checked} 
            onChange={onchange} 
            id={id} 
            className="border-[1px] mr-[2px] border-gray-400 rounded-lg 
            outline-none"/>
        <label htmlFor={id} className="text-[14px] text-gray-500"> {labelText} </label>
    </div>
}