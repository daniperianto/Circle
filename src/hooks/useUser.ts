import { useState } from "react"
import { API } from "../libs/api"
import User from "../model/User"
import { useNavigate } from "react-router-dom"
import {toast} from "react-toastify";
import promise = toast.promise;

export function useUser() {
    const user = JSON.parse(localStorage.user)
    const navigate = useNavigate()
    const [ isFollowing, setIsFollowing ] = useState(false)
    const [ following, setFollowing ] = useState(-1)
    const [ followers, setFollowers ] = useState(-1)
    const [ suggestedAccount, setSuggestedAccount ] = useState<User[]>([
        {
            id: 0,
            username: "",
            fullname: "",
            photo_profile: ""
        }
    ])

    async function isFollowingChange(id: number | undefined) {
        try {
            if(isFollowing) {
                await API.delete(`/following/delete/${id}`)
                    .then( function (response) {
                        if(response.data.message == "success") setIsFollowing(false)
                    })
                    .catch( function (error)  {
                        if(error.response.data.message == "failed") setIsFollowing(false)
                        if(error.response.status == 401) navigate("/login")
                })
            } else {
                await API.post(`/following/add/${id}`)
                    .then( function (response) {
                        if(response.data.message == "success") setIsFollowing(true)
                    })
                    .catch( function (error) {
                        if(error.response.data.message == "failed") setIsFollowing(true)
                        if(error.response.data.message == "query error") setIsFollowing(true)
                        if(error.response.status == 401) navigate("/login")
                    })
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    async function getSuggestedAccount() {
        try {
            const accounts = await API.get(`/following/suggested-accounts`)
            setSuggestedAccount(accounts.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function getFollowing() {
        try {
            const total_followings = await API.get(`/following/${user.id}/count`)
            setFollowing(total_followings.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function getFollowers() {
        try {
            const total_followers = await API.get(`/followers/${user.id}/count`)
            setFollowers(total_followers.data)
        } catch(error) {
            console.log(error)
        }
    }

    return {
        followers,
        following,
        suggestedAccount,
        isFollowing,
        setIsFollowing,
        getFollowers,
        getFollowing,
        getSuggestedAccount,
        isFollowingChange
    }
}