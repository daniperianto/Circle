import User from "../../model/User.ts";
import { API } from "../../libs/api.ts"
import React from "react";
import {useNavigate} from "react-router-dom";





export default function useRegister() {
    const navigate = useNavigate();


    const[form, setForm] = React.useState<User>({
        fullname: "",
        email: "",
        password: ""
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function handleRegister() {
        await API.post('/auth/register', form)
        setForm({
            fullname: "",
            email: "",
            password: ""
        })

        navigate("/login")
    }

    return {
        handleChange,
        handleRegister,
        form
    }
}


