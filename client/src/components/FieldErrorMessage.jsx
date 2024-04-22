import { ErrorMessage } from 'formik'

export const FieldErrorMessage = ({ fieldName }) => {
    return <ErrorMessage name={fieldName} component="span" className='text-red-500' />
}