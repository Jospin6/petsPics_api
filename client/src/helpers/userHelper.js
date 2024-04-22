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

export {
    initialValues,
    validationSchema,
    getUsers
}