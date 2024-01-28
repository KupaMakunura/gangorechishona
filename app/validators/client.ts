import * as Yup from "yup";


export const clientSubscribeValidationSchema = Yup.object().shape({
    email:Yup.string().required("Enter email").email().label("Email"),
})