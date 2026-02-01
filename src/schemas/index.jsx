import * as Yup from "yup"

export const ContactSchema = Yup.object({
    Fname:Yup.string().required("*"),
    Phone:Yup.number().required("*"),
    Email:Yup.string().required("*"),
    Address:Yup.string().required("*"),
});

export const LoginSchema = Yup.object({
    username:Yup.string().required("required"),
    password:Yup.string().min(4).required("required")
})

export  const OtpSchema = Yup.object({
    otp:Yup.string().length(6,"OTP must be 6 digits only").required("required")
})