
import User from "../model/User";
import { API } from "../libs/api"
import React from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";


export function useRegister() {
    const navigate = useNavigate()


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
        let message: string = ''
        toast("test2")

        outer:
        try {
            await API.post('/register', form)
                    .then(function (response) {
                        console.log("success: " + response )
                    }).catch( function (error) {
                        console.log(error.response.data.message)
                        notify(error.response.data.message, 'error')
                        message = error.response.data.message
                    }) 

                    
            if(message != '') {
                window.location.reload()
                toast("test")
                break outer
            }
            notify("register success", 'info')
            console.log("success")
            navigate("/login")
            
        } catch (error) {
            navigate('/register')
            throw error
        }


    }

    return {
        handleChange,
        handleRegister
    }
}



const useLogin = (user: User) => {


    API.post("/login", user)
        .then( function (response) {
            localStorage.setItem('token', response.data.token)
            console.log(response.data.token)
            
        }).catch( function (error) {
            if(error.response) {
                console.log(error.response.data.message)
            }
        })
}

export default { useRegister , useLogin }