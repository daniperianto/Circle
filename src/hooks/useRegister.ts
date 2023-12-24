
import User from "../model/User";
import { API } from "../libs/api"
import React from "react";
import { useNavigate } from "react-router-dom";
import notification from "../libs/notification";
import { useDispatch  } from "react-redux";
import { isJustRegister } from "../store/rootReducer";





export function useRegister() {
    const navigate = useNavigate()
    const dispatch = useDispatch()


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
        

        outer:
        try {
            await API.post('/register', form)
                    .then(function (response) {
                        console.log("success: " + response )
                    }).catch( function (error) {
                        console.log(error.response.data.message)
                        message = error.response.data.message
                    }) 

            
            setForm({
                fullname: "",
                email: "",
                password: ""
            })
            if(message != '') {
                notification.error(message)
                break outer
            }
            dispatch(isJustRegister())
            notification.success("success")
            navigate("/login")
            
            
        } catch (error) {
            navigate('/register')
            throw error
        }


    }

    return {
        handleChange,
        handleRegister,
        form
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