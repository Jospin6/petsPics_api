
const handleDate = (dateTme) => {
    const date = getDate(dateTme)
    const time = getTime(dateTme)
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

const getTime = date => {
    const currentTime = new Date(date)
    return currentTime.getHours() + ":" + currentTime.getMinutes() + " " + getTimeOfDay(date)
}

const getTimeOfDay = dateString => {
    const date = new Date(dateString)
    const hours = date.getHours()
    if (hours < 12) {
        return "AM"
    } else {
        return "PM"
    }
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
const getSinglePost = state => state.singlePost.post
export {
    getPets,
    getPosts,
    handleDate,
    getUserPets,
    getSinglePost
}