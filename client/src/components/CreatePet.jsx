import { useFormik } from "formik"
import { NewPetForm } from "./NewPetForm"
import { Link } from 'react-router-dom'
import { UserPets } from "./UserPets"
import * as Yup from 'yup'
import { createPet } from '../slices/pets/petApi'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"

export const CreatePet = () => {
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
        petName: Yup.string().required("Pet name is required "),
        species: Yup.string().required(),
        breed: Yup.string().required(),
        age: Yup.string().required("Pet age is required "),
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
    return <div className="text-black">
        <div className="w-full h-[auto] rounded-lg bg-white mt-4 p-2">
            <div className="text-lg arial semi-bold">Add new pet</div>
            <NewPetForm formik={formik}/>
        </div>
        <div className="w-full h-[250px] mt-4">
            <div className="p-2 arial flex justify-between rounded-lg bg-white">
                <span className="text-lg semi-bold">Your pets</span>
                <Link to="/user/post" className="text-blue-700"> Post pet </Link>
            </div>
            <div className="w-full flex">
                <UserPets/>
            </div>
        </div>
    </div>
}