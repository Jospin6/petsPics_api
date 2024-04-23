import * as Yup from 'yup'

const initialValues = {
    userName: "",
    password: ""
}

const validationSchema = Yup.object({
    userName: Yup.string().required(),
    password: Yup.string().required()
})

const getUsers = state => state.user.users
const isUserAuth = state => state.user.isAuth

export {
    initialValues,
    validationSchema,
    getUsers,
    isUserAuth
}