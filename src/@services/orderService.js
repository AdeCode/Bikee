import httpService from "./httpService";


async function addOrder(payload){
    const {data} = await httpService.secureInstance.post('/save-order', payload);
    return data
}

async function getOrders({queryKey}){
    const [_key, {userId}] = queryKey
    const {data} = await httpService.secureInstance.get(`/all-orders/${userId}`)
    return data
}

async function getUserOrders({queryKey}){
    const [_key, {productId}] = queryKey
    const {data} = await httpService.get(`/products/${productId}`)
    return data
}

async function generatePaymentLink(payload){
    const {data} = await httpService.secureInstance.post('/payments', payload);
    return data
}

async function getBanks(){
    const {data} = await httpService.guestInstance.get(`/bikee-banks`)
    return data
}

async function getWebUsers(){
    const {data} = await httpService.secureInstance.get(`/web-users`)
    return data
}




const orderService = {
    addOrder,
    getOrders,
    getUserOrders,
    generatePaymentLink,
    getBanks,
    getWebUsers
}

export default orderService