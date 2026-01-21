import * as Yup from "yup"

export const ContactSchema = Yup.object({
    Fname:Yup.string().required("*"),
    Phone:Yup.number().required("*"),
    Email:Yup.string().required("*"),
    Address:Yup.string().required("*"),
});

export const LoginSchema = Yup.object({
    Role:Yup.string().required("required"),
    username:Yup.string().required("required"),
    password:Yup.string().min(7).required("required")
})