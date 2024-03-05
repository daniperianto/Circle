import {useState} from "react";
import {API} from "../../../libs/api.ts";
import User from "../../../model/User.ts";


export default function useProfileCard(user: User) {
    const [ followers, setFollowers ] = useState(0)
    const [ following, setFollowing ] = useState(0)

    async function getTotalFollowers() {
        try {
            const response = await API.get(`/follow/total-followers/${user.id}`)

            setFollowers(response.data)
            console.log("followers" + response.data)
        } catch(error) {
            console.log(error)
        }
    }

    async function getTotalFollowing() {
        try {
            const response = await API.get(`/follow/total-following/${user.id}`)

            setFollowing(response.data)
            console.log("following" + response.data)
        } catch(error) {
            console.log(error)
        }
    }

    return {
        following,
        followers,
        getTotalFollowing,
        getTotalFollowers
    }
}