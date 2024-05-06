
const handleDate = (dateTme) => {
    const date = getDate(dateTme)
    const time = dateTme.split("T")[1].slice(0,5)
    let fullDate = ''
    if (date === gettodayDate()) {
        fullDate = 'today'.concat(" ").concat(time)
    } else if (date === getYesterdayDate()) {
        fullDate = 'yesterday'.concat(" ").concat(time)
    } else {
        fullDate = date.concat(" ").concat(time)
    }
    return fullDate
}

const getDate = date => {
    const format = new Date(date)
    return dateFormat(format)
}

const gettodayDate = () => {
    const today = new Date()
    return dateFormat(today)
}

const getYesterdayDate = () => {
    const today = new Date()
    const yeterday = new Date(today.getTime() - (24 * 60 * 60 * 1000))
    return dateFormat(yeterday)
}

const dateFormat = date => {
    return date.getDate() 
        + "/" + correctMonth(date.getMonth()) 
        + "/" + date.getFullYear()
}

const correctMonth = month => month + 1

const getPets = state => state.pet.pets
const getPosts = state => state.post.posts
const getUserPets = state => state.userPet.pets
export {
    getPets,
    getPosts,
    handleDate,
    getUserPets
}