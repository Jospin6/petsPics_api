import { Formik, Form } from 'formik'
import { Input } from './Input'
import { SubmitFormBtn } from './SubmitFormBtn'

export const ChangePassword = () => {
    return <Formik>
        <Form>
            <Input
                labelText="Old password"
                id="password"
                type="password"
                fieldName="password"
                placeholder="Enter your old password"
            />
            <Input
                labelText="New password"
                id="newpassword"
                type="password"
                fieldName="newpassword"
                placeholder="Enter your new password"
            />
            <div className='flex justify-end'>
                <SubmitFormBtn text="Change password" className="w-[150px]" />
            </div>
        </Form>
    </Formik>
}