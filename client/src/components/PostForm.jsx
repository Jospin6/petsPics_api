import { Form, Formik } from "formik"
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

export const PostForm = () => {
    const getPets = useSelector(getUserPets)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        pet_id: "",
        content: "",
        image: ""
    }

    const validationSchema = Yup.object({
        pet_id: Yup.number().required(),
        content: Yup.string().required(),
        image: Yup.string().required()
    })

    useEffect(()  => {
        dispatch(fetchUserPets())
    }, [dispatch])

    const submit = (data, { resetForm }) => {
        dispatch(createPost(data))
        resetForm()
        navigate("/user")
    }

    return <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={submit}>
        <Form>
            <Select
                labelText="Choose a pet"
                fieldName="pet_id"
                id="pet"> 
                <option value="">Select a pet</option>
                {
                    getPets.map(pet => (
                        <option value={pet.id} key={pet.id}> {pet.petName} </option>
                    ))
                }
            </Select>
            <Input
                labelText="Description"
                id="description"
                fieldName="content"
                type="text"
                placeholder="Write text here" />
            <Input
                labelText="Pet image"
                id="image"
                fieldName="image"
                type="file"
                placeholder="" />
            <div className="flex justify-end">
                <SubmitFormBtn text="Submit" className="w-[150px]" />
            </div>
        </Form>
    </Formik>
}