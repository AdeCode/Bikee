import React, {useContext, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import orderData from './OrderData'
import OrderCard from './OrderCard'
import { CartContext } from '../../contexts/CartContext'
import Modal from './Modal'
import {useMutation} from 'react-query'
import orderService from '../../@services/orderService'
import helperFunction from '../../@helpers/helperFunction'
import { v4 as uuid } from 'uuid';
import Iframe from 'react-iframe'
import PaymentModal from './PaymentModal'
import { AuthContext } from '../../contexts/AuthContext'

function SummaryOrder() {
    const [paymentType, setPaymentType] = useState('')
    const [paymentURL, setPaymentURL] = useState('')
    const navigate = useNavigate()
    const {state:cartState, dispatch} = useContext(CartContext)
    const totalSumRef = useRef(0)
    const orderRef = uuid().slice(0,13)

    cartState && console.log(cartState)

    const {state:user} = useContext(AuthContext)
    user && console.log(user)

   
    //console.log(helperFunction.getTotalOrderAmount(cartState))

    const addOrderMutation = useMutation(orderService.addOrder,{
        onSuccess: res => {
            console.log(res)
            openModal()
            //navigate('/dashboard')
        },
        onError: err => {
            console.log(err.message)
        }
    })

    const generatePaymentLinkMutation = useMutation(orderService.generatePaymentLink,{
        onSuccess: res => {
            console.log(res)
            setPaymentURL(res.data)
            openPaymentModal()
            submitOrder()
        },
        onError: err => {
            console.log(err.message)
        }
    })

    const submitOrder = () => {
        let payload = helperFunction.getOrderData(cartState)
        payload.total_amount=helperFunction.getTotalOrderAmount(cartState)
        payload.order_ref=orderRef
        console.log('submit order')
        console.log(payload)
        addOrderMutation.mutate(payload)
    }

    const processPayment = () => {
        let payload = {
            amount:helperFunction.getTotalOrderAmount(cartState),
            provider:'PAYSTACK',
            order_ref:orderRef
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

    if(cartState){
        let total = cartState.map(item => item.total)
        if (total){
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
        
        <div className=''>
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
            <h3 className='lg:font-bold text-xl text-[#25252D] mb-[7px]'>Order Summary</h3>
            <hr className='text-line mb-7' />
            <p className='font-semibold text-base text-[#000000] lg:mb-6'>Cart amount : {cartState.length} items</p>
            <div className='flex flex-col lg:gap-2'>
                {
                    cartState.map(({ id, image_url, price, quantity, name }) => {
                        return (
                            <OrderCard
                                key={id}
                                image={image_url}
                                price={price}
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
                    <h3>Subtotal</h3><h3 className=''>N{totalSumRef.current}</h3>
                </div>
                <div className='flex justify-between mt-3'>
                    <h3 className='font-normal text-xl' >Bikee delivery</h3><h3 className=''>Free</h3>
                </div>
            </div>
            <hr className='text-line mb-7' />
            <div className='flex justify-between'>
                <h2 className='font-medium text-xl'>Total</h2> <span className='font-bold text-xl'>N{totalSumRef.current}</span>
            </div>
            <hr className='text-line mb-7' />
            <div className='text-[#000000]'>
                <h3 className='font-semibold text-lg lg:mb-3'>Payment options</h3>
                <div className='lg:mb-[39px] flex flex-col lg:gap-[18px]'>
                    <div className="">
                        <label>
                            <input
                                type="radio"
                                value="paystack"
                                checked={paymentType === "paystack"}
                                onChange={onChange}
                                name='delivery_type'
                                className='mr-2'
                            />
                            Pay with paystack
                            <p className='text-[#828282] font-normal text-sm'>Pay online with paystack</p>
                        </label>
                    </div>
                    <div className="">
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
                    </div>
                </div>
                <button onClick={processPayment} disabled={paymentType !== 'paystack' ? true : false} className='bg-red text-white py-[13px] px-[26px] lg:w-fit w-full rounded-[4px] lg:leading-7'>
                    Proceed To Payment
                </button>
            </div>
        </div>
    )
}

export default SummaryOrder