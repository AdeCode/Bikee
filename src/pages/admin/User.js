import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import {useNavigate} from 'react-router-dom'
import orderService from '../../@services/orderService';



function User() {
    const {userId} = useParams()

    const navigate = useNavigate()


    const {data:user, isLoading, error, isError} = useQuery(['user',{userId}], orderService.getUser)

    // user && console.log(user.data)

    if (isLoading) return 'Loading...'

    if (isError) {
        return <span>{error.message}</span>
    }

   
  return (
    <div className='flex flex-col w-[500px] mt-8'>
        <h3 className='cursor-pointer text-blue mb-4' onClick={()=>navigate(-1)}>Go back</h3>
        <h2 className='font-semibold text-base mb-5'>User Details</h2>
        <div className='flex flex-col w-[300px]'>
            
            <div className=''>
                <div className='flex justify-between'>
                    <h3>First Name:</h3>
                    <h3 className='font-medium'>{user.data.first_name}</h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Last Name:</h3>
                    <h3 className='font-medium'>{user.data.last_name}</h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Phone:</h3>
                    <h3 className='font-medium'>{user.data.phone}</h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Email:</h3>
                    <h3 className='font-medium'>{user.data.email}</h3>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default User