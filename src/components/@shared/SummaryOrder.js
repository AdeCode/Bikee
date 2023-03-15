import React, { useContext, useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import orderData from './OrderData'
import OrderCard from './OrderCard'
import { CartContext } from '../../contexts/CartContext'
// import Modal from './Modal'
import { useMutation } from 'react-query'
import orderService from '../../@services/orderService'
import helperFunction from '../../@helpers/helperFunction'
import { v4 as uuid } from 'uuid';
import Iframe from 'react-iframe'
import PaymentModal from './PaymentModal'
import { AuthContext } from '../../contexts/AuthContext'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components'


const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // width: 600,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
    display: 'flex',
    justifyContent: 'center',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

function SummaryOrder({ addressId }) {
    const [paymentType, setPaymentType] = useState('')
    const [paymentURL, setPaymentURL] = useState('')
    const [bikeeBanks, setBikeeBanks] = useState([])
    const navigate = useNavigate()
    const { state: cartState, dispatch } = useContext(CartContext)
    const totalSumRef = useRef(0)
    const orderRef = uuid().slice(0, 13)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    // cartState && console.log(cartState)

    const { state: user } = useContext(AuthContext)
    // user && console.log(user)


    //console.log(helperFunction.getTotalOrderAmount(cartState))

    const addOrderMutation = useMutation(orderService.addOrder, {
        onSuccess: res => {
            console.log(res)
            //openModal()
        },
        onError: err => {
            console.log(err.message)
        }
    })

    const generatePaymentLinkMutation = useMutation(orderService.generatePaymentLink, {
        onSuccess: res => {
            console.log('submitting order...')
            submitOrder()
            if (paymentType === 'PAYSTACK') {
                window.open(res.data, '_self')
            } else {
                //show modal for bank transfers
                handleOpen()
            }
        },
        onError: err => {
            console.log(err.message)
        }
    })

    const getBikeeBanks = useMutation(orderService.getBanks, {
        onSuccess: res => {
            // console.log(res)
            setBikeeBanks(res.data.data)
        },
        onError: err => {
            console.log(err.message)
        }
    })

    useEffect(() => {
        getBikeeBanks.mutate()
    }, [])

    const submitOrder = () => {
        let payload = helperFunction.getOrderData(cartState)
        payload.total_amount = helperFunction.getTotalOrderAmount(cartState)
        payload.order_ref = orderRef
        payload.payment_method = paymentType
        payload.delivery_address_id = addressId
        console.log('submit order')
        console.log(payload)
        addOrderMutation.mutate(payload)
    }

    const processPayment = () => {
        let payload = {
            amount: helperFunction.getTotalOrderAmount(cartState),
            provider: 'PAYSTACK',
            order_ref: orderRef
        }
        console.log('process payment')
        console.log(payload)
        generatePaymentLinkMutation.mutate(payload)
    }

    const [modal, setModal] = useState(false)

    const [paymentModal, setPaymentModal] = useState(false)

    const closeModal = () => {
        setModal(false)
        console.log(modal)
    }

    const openModal = () => {
        setModal(true)
        console.log(modal)
    }

    const closePaymentModal = () => {
        setPaymentModal(false)
        console.log(paymentModal)
    }

    const openPaymentModal = () => {
        setPaymentModal(true)
        console.log(modal)
    }

    if (cartState) {
        let total = cartState.map(item => item.total)
        if (total.length > 0) {
            const TotalSum = total.reduce(
                (accumulator, currentValue) => accumulator + currentValue)
            totalSumRef.current = TotalSum
        }
    }


    const onChange = (event) => {
        setPaymentType(event.target.value)
        console.log(paymentType)
    }

    const checkOut = () => {
        navigate("/order-summary");
    }

    return (

        <Section className=''>
            {modal &&
                <Modal
                    title='Thank you for your order!'
                    subTitle=''
                    closeModal={() => closeModal()}
                >
                    <div className='text-white'>
                        <h3 className='font-normal text-base'>Order No. #809320, #249320, and #809320.</h3>
                        <h4 className='font-normal text-sm'>We’ll email you an order confirmation with details of your order. Please not that bikee will not send any rider to request for an extra delivery fee.</h4>
                        <p className='font-normal text-sm mt-9'>Thanks for patronizing...</p>
                        <p className='font-normal text-sm'>Motion Mobility.</p>
                    </div>
                </Modal>
            }
            {paymentModal &&
                <PaymentModal
                    closeModal={() => closePaymentModal()}
                >
                    <Iframe url={paymentURL}
                        width="640px"
                        height="420px"
                        id=""
                        className=""
                        display="block"
                        position="relative"
                    />
                </PaymentModal>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}
            >
                <div className='w-[400px] bg-white text-black lg:h-[500px] rounded-xl flex flex-col items-center px-5 py-6'>
                    <h2 className='font-semibold text-lg mb-6'>Transfer to Bank Account</h2>
                    <p className='mb-4 text-medium'>Make transfer to any of the account below</p>
                    <div className='bg-red px-3 py-5 text-white rounded-3xl w-full h-[300px] mb-6'>
                        {
                            bikeeBanks.map(bank => {
                                return (
                                    <div className='flex justify-center' key={bank.id}>
                                        <p className='font-medium text-base mb-2'>{bank.account_number} {bank.name}, {bank.account_name}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className='bg-red text-white w-full py-3 text-semibold rounded-xl' onClick={()=>navigate('/profile')}>Done</button>
                </div>
                {/* {children} */}
            </Modal>
            <h3 className='lg:font-bold text-xl text-[#25252D] mb-[7px]'>Order Summary</h3>
            <hr className='text-line mb-7' />
            <p className='font-semibold text-base text-[#000000] lg:mb-6'>Cart amount : {cartState.length} items</p>
            <div className='flex flex-col lg:gap-2'>
                {
                    cartState.map(({ id, image_url, total, quantity, name }) => {
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
                }
            </div>
            <div className='flex flex-col font-normal text-base mt-7'>
                <div className='flex justify-between'>
                    <h3>Subtotal</h3><h3 className=''>{helperFunction.nairaFormat(totalSumRef.current)}</h3>
                </div>
                <div className='flex justify-between mt-3'>
                    <h3 className='font-normal text-xl' >Bikee delivery</h3><h3 className=''>Free</h3>
                </div>
            </div>
            <hr className='text-line mb-7' />
            <div className='flex justify-between'>
                <h2 className='font-medium text-xl'>Total</h2> <span className='font-bold text-xl'>{helperFunction.nairaFormat(totalSumRef.current)}</span>
            </div>
            <hr className='text-line mb-7' />
            <div className='text-[#000000]'>
                <h3 className='font-semibold text-lg lg:mb-3'>Payment options</h3>
                <div className='lg:mb-[39px] flex flex-col lg:gap-[18px]'>
                    <div className="">
                        <label>
                            <input
                                type="radio"
                                value="PAYSTACK"
                                onChange={onChange}
                                name='payment_type'
                                className='mr-2'
                            />
                            Pay with paystack
                            <p className='text-[#828282] font-normal text-sm'>Pay online with paystack</p>
                        </label>
                    </div>
                    {/* <div className="">
                        <label>
                            <input
                                type="radio"
                                value="pay_later"
                                checked={paymentType === "pay_later"}
                                onChange={onChange}
                                name='payment_type'
                                className='mr-2'
                            />
                            Buy now pay later (coming soon)
                            <p className='text-[#828282] font-normal text-sm'>Coming soon</p>
                        </label>
                    </div> */}
                </div>
                <div className='lg:mb-[39px] flex flex-col lg:gap-[18px]'>
                    {
                        bikeeBanks.length > 0 &&
                        <div className="">
                            <label>
                                <input
                                    type="radio"
                                    value="BANK_TRANSFER"
                                    onChange={onChange}
                                    name='payment_type'
                                    className='mr-2'
                                />
                                Make transfer to Bank Account
                                {
                                    bikeeBanks.map(bank => {
                                        return (
                                            <div className='flex' key={bank.id}>
                                                <p className='text-[#828282] font-normal text-sm'>{bank.account_number} {bank.name}, {bank.account_name}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                                {/* <p className='text-[#828282] font-normal text-sm'>Pay online with paystack</p> */}
                            </label>
                        </div>

                    }

                    {/* <div className="">
                        <label>
                            <input
                                type="radio"
                                value="pay_later"
                                checked={paymentType === "pay_later"}
                                onChange={onChange}
                                name='delivery_type'
                                className='mr-2'
                            />
                            Buy now pay later (coming soon)
                            <p className='text-[#828282] font-normal text-sm'>Coming soon</p>
                        </label>
                    </div> */}
                </div>
                <div className='lg:w-[400px] border-[3px] border-[#D9D9D9] py-4 px-5 rounded-2xl lg:mb-6 text-[14.8px]'>
                    <h2 className='text-black font-bold'>Target delivery date: 11 April - 18 April 2023</h2>
                    <p className='text-[#979797] font-bold'>
                        Please note that this is an estimate and can change depending on our delivery partners and order backlog. If there is a change, we'll always update it on your order page.
                        You'll receive a tracking and confirmation email from our delivery partner approximately 1 week before your order is due to be delivered.
                    </p>
                    <ul className='font-bold text-black'>
                        <li>1 - year warranty</li>
                        <li>Free Bike Shipping</li>
                    </ul>
                </div>
                <button onClick={processPayment} disabled={paymentType === '' ? true : false} className='bg-red text-white py-[13px] px-[26px] lg:w-fit w-full rounded-[4px] lg:leading-7'>
                    Proceed To Payment
                </button>
                {/* <button onClick={processPayment} disabled={paymentType !== 'paystack' ? true : false} className='bg-red text-white py-[13px] px-[26px] lg:w-fit w-full rounded-[4px] lg:leading-7'>
                    Proceed To Payment
                </button> */}
            </div>
        </Section>
    )
}

const Section = styled.section`
    button[disabled]{
        opacity: 0.2;
        cursor: not-allowed;
    }
`


export default SummaryOrder