import { useState } from "react";
import { API } from "../../../../libs/api.ts";

export function useCardThread(threadId: number | undefined) {
    const [ isLike, setIsLike ] = useState(false)
    const [ totalLikes, setTotalLikes ] = useState(0)

    async function isLiked() {
        try {
            const response = await API.get(`/like/thread/${threadId}`)

            setIsLike(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    async function handleClick() {
        if(isLike) {
            
            await API.delete(`/like/thread/${threadId}`)
            setIsLike(false)
            
        } else {
            
            await API.post(`/like/thread/${threadId}`)
            setIsLike(true)
            
        }
    }

    async function getTotalLikes() {
        try {
            const response = await API.get(`/like/threads/${threadId}/count`)

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
        getTotalLikes,
        handleClick
    }
}