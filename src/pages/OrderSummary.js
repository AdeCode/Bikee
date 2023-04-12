import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import SummaryOrder from '../components/@shared/SummaryOrder'
import { useLocation, Link } from 'react-router-dom';
import SubMenu from '../components/@shared/SubMenu';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useMutation, useQuery } from 'react-query';
import orderService from '../@services/orderService';
import { toast } from 'react-toastify'
import { IoAddCircleOutline } from "react-icons/io5";


function OrderSummary() {
    const location = useLocation()
    const [showForm, setShowForm] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState('Office Pickup')
    let deliveryType = ''
    let userAddress = []
    if (sessionStorage.getItem('deliveryType') !== '') {
        deliveryType = sessionStorage.getItem('deliveryType')
    }
    // deliveryType && console.log(deliveryType)
    // console.log(location.state.deliveryType)
    const { pathname } = location
    // console.log(pathname)

    const { state: user } = useContext(AuthContext)
    // user && console.log(user)
    const userId = user.user.id

    const { state: cartState, dispatch } = useContext(CartContext)

    const onSave = (values) => {
        //console.log(values)
        saveAddressMutation.mutate(values)
    }

    const { data: address } = useQuery(['address', { userId }], orderService.getUserAddress)
    if (address) {
        userAddress = address.data.data
    }
    // address && console.log(address.data.data)

    const saveAddressMutation = useMutation(orderService.saveShippingAddress, {
        onSuccess: res => {
            //console.log(res)
            setSelectedAddress(res.data.id)
            toast.success(res.message, {
                theme: "colored",
            })
        },
        onError: err => {
            console.log(err.message)
            toast.error(err.response.data.message, {
                theme: "colored",
            })
        }
    })

    const onAddressChange = (e) => {
        setSelectedAddress(e.target.value)
        //console.log(selectedAddress)
    }


    return (
        <Container className='lg:pt-[100px]'>
            {/* <SubMenu/> */}
            {/* <div className='lg:pt-[10px] lg:pb-[22px] lg:pl-[140px] hidden lg:flex'>
            <ul className='flex lg:gap-11 font-normal text-[13px] lg:leading-[22px] text-nav_text'>
                <li className=''>E-bike</li>
                <li className=''>Accessories </li>
                <li className=''>Maintanance and Insuransce</li>
            </ul>
        </div> */}
            <div className='lg:hidden flex pt-[100px]'>
                {/* <ul className='flex justify-between w-full'>
                    <li>
                        <Link to={`${pathname}/shipping-address`}>Shipping address</Link>
                    </li>
                    <li className=''>
                        <Link to={`${pathname}/payment`}>Payment</Link>
                    </li>
                    <li className=''>
                        <Link to={`${pathname}/summary`}>Summary</Link>
                    </li>
                </ul> */}
            </div>
            <div className='lg:flex flex-col lg:flex-row justify-center gap-[100px] px-7 lg:px-0'>
                <div className='flex flex-col font-mulish'>
                    <h2 className='font-bold text-[#030919] text-[28px] lg:leading-[35px] mb-[29px]'>Checkout</h2>
                    {
                        deliveryType === "doorstep" ?
                            <>
                                <p className='font-bold text-base mb-[39px]'>Shipping address</p>
                                <div className=''>
                                    <Formik
                                        initialValues={{
                                            first_name: '',
                                            last_name: '',
                                            street: '',
                                            city: '',
                                            state: '',
                                            phone_number: '',
                                            company_name: '',
                                            quantity: 0,
                                            email: '',
                                        }}
                                        validationSchema={
                                            Yup.object({
                                                // first_name: Yup.string().required('First name field is required'),
                                                // last_name: Yup.string().required('Last name field is required'),
                                                // email: Yup.string()
                                                //     .email("Invalid email address")
                                                //     .required("email field can not be empty"),
                                                street: Yup.string().required('Field is required'),
                                                city: Yup.string().required('Field is required'),
                                                state: Yup.string().required('Field is required'),
                                                company_name: Yup.string(),
                                                phone_number: Yup.string()
                                                    .required("phone number field not be empty")
                                                    .min(10, "phone number must be at least 11 characters")
                                            })
                                        }
                                        onSubmit={(values, { setSubmitting }) => {
                                            setSubmitting(false)
                                            onSave(values)
                                        }}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form className='flex flex-col w-full'>
                                                <div className='form-group lg:w-[465px] lg:mb-[24px] mb-[18px]'>
                                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Email address</h2>
                                                    <Field type="email" name="email" value={user.user.email} readOnly={true} className='h-[46px] border w-full px-3' placeholder='enter your email' />
                                                    <ErrorMessage name="email" component="div" className='text-red' />
                                                </div>
                                                <div className='form-group lg:w-[465px] lg:mb-[39px]'>
                                                    <h2 className='lg:font-normal font-bold text-base text-[#030919] lg:leading-[19px] mb-2'>Contact information</h2>
                                                    <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px] w-full'>
                                                        <div className='flex flex-col lg:w-[50%] w-full'>
                                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>First name</h2>
                                                            <Field type="text" name="first_name" value={user.user.first_name} readOnly className='h-[46px] border w-full px-3'  placeholder='enter your first name' />
                                                            <ErrorMessage name="first_name" component="div" className='text-red' />
                                                        </div>
                                                        <div className='flex flex-col lg:w-[50%] w-full'>
                                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Last name</h2>
                                                            <Field type="text" name="last_name" value={user.user.last_name} readOnly className='h-[46px] border w-full px-3' placeholder='enter your last name' />
                                                            <ErrorMessage name="last_name" component="div" className='text-red' />
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px]'>
                                                        <div className='flex flex-col lg:w-[50%]'>
                                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Company name (optional)</h2>
                                                            <Field type="text" name="company_name" className='h-[46px] border w-full px-3' placeholder='enter companyname' />
                                                            <ErrorMessage name="company_name" component="div" className='text-red' />
                                                        </div>
                                                        <div className='flex flex-col lg:w-[50%]'>
                                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Item quantity</h2>
                                                            <Field type="number" name="quantity" value={cartState.length} readOnly className='h-[46px] border w-full px-3' placeholder='enter companyname' />
                                                            <ErrorMessage name="quantity" component="div" className='text-red' />
                                                        </div>
                                                    </div>
                                                    {
                                                        userAddress.length < 1 ?
                                                            <div className=''>
                                                                <div className='form-group lg:w-[465px] lg:mb-[21px] mb-[18px]'>
                                                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Street address</h2>
                                                                    <Field type="text" name="street" className='h-[46px] border w-full px-3' placeholder='enter address' />
                                                                    <ErrorMessage name="street" component="div" className='text-red' />
                                                                </div>
                                                                <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px]'>
                                                                    <div className='flex flex-col lg:w-[50%]'>
                                                                        <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>State</h2>
                                                                        <Field type="text" name="state" className='h-[46px] border w-full px-3' placeholder='enter address' />
                                                                        <ErrorMessage name="state" component="div" className='text-red' />
                                                                    </div>
                                                                    <div className='flex flex-col lg:w-[50%]'>
                                                                        <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>City</h2>
                                                                        <Field type="text" name="city" className='h-[46px] border w-full px-3' placeholder='enter your city' />
                                                                        <ErrorMessage name="city" component="div" className='text-red' />
                                                                    </div>
                                                                </div>
                                                                <div className='form-group lg:w-[465px] lg:mb-[50px] mb-8'>
                                                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Phone number</h2>
                                                                    <Field type="number" name="phone_number" className='h-[46px] border w-full px-3' placeholder='enter your city' />
                                                                    <ErrorMessage name="phone_number" component="div" className='text-red' />
                                                                </div>
                                                                <button type="submit" disabled={isSubmitting} className='w-full py-[11px] text-white bg-red rounded-[6px] text-[16px] mt-[23px]'>
                                                                    {
                                                                        saveAddressMutation.isLoading
                                                                            ? "Please wait..."
                                                                            : "Save"
                                                                    }
                                                                </button>
                                                            </div>
                                                            :
                                                            ''
                                                    }
                                                </div>
                                                {
                                                    userAddress &&
                                                    <>
                                                        <h3 className='mb-6 font-semibold'>Select an exisiting address</h3>
                                                        {
                                                            userAddress.map(address => {
                                                                return (
                                                                    <div className='mb-4' key={address.id}>
                                                                        <div className=''>
                                                                            <div className="">
                                                                                <label>
                                                                                    <input
                                                                                        type="radio"
                                                                                        value={address.id}
                                                                                        onChange={onAddressChange}
                                                                                        name='deliveryAddress'
                                                                                        className='mr-2'
                                                                                    />
                                                                                    {address.street}, {address.city}, {address.state}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                    
                                                }
                                                {
                                                    showForm === false ?
                                                        <div className='text-green-700'>
                                                            <h3 onClick={() => setShowForm(!showForm)} className='flex items-center cursor-pointer'><IoAddCircleOutline /> Use a different address</h3>
                                                        </div>
                                                        : ''
                                                }

                                                {
                                                    showForm &&
                                                    <div>
                                                        <h3>Fill the information below</h3>
                                                        <div className='form-group lg:w-[465px] lg:mb-[21px] mb-[18px]'>
                                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Street address</h2>
                                                            <Field type="text" name="street" className='h-[46px] border w-full px-3' placeholder='enter address' />
                                                            <ErrorMessage name="street" component="div" className='text-red' />
                                                        </div>
                                                        <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px]'>
                                                            <div className='flex flex-col lg:w-[50%]'>
                                                                <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>State</h2>
                                                                <Field type="text" name="state" className='h-[46px] border w-full px-3' placeholder='enter address' />
                                                                <ErrorMessage name="state" component="div" className='text-red' />
                                                            </div>
                                                            <div className='flex flex-col lg:w-[50%]'>
                                                                <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>City</h2>
                                                                <Field type="text" name="city" className='h-[46px] border w-full px-3' placeholder='enter your city' />
                                                                <ErrorMessage name="city" component="div" className='text-red' />
                                                            </div>
                                                        </div>
                                                        <div className='form-group lg:w-[465px] lg:mb-[50px] mb-8'>
                                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Phone number</h2>
                                                            <Field type="number" name="phone_number" value={user.user.phone} className='h-[46px] border w-full px-3' placeholder='enter phone number' />
                                                            <ErrorMessage name="phone_number" component="div" className='text-red' />
                                                        </div>
                                                        <button type="submit" disabled={isSubmitting} className='w-full py-[11px] text-white bg-red rounded-[6px] text-[16px] mt-[23px]'>
                                                            {
                                                                saveAddressMutation.isLoading
                                                                    ? "Please wait..."
                                                                    : "Save"
                                                            }
                                                        </button>
                                                    </div>
                                                }

                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </>
                            :
                            null
                    }

                </div>
                <div>
                    <SummaryOrder addressId={selectedAddress}/>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`
    input{
        border: 0.871267px solid #EEF0F2
    }
`

export default OrderSummary