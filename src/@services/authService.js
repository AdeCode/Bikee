import httpService from "./httpService";

async function login(payload){
    const {data} = await httpService.post('/login', payload)
    return data
}

async function register(payload){
    const {data} = await httpService.post('/new/account', payload)
    return data
}

const authService = {
    login,
    register,
}

export default authService