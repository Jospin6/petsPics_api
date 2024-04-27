import { Form, Formik } from "formik"
import { Input } from "./Input"
import { Select } from "./Select"
import { SubmitFormBtn } from './SubmitFormBtn'

export const PostForm = () => {
    return <Formik>
        <Form>
            <Select
                labelText="Choose a pet"
                fieldName="pet"
                id="pet" />
            <Input
                labelText="Description"
                id="description"
                fieldName="description"
                type="text"
                placeholder="Write text here" />
            <div className="flex justify-end">
                <SubmitFormBtn text="Submit" className="w-[150px]" />
            </div>
        </Form>
    </Formik>
}