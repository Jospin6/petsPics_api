
const handleDate = (dateTme) => {
    let devidDate = dateTme.split("T")
    const date = devidDate[0]
    const time = devidDate[1].slice(0,5)
    let fullDate = ''
    if (date === gettoday()) {
        fullDate = 'today'.concat(". at ").concat(time)
    }
    return fullDate
}

const gettoday = () => {
    const today = new Date()
    return today.getFullYear
        .concat("-")
        .concat(today.getMonth + 1)
        .concat("-")
        .concat(today.getDate())
}


const getPets = state => state.pet.pets
const getPosts = state => state.post.posts

export {
    getPets,
    getPosts
}