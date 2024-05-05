import { PostItem } from "./PostItem"
import { useDispatch, useSelector } from 'react-redux'
import { getPets } from '../helpers/petHelper'
import { fetchPets } from '../slices/pets/petApi'
import { useEffect } from "react"

export const Pets = () => {
    const pets = useSelector(getPets)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchPets())
    }, [dispatch])

    return <div>
        {
            pets.map(pet => (<PostItem pet={pet} key={pet.id}/>))
        }
    </div>
}