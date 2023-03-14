import httpService from "./httpService";

// const auth = authHeader()
// console.log(auth)

async function addProduct(payload){
    const {data} = await httpService.secureInstance.post('/products', payload);
    return data
}

async function register(payload){
    const {data} = await httpService.guestInstance.post('/create-user', payload)
    return data
}

async function getProducts(){
    const {data} = await httpService.guestInstance.get('/products')
    return data
}

async function getProduct({queryKey}){
    const [_key, {productId}] = queryKey
    const {data} = await httpService.guestInstance.get(`/products/${productId}`)
    return data
}

async function deleteProduct(payload){
    const {productId} = payload
    const {data} = await httpService.secureInstance.delete(`/products/${productId}`)
    return data
}

async function updateProduct(payload){
    const {productId} = payload
    console.log(productId)
    const {data} = await httpService.secureInstance.put(`/products/${productId}`,payload)
    return data
}

async function uploadImage(payload){
    const {data} = await httpService.secureInstance.post(`/images`, payload, {
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
    deleteProduct,
}

export default productService