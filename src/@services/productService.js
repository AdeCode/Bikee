import httpService from "./httpService";
import authHeader from "./authHeader";


// const auth = authHeader()
// console.log(auth)

async function addProduct(payload){
    const {data} = await httpService.post('/products', payload);
    return data
}

async function register(payload){
    const {data} = await httpService.post('/create-user', payload)
    return data
}

async function getProducts(){
    const {data} = await httpService.get('/products')
    return data
}

const authService = {
    addProduct,
    register,
    getProducts,
}

export default authService