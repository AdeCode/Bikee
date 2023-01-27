import httpService from "./httpService";

async function login(payload){
    const {data} = await httpService.guestInstance.post('/login', payload)
    return data
}

async function register(payload){
    const {data} = await httpService.guestInstance.post('/new/account', payload)
    return data
}

async function logout(){
    const {data} = await httpService.secureInstance.post('/logout')
    return data
}

const authService = {
    login,
    register,
    logout,
}

export default authService