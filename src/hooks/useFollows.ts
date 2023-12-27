import { API } from "../libs/api"
import { useState } from "react"
import User from "../model/User"

export function useFollows() {
    const [ isFollowers, setIsFollowers ] = useState(true)
    const [ followers, setFollowers ] = useState<User[]>()
    const [ following, setFollowing ] = useState<User[]>()

    async function handleClickFollowers() {
        setIsFollowers(true)
        await getFollowers()
        setFollowing([])
    }

    async function handleClickFollowing() {
        setIsFollowers(false)
        await getFollowing()
        setFollowers([])
    }

    async function getFollowers() {
        try {
            const response = await API.get(`/followers/get-followers`)

            setFollowers(response.data)
            console.log("followers" + response.data)
        } catch(error) {
            console.log(error)
        }
    }

    async function getFollowing() {
        try {
            const response = await API.get(`/following/get-following`)

            setFollowing(response.data)
            console.log("following" + response.data)
        } catch(error) {
            console.log(error)
        }
    }

    return {
        isFollowers,
        followers,
        following,
        handleClickFollowers,
        handleClickFollowing,
        getFollowers,
        getFollowing

    }
}