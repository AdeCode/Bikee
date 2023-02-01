import React, { createContext, useReducer } from 'react'
import { authReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext()

const initialState = {
    // isAuthenticated: false,
    // user: null,
    // token: null,
  };

function AuthContextProvider({children}) {
    const [state, dispatch] = useReducer(authReducer, initialState)
  return (
    <AuthContext.Provider value={{state, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider