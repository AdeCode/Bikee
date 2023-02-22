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




const orderService = {
    addOrder,
    getOrders,
    getUserOrders,
    generatePaymentLink
}

export default orderService