import React, { useContext } from 'react'
import authService from '../@services/authService'
import {useMutation, useQueryClient} from 'react-query'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import {useLocation} from 'react-router-dom'
import {toast} from 'react-toastify'

function SignUpForm() {
    const navigate = useNavigate()
    const location = useLocation()
    const {dispatch} = useContext(AuthContext)



    const signUpMutation = useMutation(authService.register, {
        onSuccess: res => {
            console.log(res)
            dispatch({ type: 'LOGIN', payload: res })
            if(location.state === null){
                navigate('/')
            }else if(location?.state.from){
                navigate(location.state.from)
            }
            toast.success(res.message, {
                theme: "colored",
            }) 
            //alert(res.message)
            //navigate('/admin')
        },
        onError: err => {
            console.log(err.message)
            toast.error(err.response.data.message[0], {
                theme: "colored",
              })
            //alert("Could not create account")
            //handleClick()
        }
    }) 

    const onRegister = (values) => {
        console.log(values)
        signUpMutation.mutate(values)
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
                        phone: Yup.string()
                            .required("phone number field not be empty")
                            .min(10, "phone number must be at least 11 characters")
                    })
                }
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false)
                    onRegister(values)
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='flex flex-col w-full'>
                        <div className='form-group flex flex-col mb-[16px]'>
                            <label className='text-lg lg:text-lg'>First Name</label>
                            <Field type="text" name="first_name" className='h-[50px] px-3' placeholder='enter first name'/>
                            <ErrorMessage name="first_name" component="div" className='text-red'/>
                        </div>
                        <div className='form-group flex flex-col mb-[16px]'>
                            <label className='text-lg lg:text-lg'>Last Name</label>
                            <Field type="text" name="last_name" className='h-[50px] px-3' placeholder='enter last name'/>
                            <ErrorMessage name="last_name" component="div" className='text-red'/>
                        </div>
                        <div className='form-group flex flex-col mb-[16px]'>
                            <label className='text-lg lg:text-lg'>Email</label>
                            <Field type="email" name="email" className='h-[50px] px-3' placeholder='enter your email'/>
                            <ErrorMessage name="email" component="div" className='text-red'/>
                        </div>
                        <div className='form-group flex flex-col'>
                            <label className='text-lg lg:text-lg'>Phone</label>
                            <Field type='text' className='h-[50px] px-3' name='phone' placeholder=''/>
                            <ErrorMessage name="phone" component="div" className='text-red'/>
                        </div>
                        <button type="submit" disabled={isSubmitting} className='w-full py-[11px] text-white bg-red rounded-[6px] text-[16px] mt-[23px]'>
                            {
                                signUpMutation.isLoading 
                                ? "Please wait..." 
                                : "Sign Up"
                            }
                        </button>
                    </Form>
                )}
            </Formik>
  )
}

export default SignUpForm



