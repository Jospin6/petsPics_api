import { Form, Formik } from "formik"
import { Input } from "./Input"
import { Select } from "./Select"
import { SubmitFormBtn } from './SubmitFormBtn'
import { fetchUserPets } from '../slices/pets/petApi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { getUserPets } from '../helpers/petHelper'

export const PostForm = () => {
    const getPets = useSelector(getUserPets)
    const dispatch = useDispatch()

    useEffect(()  => {
        dispatch(fetchUserPets())
    }, [dispatch])

    return <Formik>
        <Form>
            <Select
                labelText="Choose a pet"
                fieldName="pet"
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
                fieldName="description"
                type="text"
                placeholder="Write text here" />
            <div className="flex justify-end">
                <SubmitFormBtn text="Submit" className="w-[150px]" />
            </div>
        </Form>
    </Formik>
}