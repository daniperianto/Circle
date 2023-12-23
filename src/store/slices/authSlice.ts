import User from "../../model/User"
import { createSlice } from "@reduxjs/toolkit"
import { setAuthToken } from  "../../libs/api"

const initialAuthState: User = {
    id: 0,
    fullname: "",
    username: "",
    photo_profile: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN: (_, action) => {
            const payload = action.payload

            setAuthToken(payload.token)
            localStorage.setItem("token", payload.data.token)

            const user: User = {
                id: payload.data.registeredUser.id,
                fullname: payload.data.registeredUser.fullname,
                username: payload.data.user.username,
                email: payload.data.user.email
            }

            return user
        },
        AUTH_CHECK: (_, action) => {
            const payload = action.payload

            const user: User = {
                id: payload.data.registeredUser.id,
                fullname: payload.data.registeredUser.fullname,
                username: payload.data.user.username,
                email: payload.data.user.email
            }

            return user
        },
        AUTH_ERROR: () => {
            localStorage.removeItem("token")
        },
        AUTH_LOGOUT: () => {
            localStorage.removeItem("token")
        }
    }
})
