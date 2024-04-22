import * as Yup from 'yup'

const initialValues = {
    userName: "",
    password: ""
}

const validationSchema = Yup.object({
    userName: Yup.string().required(),
    password: Yup.string().required()
})

export {
    initialValues,
    validationSchema
}