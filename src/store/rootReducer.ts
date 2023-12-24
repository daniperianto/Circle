import { combineReducers } from "@reduxjs/toolkit"
import { authSlice } from "./slices/authSlice"
import { newlyRegisterSlice } from "./slices/newlyRegisterSlice"

export const { AUTH_LOGIN, AUTH_CHECK, AUTH_ERROR, AUTH_LOGOUT } = authSlice.actions
export const { isJustRegister, isAlreadyRegister } = newlyRegisterSlice.actions

export const newlyRegisterReducer = newlyRegisterSlice.reducer
export const authReducer = authSlice.reducer

const rootReducer = combineReducers({
    auth: authReducer,
    newlyRegister: newlyRegisterReducer
})

export default rootReducer