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

async function getProduct({queryKey}){
    const [_key, {productId}] = queryKey
    const {data} = await httpService.get(`/products/${productId}`)
    return data
}

async function updateProduct({queryKey},payload,productId){
    // const [_key, {productId}] = queryKey
    console.log(queryKey)
    const {data} = await httpService.put(`/products/${productId}`,payload)
    return data
}

async function uploadImage(payload){
    const {data} = await httpService.post(`/images`, payload, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return data
}

const productService = {
    addProduct,
    register,
    getProducts,
    getProduct,
    updateProduct,
    uploadImage,
}

export default productService