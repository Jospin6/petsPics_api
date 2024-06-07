export const Checkbox = (props) => {
    const { checked, id, labelText, onchange, isChecked } = props
    return <div className="mt-[5px]">
        <input 
            type="checkbox" 
            name={checked}
            id={id}
            onChange={onchange}
            checked={isChecked}
            className="border-[1px] mr-[2px] border-gray-400 rounded-lg 
            outline-none"/>
        <label htmlFor={id} className="text-[14px] text-gray-500"> {labelText} </label>
    </div>
}