import { useState } from "react"
import { API } from "../../../../libs/api.ts"
import User from "../../../../model/User.ts"

export function useSuggestedAccount() {
    if(!localStorage.user) window.location.reload()


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
            const accounts = await API.get(`/follow/suggested-accounts`)
            setSuggestedAccount(accounts.data)
        } catch (error) {
            console.log(error)
        }
    }



    return {
        suggestedAccount,
        getSuggestedAccount,
    }
}