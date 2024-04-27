import { FieldErrorMessage } from './FieldErrorMessage'

export const Select = ({labelText, fieldName, id, className}) => {
    return <div className={`mt-2 ${className}`}>
        <label htmlFor={id} className="block mb-[5px] bolder text-[16px]"> { labelText } </label>
        <FieldErrorMessage fieldName={fieldName}/>
        <select id={id} name={fieldName} className="w-full h-[35px] border-[1px] border-gray-400 
            rounded-lg pl-2 outline-none text-black">
            <option value="val1"> Value one </option>
            <option value="val2"> Value two </option>
            <option value="val3"> Value three </option>
        </select>
    </div>
}