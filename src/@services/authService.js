import httpService from "./httpService";

async function login(payload){
    const {data} = await httpService.guestInstance.post('/login', payload)
    return data
}

async function register(payload){
    const {data} = await httpService.guestInstance.post('/new/account', payload)
    return data
}

async function forgotPassword(payload){
    const {data} = await httpService.guestInstance.post('/forgot/password', payload)
    return data
}

async function verifyToken(payload){
    const {data} = await httpService.guestInstance.post('/verify-token', payload)
    return data
}

async function resetPassword(payload){
    const {data} = await httpService.guestInstance.post('/password/reset', payload)
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
    forgotPassword,
    verifyToken,
    resetPassword,
}

export default authService