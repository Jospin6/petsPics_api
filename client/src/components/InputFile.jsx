import { Field } from 'formik'
import { FieldErrorMessage } from './FieldErrorMessage'

export const InputFile = (props) => {
    const {labelText, id, onchange, name} = props
    return <div className="mt-2">
        <label htmlFor={id} className="block mb-[5px] bolder text-[16px]"> { labelText } </label>
        <input type="file" id={id} name={name}
         className="w-full h-[35px] border-[1px] border-gray-400 
         rounded-lg pl-2 outline-none text-black" 
         onChange={onchange}/>
    </div>
}