import { useFormik } from "formik"
import { Input } from "./Input"
import { Select } from "./Select"
import { SubmitFormBtn } from './SubmitFormBtn'
import { fetchUserPets } from '../slices/pets/petApi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { getUserPets } from '../helpers/petHelper'
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom"
import { createPost } from '../slices/posts/postApi'
import { InputFile } from "./InputFile"

export const PostForm = () => {
    const getPets = useSelector(getUserPets)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        pet_id: "",
        content: "",
        image: null
    }

    const validationSchema = Yup.object({
        pet_id: Yup.number().required('Please choose a pet'),
        content: Yup.string().required('This field is required'),
        image: Yup.mixed().required('Image is required')
    })

    useEffect(() => {
        dispatch(fetchUserPets())
    }, [dispatch])

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (data, { resetForm }) => {
            const formData = new FormData()
            formData.append('pet_id', data.pet_id)
            formData.append('content', data.content)
            formData.append('image', data.image)
            dispatch(createPost(formData))
            resetForm()
            navigate("/user")
        }
    })

    return <div>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Select
                fieldName="pet_id"
                id="pet"
                labelText="Choose a pet"
                onchange={formik.handleChange}
                value={formik.values.pet_id}>
                <option value=""> Choose a pet </option>
                {
                    getPets.map(pet => (
                        <option value={pet.id} key={pet.id}> {pet.petName} </option>
                    ))
                }
            </Select>
            {formik.errors.pet_id && formik.touched.pet_id && (
                <div className="text-red-500">{formik.errors.pet_id}</div>
            )}
            <Input
                id="content"
                fieldName="content"
                type="text"
                labelText="Description"
                placeholder="Write text here"
                onchange={formik.handleChange}
                value={formik.values.content} />
            {formik.errors.content && formik.touched.content && (
                <div className="text-red-500">{formik.errors.content}</div>
            )}
            <InputFile
                labelText="Upload Image"
                onchange={(e) => formik.setFieldValue('image', e.target.files[0])} />
            {formik.errors.image && formik.touched.image && (
                <div className="text-red-500">{formik.errors.image}</div>
            )}
            <div className="flex justify-end">
                <SubmitFormBtn text="Submit" className="w-[150px]" />
            </div>
        </form>
    </div>
}