import * as Yup from "yup";


export const clientSubscribeValidationSchema = Yup.object().shape({
    email:Yup.string().required("Enter email").email().label("Email"),
})

export const clientSignInValidationSchema =  Yup.object().shape({
    email:Yup.string().required("Enter email").email().label("Email"),
    password:Yup.string().required("Enter password").min(8,"Enter at least 8 characters")
})