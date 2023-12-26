import { useState } from "react";
import { API } from "../libs/api";

export function useLike(threadId: number) {
    const [ isLike, setIsLike ] = useState(false)
    const [ totalLikes, setTotalLikes ] = useState(0)

    async function isLiked() {
        try {
            const response = await API.get(`/threads/${threadId}/like`)

            setIsLike(response.data)
        } catch(error) {
            console.log(error)
            throw new Error
        }
    }

    async function getTotalLikes() {
        try {
            const response = await API.get(`/threads/${threadId}/likes`)

            setTotalLikes(response.data)
        } catch(error) {
            console.log(error)
            throw new Error
        }
    }

    return {
        isLike,
        totalLikes,
        isLiked,
        getTotalLikes
    }
}