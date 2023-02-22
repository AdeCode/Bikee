import React, { useContext, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import signBic from '../../images/auth/signBic.png'
import Logo from '../../images/home/Logo.png'
import authService from '../../@services/authService'


function OtpInput() {
    const navigate = useNavigate()
    const location = useLocation()
    const [inputToken, setInputToken] = useState('')

    const otpInputMutation = useMutation(authService.verifyToken, {
            onSuccess: res => {
                console.log(res)
                toast.success(res.message, {
                    theme: "colored",
                })
                //localStorage.setItem("passwordResetToken", inputToken)
                navigate('/password-reset',{
                    state:{
                        token:inputToken
                    }
                })
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
        console.log(values)
        setInputToken(values.token)
        otpInputMutation.mutate(values)
    }

    return (
        <Container className='flex justify-center items-center bg-white h-[100vh]'>
            <div className='lg:w-[1168px] flex content lg:h-fit'>
                <div className='left flex items-center justify-center px-[50px] py-[126px]'>
                    <div className='lg:w-[356px] flex flex-col items-center'>
                        <img src={Logo} alt='logo' className='mb-[46px]' />
                        <h2 className='text-dark_text font-bold text-[30px] mb-[16px]'>Enter the OTP sent to your email address</h2>
                        {/* <p className='text-[18px] text-secondary_text leading-[28px] mb-[26px] text-center'>Connected e-bike for you daily commute or delivery business</p> */}
                        <div className='form w-full'>
                            <Formik
                                initialValues={{
                                    token:''
                                }}
                                validationSchema={
                                    Yup.object({
                                        token: Yup.number()
                                            .required("OTP field can not be empty")
                                            .min(6,'OTP is minimum of 6 digits')

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
                                            <label className='text-lg lg:text-lg'>OTP</label>
                                            <Field type="token" name="token" className='h-[50px] px-3' placeholder='enter otp' />
                                            <ErrorMessage name="token" component="div" className='text-red' />
                                        </div>

                                        <button type="submit" disabled={isSubmitting} className='w-full py-[11px] text-white bg-red rounded-[6px] text-[16px] mt-[23px]'>
                                            {
                                                otpInputMutation.isLoading
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

export default OtpInput



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



