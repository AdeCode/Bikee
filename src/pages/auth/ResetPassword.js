import React, { useContext } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import signBic from '../../images/auth/signBic.png'
import Logo from '../../images/home/Logo.png'
import authService from '../../@services/authService'


function ResetPassword() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state)
    const resetPasswordMutation = useMutation(authService.resetPassword, {
            onSuccess: res => {
                console.log(res)
                toast.success(res.message, {
                    theme: "colored",
                })
                navigate('/signin')
            },
            onError: err => {
                console.log(err.message)
                toast.error(err.response.data.message, {
                    theme: "colored",
                  })
            }
        }
    )

    const onRegister = (values) => {
        values.token = location.state.token
        console.log(values)
        resetPasswordMutation.mutate(values)
    }

    return (
        <Container className='flex justify-center items-center bg-white h-[100vh]'>
        <div className='lg:w-[1168px] flex content lg:h-fit'>
            <div className='left flex items-center justify-center px-[50px] py-[126px]'>
                <div className='lg:w-[356px] flex flex-col items-center'>
                    <img src={Logo} alt='logo' className='mb-[46px]' />
                    <h2 className='text-dark_text font-bold text-[30px] mb-[16px]'>Reset your password</h2>
                    {/* <p className='text-[18px] text-secondary_text leading-[28px] mb-[26px] text-center'>Connected e-bike for you daily commute or delivery business</p> */}
                    <div className='form w-full'>
                        <Formik
                            initialValues={{
                                password: '',
                                password_confirmation: '',
                            }}
                            validationSchema={
                                Yup.object({
                                    password: Yup.string()
                                        .required("password field can not be empty")
                                        .min(6, "Password must be at least 6 characters"),
                                    password_confirmation: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
                                })
                            }
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(false)
                                onRegister(values)
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className='flex flex-col w-full'>
                                    <div className='form-group flex flex-col mb-4'>
                                        <label className='text-lg lg:text-lg'>Password</label>
                                        <Field type='password' className='h-[50px] px-3' name='password' placeholder='*********' />
                                        <ErrorMessage name="password" component="div" className='text-red' />
                                    </div>
                                    <div className='form-group flex flex-col'>
                                        <label className='text-lg lg:text-lg'>Confirm Password</label>
                                        <Field type='password' className='h-[50px] px-3' name='password_confirmation' placeholder='*********' />
                                        <ErrorMessage name="password_confirmation" component="div" className='text-red' />
                                    </div>
                                    <button type="submit" disabled={isSubmitting} className='w-full py-[11px] text-white bg-red rounded-[6px] text-[16px] mt-[23px]'>
                                        {
                                            resetPasswordMutation.isLoading
                                                ? "Please wait..."
                                                : "Submit"
                                        }
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>


            </div>
            <div className=''>
                <img src={signBic} alt='bicycle' />
            </div>
        </div>
    </Container>
  )
}

export default ResetPassword



const Container = styled.div`

    .content{
        background: radial-gradient(50% 50% at 50% 50%, rgba(247, 248, 249, 0) 0%, #F7F8F9 100%)
    }

    input{
        border: 1px solid #D5DAE1;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
    }
`



