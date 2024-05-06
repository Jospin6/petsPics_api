import { Form, Formik } from "formik"
import { Input } from "./Input"
import { Select } from "./Select"
import { SubmitFormBtn } from './SubmitFormBtn'

export const NewPetForm = () => {
    return <Formik>
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
                    className="col-span-2">
                    <option value="">Choose a specie</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Fish">Fish</option>
                </Select>
                <Select
                    labelText="Breed"
                    fieldName="petBreed"
                    id="petBreed"
                    className="col-span-2">
                    <option value="">Select a pet breed</option>
                    <optgroup label="Dog" className="text-gray-600">
                        <option value="Bulldog">Bulldog</option>
                        <option value="Beagle">Beagle</option>
                        <option value="Poodle">Poodle</option>
                    </optgroup>
                    <optgroup label="Cat" className="text-gray-600">
                        <option value="Maine coon">Maine coon</option>
                        <option value="Persan">Persan</option>
                        <option value="Bengal">Bengal</option>
                    </optgroup>
                    <optgroup label="Fish" className="text-gray-600">
                        <option value="Guppy">Guppy</option>
                        <option value="Molly">Molly</option>
                        <option value="Bengal">Goldfish</option>
                    </optgroup>
                </Select>
            </div>
            <Input
                labelText="Birthday"
                id="age"
                fieldName="age"
                type="date" />
            <div className="flex justify-end">
                <SubmitFormBtn text="Submit" className="w-[150px]" />
            </div>
        </Form>
    </Formik>
}