import { Form, Formik } from "formik"
import { Input } from "./Input"
import { Select } from "./Select"
import { SubmitFormBtn } from './SubmitFormBtn'

export const AddPet = () => {
    return <div className="text-black">
        <div className="w-full h-[200px] rounded-lg bg-white mt-4">
            <div className="p-2">Your existing pets</div>
            <div></div>
        </div>
        <div className="w-full h-[320px] rounded-lg bg-white mt-4 p-2">
            <div className="text-lg arial">Add new pet</div>
            <div>
                <Formik>
                    <Form>
                        <Input
                            labelText="Pet name"
                            id="petName"
                            fieldName="petName"
                            type="text"
                            placeholder="Enter pet name" />
                        <div className="grid grid-cols-4 gap-4">
                            <Select
                                labelText="Species"
                                fieldName="petSpecy"
                                id="petSpecy"
                                className="col-span-2" />
                            <Select
                                labelText="Breed"
                                fieldName="petBreed"
                                id="petBreed"
                                className="col-span-2" />
                        </div>
                        <Input
                            labelText="Birthday"
                            id="age"
                            fieldName="age"
                            type="date" />
                        <div className="flex justify-end">
                            <SubmitFormBtn text="Submit" className="w-[150px]"/>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    </div>
}