import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import "./Signup.css"

const Signup = () => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, "Must be 15 characters or less").required('Required'),
            lastName: Yup.string().max(20, "Must be 20 characters or less").required('Required'),
            email: Yup.string().email("invalid email address").required("Required")
        }),
        onSubmit: (values) => {
            console.log(values)
        },
    })
    
    console.log(formik.touched)

    console.log(formik.errors)

    console.log(formik.values)
  return (
    <form onSubmit={formik.handleSubmit}>Signup
        <div className="input-container">
            <input 
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange ={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                
            />
            {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
        </div>
        <div className="input-container">
            <input 
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange ={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
        </div>
        <div className="input-container">
            <input 
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange ={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Signup