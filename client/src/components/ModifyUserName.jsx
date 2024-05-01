import { Formik, Form } from 'formik'
import { Input } from './Input'
import { SubmitFormBtn } from './SubmitFormBtn'

export const ModifyUserName = () => {
    return <Formik>
        <Form>
            <Input
                labelText="User name"
                id="userName"
                type="text"
                fieldName="userName"
                placeholder="Enter your name"
            />
            <div className='flex justify-end'>
                <SubmitFormBtn text="Modify" className="w-[150px]" />
            </div>
        </Form>
    </Formik>
}