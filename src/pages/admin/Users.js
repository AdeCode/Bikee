import React from 'react'
import orderService from '../../@services/orderService'
import { useQuery } from 'react-query'
// import UsersTable from '../../components/UsersTable'
import LinearLoader from '../../components/@shared/LinearLoader'
import UsersTable from '../../components/tables/UsersTable'


function Users() {
    const {data:users, isLoading, error, isError} = useQuery('users',orderService.getWebUsers)
    // users && console.log(users.data.data)

  return (
    <div className='w-full'>
        <h2 className=''>Users</h2>
        {
            isLoading ? <LinearLoader/> 
            : 
            <UsersTable
                data={users.data.data}
            />
        }
    </div>
  )
}

export default Users