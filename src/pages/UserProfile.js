import { CardTravelOutlined } from '@mui/icons-material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import helperFunction from '../@helpers/helperFunction'
import OrderCard from '../components/@shared/OrderCard'
import { AuthContext } from '../contexts/AuthContext'
import { CartContext } from '../contexts/CartContext'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import orderService from '../@services/orderService'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';


function UserProfile() {
    const { state: user, dispatch: authDispatch } = useContext(AuthContext)
    // user && console.log(user)
    const { state: cart } = useContext(CartContext)
    const [addressId, setAddressId] = useState({})
    const [open, setOpen] = React.useState(false);
    const handleOpen = (address) => { setOpen(true); setAddressId(address.id) };
    const handleClose = () => setOpen(false);
    const [formData, setFormData] = useState({
        street:'',
        state:'',
        city:''
    })
    const queryClient = useQueryClient()

    // const [orderHistory, setOrderHistory] = useState([])

    let userAddress = []
    const orderHistoryRef = useRef([])

    const totalSumRef = useRef(0)

    if (cart) {
        let total = cart.map(item => item.total)
        if (total.length > 0) {
            const TotalSum = total.reduce(
                (accumulator, currentValue) => accumulator + currentValue)
            totalSumRef.current = TotalSum
        }
    }

    const userId = user.user.id

    const { data: orders, isLoading, error, isError } = useQuery(['order', { userId }], orderService.getOrders)

    orders && console.log(orders.data.data)
    //error&&console.log(error.response.data.message)

    if (orders) {
        orderHistoryRef.current = orders.data.data
        // console.log(orderHistoryRef.current)
    }

    const { data: address } = useQuery(['address', { userId }], orderService.getUserAddress)
    if (address) {
        userAddress = address.data.data
    }
    // address && console.log(address.data.data)

    // user && console.log(user)
    // cart && console.log(cart)

    const logout = () => {
        authDispatch({ type: 'LOGOUT' })
    }

    const deleteAddressMutation = useMutation(orderService.deleteUserAddress, {
        onSuccess: res => {
            toast.success(res.message, {
                theme: "colored",
            })
        },
        onError: err => {
            toast.error(err.response.data.message[0], {
                theme: "colored",
            })
        }
    })

    const updateAddressMutation = useMutation(orderService.updateAddress, {
        onSuccess: res => {
            toast.success(res.message, {
                theme: "colored",
            })
            queryClient.invalidateQueries('address')
            handleClose()
        },
        onError: err => {
            toast.error(err.response.data.message[0], {
                theme: "colored",
            })
        }
    })

    const deleteAddress = (addressId) => {
        const payload = {
            addressId: addressId
        }
        deleteAddressMutation.mutate(payload)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const payloadData = {
            payload:{
                street: data.get('street'),
                state: data.get('state'),
                city: data.get('city'),
            },
            addressId:addressId
        }
        updateAddressMutation.mutate(payloadData)
        // console.log(payloadData)

    };

    const handleAddress=(address)=>{
        setFormData({
            ...formData,
            state:address.state,
            city:address.city,
            street:address.street
        })
    }

    const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    return (
        <Container className='pt-[100px]'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', padding:'0 10px' }}
            >
                <div className='w-full lg:w-[600px] bg-white text-black lg:h-[500px] rounded-xl flex flex-col items-center lg:px-5 py-6 px-2'>
                    <form onSubmit={handleSubmit} autoComplete="off" className='w-full'>
                        <h2 className='font-semibold text-lg mb-6'>Edit Address</h2>
                        <div className='bg-red px-3 py-5 text-black rounded-3xl w-full lg:h-[250px] h-auto mb-6'>
                            <div className=''>
                                <div className='form-group lg:w-full lg:mb-[21px] mb-[18px]'>
                                    <h2 className='font-semibold lg:text-[15px] text-sm text-white lg:leading-[19px] mb-2'>Street address</h2>
                                    <input type='text' onChange={handleChange} name='street' placeholder='' value={formData.street} className='h-[46px] px-3 border w-full rounded-lg' />
                                </div>
                                <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px]'>
                                    <div className='flex flex-col lg:w-[50%]'>
                                        <h2 className='font-semibold lg:text-[15px] text-sm text-white lg:leading-[19px] mb-2'>State</h2>
                                        <input type='text' name='state' onChange={handleChange} placeholder='' value={formData.state} className='h-[46px] px-3 border w-full rounded-lg' />
                                    </div>
                                    <div className='flex flex-col lg:w-[50%]'>
                                        <h2 className='font-semibold lg:text-[15px] text-sm text-white lg:leading-[19px] mb-2'>City</h2>
                                        <input type='text' name='city' onChange={handleChange} placeholder='' value={formData.city} className='h-[46px] px-3 border w-full rounded-lg' />
                                    </div>
                                </div>
                                {/* <div className='form-group lg:w-[465px] lg:mb-[50px] mb-8'>
                                <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Phone number</h2>
                                <input type='number' name='phoneNumber' placeholder='' value={selectedAddress.phone && selectedAddress.phone} className='h-[46px] px-3 border w-full' />
                            </div> */}
                            </div>
                        </div>
                        <button className='bg-red text-white w-full py-3 font-semibold rounded-xl'>Update Address</button>
                    </form>
                </div>
            </Modal>
            <div className='flex flex-col lg:flex-row lg:px-[100px] px-4 lg:mb-5'>
                <h3 className='cursor-pointer text-[#1071FF] font-medium text-base' onClick={logout}>Logout</h3>
                <div className='lg:px-[200px] font-bold text-[22px]'>
                    {
                        user &&
                        <h2 className=''>My Profile</h2>
                    }
                    {
                        user &&
                        <h2 className="">Welcome back, {user.user.first_name}</h2>

                    }
                </div>
            </div>


            <div className='lg:flex flex-col lg:flex-row justify-center gap-[100px] px-7 lg:px-0'>
                <div className='lg:flex flex-col lg:flex-row justify-center gap-[100px] px-1 lg:px-0'>
                    <div className='flex flex-col font-mulish'>
                        {/* <h2 className='font-bold text-[#030919] text-[28px] lg:leading-[35px] mb-[29px]'>My Profile</h2> */}
                        <p className='font-bold text-base mb-[39px]'>Shipping address</p>
                        <div className=''>
                            <form className='flex flex-col'>
                                {
                                    user &&
                                    <div className=''>
                                        <div className='form-group lg:w-[465px] lg:mb-[39px] mb-[18px]'>
                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Email address</h2>
                                            <input type='text' name='address' placeholder='' value={user.user.email} readOnly className='h-[46px] border w-full px-1' />
                                        </div>
                                        <div className='form-group lg:w-[465px] lg:mb-[39px]'>
                                            <h2 className='lg:font-normal font-bold text-base text-[#030919] lg:leading-[19px] mb-2'>Contact information</h2>
                                            <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px] w-full'>
                                                <div className='flex flex-col lg:w-[50%] w-full'>
                                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>First name</h2>
                                                    <input type='text' name='address' placeholder='' readOnly value={user.user.first_name} className='h-[46px] border w-full px-1' />
                                                </div>
                                                <div className='flex flex-col lg:w-[50%] w-full'>
                                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Last name</h2>
                                                    <input type='text' name='address' placeholder='' readOnly value={user.user.last_name} className='h-[46px] border w-full px-1' />
                                                </div>
                                            </div>
                                            {
                                                user.user?.company &&
                                                <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px]'>
                                                    <div className='flex flex-col lg:w-[50%]'>
                                                        <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Company name (optional)</h2>
                                                        <input type='text' name='address' placeholder='' readOnly={user.user?.company} value={user.user.company && user.user.company} className='h-[46px] border w-full' />
                                                    </div>
                                                    {/* <div className='flex flex-col lg:w-[50%]'>
                                                        <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Item quantity</h2>
                                                        <input type='text' name='address' placeholder='' className='h-[46px] border w-full' />
                                                    </div> */}
                                                </div>
                                            }

                                        </div>
                                    </div>
                                }

                                {
                                    <ul>
                                        {
                                            userAddress.map(address => {
                                                return (
                                                    <li className='mb-4 w-full' key={address.id}>
                                                        <div className='flex justify-between'>
                                                            <h2 className=''>
                                                                {address.street}, {address.city}, {address.state}
                                                            </h2>
                                                            <div className='flex gap-4'>
                                                                <Tooltip title="Edit">
                                                                    <IconButton>
                                                                        <BiEdit onClick={() => { handleOpen(address); handleAddress(address) }} className='lg:text-xl cursor-pointer' />
                                                                    </IconButton>
                                                                </Tooltip>
                                                                <Tooltip title="Delete">
                                                                    <IconButton>
                                                                        <MdDeleteOutline onClick={() => deleteAddress(address.id)} className='lg:text-xl text-red cursor-pointer' />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                        <hr className='text-line mb-4' />
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                    // userAddress.map(address => {
                                    //     return (
                                    //         <div className='mb-4' key={address.id}>
                                    //             <div className=''>
                                    //                 <div className="">
                                    //                     <label>
                                    //                         <input
                                    //                             type="radio"
                                    //                             value={address.id}
                                    //                             onChange={onAddressChange}
                                    //                             name='deliveryAddress'
                                    //                             className='mr-2'
                                    //                         />
                                    //                         {address.street}, {address.city}, {address.state}
                                    //                     </label>
                                    //                 </div>
                                    //             </div>
                                    //         </div>
                                    //         <div className='' key={address.id}>
                                    //             <div className='form-group lg:w-[465px] lg:mb-[21px] mb-[18px]'>
                                    //                 <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Street address</h2>
                                    //                 <input type='text' name='address' placeholder='' readOnly value={address.street} className='h-[46px] border w-full' />
                                    //             </div>
                                    //             <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px]'>
                                    //                 <div className='flex flex-col lg:w-[50%]'>
                                    //                     <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>State</h2>
                                    //                     <input type='text' name='state' placeholder='' readOnly value={address.state} className='h-[46px] border w-full' />
                                    //                 </div>
                                    //                 <div className='flex flex-col lg:w-[50%]'>
                                    //                     <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>City</h2>
                                    //                     <input type='text' name='city' placeholder='' readOnly value={address.city} className='h-[46px] border w-full' />
                                    //                 </div>
                                    //             </div>
                                    //             <div className='form-group lg:w-[465px] lg:mb-[50px] mb-8'>
                                    //                 <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Phone number</h2>
                                    //                 <input type='number' name='phoneNumber' placeholder='' readOnly={address?.phone} value={address.phone && address.phone} className='h-[46px] border w-full' />
                                    //             </div>
                                    //             <hr/>
                                    //         </div>
                                    //     )
                                    // })
                                }
                                {/* <div className='form-group lg:w-[465px] lg:mb-[21px] mb-[18px]'>
                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Street address</h2>
                                    <input type='text' name='address' placeholder='' className='h-[46px] border w-full' />
                                </div>
                                <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px]'>
                                    <div className='flex flex-col lg:w-[50%]'>
                                        <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>State</h2>
                                        <input type='text' name='state' placeholder='' className='h-[46px] border w-full' />
                                    </div>
                                    <div className='flex flex-col lg:w-[50%]'>
                                        <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>City</h2>
                                        <input type='text' name='city' placeholder='' value={userAddress.city} className='h-[46px] border w-full' />
                                    </div>
                                </div>
                                <div className='form-group lg:w-[465px] lg:mb-[50px] mb-8'>
                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Phone number</h2>
                                    <input type='number' name='phoneNumber' placeholder='' className='h-[46px] border w-full' />
                                </div>
                                <button className='lg:w-full font-bold text-btn_text bg-red text-base py-[14px] rounded-[4px]'>Save</button> */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[320px]">
                    <div className=''>
                        {
                            isLoading ? 'Loading...'
                                :
                                <>
                                    <h3 className='lg:font-bold text-xl text-[#25252D] mb-[7px]'>Order Summary</h3>
                                    <hr className='text-line mb-7' />
                                    {/* <p className='font-semibold text-base text-[#000000] lg:mb-6'>Order number : {orderHistoryRef.current.length}</p> */}
                                    <div className='flex flex-col lg:gap-5 lg:mb-9'>
                                        {
                                            // orderHistory.length > 0 ?
                                            orderHistoryRef.current.length > 0 ?
                                                orderHistoryRef.current.map((order) => {
                                                    return (
                                                        <div className='' key={order.id}>
                                                            <div className='flex justify-between text-base'>
                                                                <h3 className='font-normal'>Number of items: </h3>
                                                                {/* <h3 className=''>{order.order_product.length}</h3> */}
                                                                {
                                                                    order.order_product.reduce((acc, item) => acc + item.quantity, 0)
                                                                }
                                                            </div>
                                                            <div className="flex flex-col mb-4">
                                                                {
                                                                    order.order_product?.map(item => {
                                                                        return (
                                                                            <div className='flex justify-between mb-1 h-[42px] items-center w-full' key={item.product?.id}>
                                                                                <div className='w-9 h-8 lg:mr-5 mr-2'>
                                                                                    <img src={item.product?.image_url} alt={item.product?.name} />
                                                                                </div>
                                                                                <div className='flex justify-between w-[60%] lg:w-[50%]'>
                                                                                    <div className='flex flex-col'>
                                                                                        <h3 className='font-medium text-[9px] text-[#19191D]'>{item.product?.name}</h3>
                                                                                        <h3 className='text-[6px] font-medium text-black'>X {item.quantity}</h3>
                                                                                    </div>
                                                                                    {
                                                                                        item.product?.amount === '0' ? 
                                                                                        <div className='text-[11px] font-normal text-black'>{item.product?.amount_yearly}</div>
                                                                                        :
                                                                                        <div className='text-[11px] font-normal text-black'>{item.product?.amount}</div>
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            <div className='flex justify-between text-base font-normal text-black'>
                                                                <h3 className='font-normal'>Subtotal: </h3><h3 className=''>{helperFunction.nairaFormat(order.total_amount)}</h3>
                                                            </div>
                                                            <div className='flex justify-between text-base font-normal text-black'>
                                                                <h3 className=''>Bikee delivery: </h3><h3 className=''>Free</h3>
                                                            </div>
                                                            <hr className='text-[#EBEBEB] my-3' />
                                                            <div className='flex justify-between text-black'>
                                                                <h3 className='font-normal text-[19px]'>Total </h3><h3 className='text-xl font-bold'>{helperFunction.nairaFormat(order.total_amount)}</h3>
                                                            </div>
                                                            <div className='flex justify-between font-normal text-base'>
                                                                <h3 className=''>Payment options: </h3>
                                                                <div className='flex'>
                                                                    <h3 className='font-semibold'>{order.payment?.provider}</h3>
                                                                    {
                                                                        order.payment.status === 'successful' ?
                                                                            <div className='flex items-center text-green-700 gap-1'>
                                                                                <h3 className='text-green-700'>(Paid)</h3>
                                                                                <IoCheckmarkCircleOutline />
                                                                            </div>
                                                                            :
                                                                            <h3 className={`${order.payment.status === 'pending' ? 'text-yellow-500' : 'text-red'} `}>({order.payment.status})</h3>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className='flex justify-between font-normal text-base'>
                                                                <h3 className=''>Expected time of arrival: </h3>
                                                                <h3 className='font-semibold'>11th-18th April, 2023</h3>
                                                            </div>
                                                            <div className='flex justify-between font-normal text-base'>
                                                                <h3 className=''>Order date: </h3>
                                                                <h3 className='font-semibold text-right'><Moment date={order.created_at} /></h3>
                                                            </div>
                                                            {/* <div className='flex justify-between'>
                                                        <h3 className='font-medium'>Order ref: </h3><h3 className=''>{order.order_ref}</h3>
                                                    </div> */}
                                                            <div className='flex justify-between text-base font-normal'>
                                                                <h3 className='' >Delivery option:</h3><h3 className='font-semibold'>Free delivery</h3>
                                                            </div>
                                                            <div className='flex justify-between text-base font-normal'>
                                                                <h3 className='' >Order ref:</h3><h3 className='font-semibold'>{order.order_ref}</h3>
                                                            </div>
                                                            {
                                                                order.address &&
                                                                <div className='flex justify-between text-base font-normal'>
                                                                    <h3 className=''>Shipping address: </h3>
                                                                    <h3 className='text-end font-semibold'>{order.address?.street}, {order.address?.city}, {order.address?.state}</h3>
                                                                </div>
                                                            }

                                                            <hr className='text-[#EBEBEB] my-5' />
                                                        </div>
                                                    )
                                                })
                                                :
                                                error ?
                                                    'Error fetching data'
                                                    :
                                                    'You currently have no order history'
                                        }
                                        {/* {
                                    cart.map(({ id, image_url, total, quantity, name, total_amount }) => {
                                        return (
                                            <OrderCard
                                                key={id}
                                                image={image_url}
                                                price={total}
                                                quantity={quantity}
                                                id={id}
                                                name={name}
                                            />
                                        )
                                    })
                                } */}
                                    </div>
                                </>

                        }

                    </div>

                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`

    /*hide scrool bar for Safari, Chrome and Opera */
    .container-snap::-webkit-scrollbar{
        display: none;
    }

    /*hide scrool bar for Edge IE and firefox */
    .container-snap{
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

`

export default UserProfile