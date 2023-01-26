import React, { useContext } from 'react'
import authService from '../@services/authService'
import {useMutation, useQueryClient} from 'react-query'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

function SigInForm() {
    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)

    const loginMutation = useMutation(authService.login, {
        onSuccess: res => {
            //console.log(res)
            dispatch({ type: 'LOGIN', payload: res })
            navigate('/dashboard')
        },
        onError: err => {
            console.log(err.message)
            alert("Could not sign in")
            //handleClick()
        }
    }) 

    const onRegister = (values) => {
        //console.log(values)
        loginMutation.mutate(values)
    }

  return (
            <Formik
                initialValues={{
                    email:'',
                    password:'',
                }}
                validationSchema={
                    Yup.object({
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

export default SigInForm



