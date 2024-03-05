import User from "../../model/User"
import {createSlice} from "@reduxjs/toolkit"
import {setAuthToken} from "../../libs/api"

const initialAuthState: User = {
    id: 0,
    fullname: "",
    username: "",
    photo_profile: "",
    background_image: ""
}


export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN: (_state, action) => {
            const payload = action.payload

            setAuthToken(payload.token)
            localStorage.setItem("token", payload.token)
            localStorage.setItem('user', JSON.stringify(payload.registeredUser))

            const user: User = {
                id: payload.registeredUser.id,
                fullname: payload.registeredUser.fullname,
                username: payload.registeredUser.username,
                photo_profile: payload.registeredUser.photo_profile,
                background_image: payload.registeredUser.background_image,
            }


            return user
        },
        AUTH_CHECK: (_, action) => {
            const a = action.payload


            return a
        },
        AUTH_ERROR: () => {
            localStorage.removeItem("token")
            localStorage.removeItem("user")

        },
        AUTH_UPDATE: (_, action) => {
            const payload = action.payload

            const user: User = {
                id: payload.id,
                fullname: payload.fullname,
                username: payload.username,
                photo_profile: payload.photo_profile,
                background_image: payload.background_image,
                bio: payload.bio,
                created_at: payload.created_at
            }

            localStorage.setItem("user", JSON.stringify(user))
        },
        AUTH_LOGOUT: () => {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            
        }
    }
})
