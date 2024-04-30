import { Formik, Form } from 'formik'
import { Input } from './Input'
import { SubmitFormBtn } from './SubmitFormBtn'

export const UserInfo = () => {
    return <div>
        <div className="bg-white rounded-lg min-h-[100px] mt-2 p-2">
            <div className="semi-bold text-[18px]">
                Change your name
            </div>
            <div>
                <Formik>
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
            </div>
        </div>
        <div className="bg-white rounded-lg min-h-[150px] mt-2 p-2">
            
        </div>
    </div>
}