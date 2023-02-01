// export const initialState = {
//     token:'',
//     isAuthenticated:false,
//     firstName:'',
//     userId:'',
//     customer:'',
//     loading:false,
//     errorMessage: null

// }

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            localStorage.setItem('user',JSON.stringify(action.payload.data))
            localStorage.setItem('isAuthenticated',true)
            localStorage.setItem('token',JSON.stringify(action.payload.token))
            return {
                ...state,
                token:action.payload.token,
                isAuthenticated:true,
                user:action.payload.data
            }

        case 'LOGOUT':
            localStorage.clear()
            return {
                ...state,
                isAuthenticated:false,
                token:'',
                user:null
            }

        case 'ADD_CARD':
            return {
                ...state,
                card:action.card
            }

        case 'ADDUSERNAME':
            return {...state, username:'Admini'}

        case 'LOGIN_ERROR':
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            }

        default:
            return state
    }
}