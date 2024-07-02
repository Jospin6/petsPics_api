import { SubmitFormBtn } from './SubmitFormBtn'
import { Input } from "./Input"
import { InputFile } from "./InputFile"
import { Select } from "./Select"

export const NewPetForm = ({formik}) => {
    return <div>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Input
                id="petName"
                fieldName="petName"
                type="text"
                labelText="Pet name"
                placeholder="Enter pet name"
                onchange={formik.handleChange}
                value={formik.values.petName} />
            {formik.errors.petName && formik.touched.petName && (
                <div className="text-red-500">{formik.errors.petName}</div>
            )}
            <div className="grid grid-cols-4 gap-4">
                <Select
                    fieldName="species"
                    id="petSpecy"
                    labelText="Species"
                    className="col-span-2"
                    onchange={formik.handleChange}
                    value={formik.values.species}>
                    <option value="">Choose a specie</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Fish">Fish</option>
                </Select>
                {formik.errors.species && formik.touched.species && (
                    <div className="text-red-500">{formik.errors.species}</div>
                )}
                <Select
                    fieldName="breed"
                    labelText="Breed"
                    id="breed"
                    className="col-span-2"
                    onchange={formik.handleChange}
                    value={formik.values.breed}>
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
                {formik.errors.breed && formik.touched.breed && (
                    <div className="text-red-500">{formik.errors.breed}</div>
                )}
            </div>
            <Input
                id="age"
                fieldName="age"
                labelText="Birthday"
                type="date"
                placeholder="Enter pet name"
                onchange={formik.handleChange}
                value={formik.values.age} />
            {formik.errors.age && formik.touched.age && (
                <div className="text-red-500">{formik.errors.age}</div>
            )}
            <InputFile
                labelText="Upload Image"
                onchange={(e) => formik.setFieldValue('image', e.target.files[0])} />
            {formik.errors.image && formik.touched.image && (
                <div className="text-red-500">{formik.errors.image}</div>
            )}
            <div className="flex justify-start">
                <SubmitFormBtn text="Submit" className="w-[150px]" />
            </div>
        </form>
    </div>

}