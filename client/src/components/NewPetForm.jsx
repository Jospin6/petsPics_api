import { useFormik } from "formik"
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
        image: null
    }

    const validationSchema = Yup.object({
        petName: Yup.string().required(),
        species: Yup.string().required(),
        breed: Yup.string().required(),
        age: Yup.string().required(),
        image: Yup.mixed().required()
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (data, { resetForm }) => {
            const formData = new FormData()
            formData.append('petName', data.petName)
            formData.append('species', data.species)
            formData.append('breed', data.breed)
            formData.append('age', data.age)
            formData.append('image', data.image)
            dispatch(createPet(formData))
            resetForm()
            navigate("/user")
        }
    })

    return <div>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <div className="mt-2">
                <label htmlFor="petName" className="block mb-[5px] bolder text-[16px]"> Pet name </label>
                <input
                    id="petName"
                    name="petName"
                    type="text"
                    placeholder="Enter pet name"
                    className="w-full h-[35px] border-[1px] border-gray-400 
                    rounded-lg pl-2 outline-none text-black"
                    onChange={formik.handleChange}
                    value={formik.values.petName} />
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <label htmlFor="species" className="block mb-[5px] bolder text-[16px]"> Species </label>
                    <select
                        name="species"
                        id="petSpecy"
                        className="w-full h-[35px] border-[1px] border-gray-400 
            rounded-lg pl-2 outline-none text-black"
                        onChange={formik.handleChange}
                        value={formik.values.species}>
                        <option value="">Choose a specie</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Fish">Fish</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="breed" className="block mb-[5px] bolder text-[16px]"> Breed </label>
                    <select
                        name="breed"
                        id="breed"
                        className="w-full h-[35px] border-[1px] border-gray-400 
            rounded-lg pl-2 outline-none text-black"
                        onChange={formik.handleChange}
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
                    </select>
                </div>
            </div>
            <div className="mt-2">
                <label htmlFor="age" className="block mb-[5px] bolder text-[16px]"> Birthday </label>
                <input
                    id="age"
                    name="age"
                    type="date"
                    placeholder="Enter pet name"
                    className="w-full h-[35px] border-[1px] border-gray-400 
                    rounded-lg pl-2 outline-none text-black"
                    onChange={formik.handleChange}
                    value={formik.values.age} />
            </div>
            <div className="mt-2">
                <label htmlFor="image" className="block mb-[5px] bolder text-[16px]"> Upload Image </label>
                <input
                    type="file"
                    id="image"
                    className="w-full h-[35px] border-[1px] border-gray-400 
                    rounded-lg pl-2 outline-none text-black"
                    accept='image/*'
                    onChange={(e) => formik.setFieldValue('image', e.target.files[0])} />
            </div>
            <div className="flex justify-end">
                <SubmitFormBtn text="Submit" className="w-[150px]" />
            </div>
        </form>
    </div>

}