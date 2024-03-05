import {useState} from "react";
import {API} from "../../../../libs/api.ts";

export function useCardProfile() {
    const user = JSON.parse(localStorage.user)
    const [ following, setFollowing ] = useState(-1)
    const [ followers, setFollowers ] = useState(-1)

    async function getFollowing() {
        try {
            const total_followings = await API.get(`/follow/total-following/${user.id}`)
            setFollowing(total_followings.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function getFollowers() {
        try {
            const total_followers = await API.get(`/follow/total-followers/${user.id}`)
            setFollowers(total_followers.data)
        } catch(error) {
            console.log(error)
        }
    }

    return {
        following,
        followers,
        getFollowing,
        getFollowers
    }
}