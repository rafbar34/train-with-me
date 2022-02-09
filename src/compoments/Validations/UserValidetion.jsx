import * as yup from 'yup'


export const userSchema = yup.object().shape({

    firstName:yup.string().required(),
    lastName:yup.string().required(),
    age:yup.number().required(),
    email: yup.string().email().required()

})

