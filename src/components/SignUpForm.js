import React from 'react'
import authService from '../@services/authService'
import {useMutation, useQueryClient} from 'react-query'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'

function SignUpForm() {
    const navigate = useNavigate()


    const loginMutation = useMutation(authService.login, {
        onSuccess: res => {
            const accessToken = res.token

            //persist to local storage
            localStorage.setItem('token', accessToken)
            navigate('/admin')
        },
        onError: err => {
            console.log(err.message)
            alert("Could not sign in")
            //handleClick()
        }
    }) 

    const onRegister = (values) => {
        console.log(values)
        loginMutation.mutate(values)
    }

  return (
            <Formik
                initialValues={{
                    first_name:'',
                    last_name:'',
                    email:'',
                    phone:'',
                }}
                validationSchema={
                    Yup.object({
                        first_name: Yup.string().required('First name field is required'),
                        last_name: Yup.string().required('Last name field is required'),
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("email field can not be empty"),
                        password: Yup.string()
                            .required("password field can not be empty")
                            .min(6, "Password must be at least 6 characters")
                    })
                }
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false)
                    onRegister(values)
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='flex flex-col w-full'>
                        <div className='form-group flex flex-col mb-[24px]'>
                            <label className='text-lg lg:text-lg'>First Name</label>
                            <Field type="text" name="first_name" className='h-[50px] px-3' placeholder='enter first name'/>
                            <ErrorMessage name="first_name" component="div" className='text-red'/>
                        </div>
                        <div className='form-group flex flex-col mb-[24px]'>
                            <label className='text-lg lg:text-lg'>Last Name</label>
                            <Field type="text" name="last_name" className='h-[50px] px-3' placeholder='enter last name'/>
                            <ErrorMessage name="last_name" component="div" className='text-red'/>
                        </div>
                        <div className='form-group flex flex-col mb-[24px]'>
                            <label className='text-lg lg:text-lg'>Email</label>
                            <Field type="email" name="email" className='h-[50px] px-3' placeholder='enter your email'/>
                            <ErrorMessage name="email" component="div" className='text-red'/>
                        </div>
                        <div className='form-group flex flex-col'>
                            <label className='text-lg lg:text-lg'>Password</label>
                            <Field type='password' className='h-[50px] px-3' name='password' placeholder='*********'/>
                            <ErrorMessage name="password" component="div" className='text-red'/>
                        </div>
                        <button type="submit" disabled={isSubmitting} className='w-full py-[11px] text-white bg-red rounded-[6px] text-[16px] mt-[23px]'>
                            {
                                loginMutation.isLoading 
                                ? "Please wait..." 
                                : "Sign In"
                            }
                        </button>
                    </Form>
                )}
            </Formik>
  )
}

export default SignUpForm



