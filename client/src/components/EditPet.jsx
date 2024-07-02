import { NewPetForm } from "./NewPetForm"
import * as Yup from 'yup'
import { createPet } from '../slices/pets/petApi'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from "formik"
import { fetchSinglePet } from "../slices/pets/petApi"
import { useEffect } from "react"

export const EditPet = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchSinglePet(id))
    }, [dispatch])

    const initialValues = {
        petName: "",
        species: "",
        breed: "",
        age: "",
        image: null
    }

    const validationSchema = Yup.object({
        petName: Yup.string().required("Pet name is required "),
        species: Yup.string().required(),
        breed: Yup.string().required(),
        age: Yup.string().required("Pet age is required ")
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
        <div>Edit pet</div>
        <div>
            <NewPetForm formik={formik} />
        </div>
    </div>
}