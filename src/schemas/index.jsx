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

export const DoctorSchema = Yup.object({
    name:Yup.string().required("*"),
    department:Yup.string().required("*"),
    specialization:Yup.string().required("*"),
    qualification:Yup.string().required("*"),
    email:Yup.string().email("Invalid email format").required("*"),
    phone:Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("*")
});

export const ReceptionistSchema  = Yup.object({
     username:Yup.string().required("*"),
     email:Yup.string().email("Invalid email format").required("*"),
     phone:Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("*"),
     shift_time:Yup.string().required("*"),
     address:Yup.string().required("*")
});