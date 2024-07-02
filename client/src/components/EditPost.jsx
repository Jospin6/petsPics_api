
import { useFormik } from "formik"
import { Input } from "./Input"
import { Select } from "./Select"
import { SubmitFormBtn } from './SubmitFormBtn'
import { fetchUserPets } from '../slices/pets/petApi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { getUserPets } from '../helpers/petHelper'
import * as Yup from 'yup'
import { useNavigate, useParams } from "react-router-dom"
import { updatePost } from '../slices/posts/postApi'
import { InputFile } from "./InputFile"
import { fetchSinglePost } from '../slices/posts/postApi'

export const EditPost = () => {
    const getPets = useSelector(getUserPets)
    const { id } = useParams()
    const getPost = useSelector(state => state.singlePost.post)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        pet_id: getPost.pet_id,
        content: getPost.content,
        image: null
    }

    const validationSchema = Yup.object({
        pet_id: Yup.number().required('Please choose a pet'),
        content: Yup.string().required('This field is required'),
    })

    useEffect(() => {
        dispatch(fetchUserPets())
        dispatch(fetchSinglePost(id))
    }, [dispatch])

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (data, { resetForm }) => {
            const formData = new FormData()
            formData.append('pet_id', data.pet_id)
            formData.append('content', data.content)
            formData.append('image', data.image)
            dispatch(updatePost(formData))
            resetForm()
            navigate("/user")
        }
    })

    return <div>
        <div className="text-2xl mb-4">
            Edit post
        </div>
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