import { FieldErrorMessage } from './FieldErrorMessage'
import { Field } from 'formik'

export const Select = ({labelText, fieldName, id, className, children}) => {
    return <div className={`mt-2 ${className}`}>
        <label htmlFor={id} className="block mb-[5px] bolder text-[16px]"> { labelText } </label>
        <FieldErrorMessage fieldName={fieldName}/>
        <Field name={fieldName} id={id} as="select" 
            className="w-full h-[35px] border-[1px] border-gray-400 
            rounded-lg pl-2 outline-none text-black">
                { children }
        </Field>
    </div>
}