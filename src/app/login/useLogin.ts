import { useDispatch  } from "react-redux"
import React from "react"
import User from "../../model/User.ts"
import { AUTH_LOGIN } from "../../store/rootReducer.ts"
import { API } from "../../libs/api.ts"



interface UserLogin {
    user1email: string,
    password: string
}

export function useLogin() {
    const dispatch = useDispatch()

    const [form, setForm] = React.useState<UserLogin>({
        user1email: "",
        password: ""
    })


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function handleLogin() {

        const login: User = {
            password: form.password
        }
        form.user1email.startsWith('@') ? login.username = form.user1email : login.email = form.user1email

        const response = await API.post("/auth/login", login)

        
        dispatch(AUTH_LOGIN(response.data))
        setForm({
            user1email: "",
            password: ""
        })
        
        window.location.reload()

    }

    return {
        handleChange,
        handleLogin,
        form
    }
}