import httpService from "./httpService";


async function addOrder(payload){
    const {data} = await httpService.post('/save-order', payload);
    return data
}

async function getOrders({queryKey}){
    const [_key, {orderId}] = queryKey
    const {data} = await httpService.get(`/products/${orderId}`)
    return data
}


const orderService = {
    addOrder,
    getOrders,
    
}

export default orderService