import httpService from "./httpService";


async function addOrder(payload){
    const {data} = await httpService.secureInstance.post('/save-order', payload);
    return data
}

async function getOrders({queryKey}){
    const [_key, {orderId}] = queryKey
    const {data} = await httpService.guestInstance.get(`/products/${orderId}`)
    return data
}

async function getUserOrders({queryKey}){
    const [_key, {productId}] = queryKey
    const {data} = await httpService.get(`/products/${productId}`)
    return data
}


const orderService = {
    addOrder,
    getOrders,
    getUserOrders,
}

export default orderService