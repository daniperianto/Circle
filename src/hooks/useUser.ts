import { useState } from "react"
import { API } from "../libs/api"
import User from "../model/User"

export function useUser() {
    const user = JSON.parse(localStorage.user)
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
        console.log("test")
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
        getFollowers,
        getFollowing,
        getSuggestedAccount
    }
}