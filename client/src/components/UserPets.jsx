import { MiniPetCard } from "./MiniPetCard"
import { fetchUserPets } from '../slices/pets/petApi'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
export const UserPets = () => {
    const { loading, pets } = useSelector(state => state.userPet)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserPets())
    }, [dispatch])

    return <div className="w-full flex">
        {
            pets.map(pet => (<MiniPetCard pet={pet} key={pet.id} />))
        }
    </div>
}