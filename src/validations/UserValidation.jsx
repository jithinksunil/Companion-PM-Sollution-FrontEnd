import * as yup from 'yup'

export const userShema=yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().min(4).max(10).required()
})