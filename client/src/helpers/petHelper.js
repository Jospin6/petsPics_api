
const handleDate = (dateTme) => {
    let devidDate = dateTme.split("T")
    const date = devidDate[0]
    const time = devidDate[1].slice(0,5)
    let fullDate = ''
    if (date === gettodayDate()) {
        fullDate = 'today'.concat(". at ").concat(time)
    } else if (date === getYesterdayDate()) {
        fullDate = 'yesterday'.concat(". at ").concat(time)
    } else {
        fullDate = date.concat(". at ").concat(time)
    }
    return fullDate
}

const gettodayDate = () => {
    const today = new Date()
    return today.getFullYear
        .concat("-")
        .concat(today.getMonth + 1)
        .concat("-")
        .concat(today.getDate())
}

const getYesterdayDate = () => {
    const today = new Date()
    const yeterday = new Date(today.getTime() - (24 * 60 * 60 * 1000))

    return yeterday.getFullYear
        .concat("-")
        .concat(yeterday.getMonth + 1)
        .concat("-")
        .concat(yeterday.getDate())
}

const getPets = state => state.pet.pets
const getPosts = state => state.post.posts

export {
    getPets,
    getPosts,
    handleDate
}