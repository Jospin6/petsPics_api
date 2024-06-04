import { Form, Formik } from "formik"
import { Input } from "./Input"
import { Select } from "./Select"
import { SubmitFormBtn } from './SubmitFormBtn'
import * as Yup from 'yup'
import { createPet } from '../slices/pets/petApi'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"

export const NewPetForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialValues = {
        petName: "",
        species: "",
        breed: "",
        age: "",
        petImage: ""

    }

    const validationSchema = Yup.object({
        petName: Yup.string().required(),
        species: Yup.string().required(),
        breed: Yup.string().required(),
        age: Yup.string().required(),
        petImage: Yup.string().required()
    })

    const submit = (data, { resetForm }) => {
        dispatch(createPet(data))
        resetForm()
        navigate("/user")
    }

    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}>
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
                    fieldName="species"
                    id="petSpecy"
                    className="col-span-2">
                    <option value="">Choose a specie</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Fish">Fish</option>
                </Select>
                <Select
                    labelText="Breed"
                    fieldName="breed"
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
            <Input
                labelText="Pet image"
                id="petImage"
                fieldName="petImage"
                type="file"
                placeholder="" />
            <div className="flex justify-end">
                <SubmitFormBtn text="Submit" className="w-[150px]" />
            </div>
        </Form>
    </Formik>
}