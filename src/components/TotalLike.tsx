import { useEffect, useState } from "react"
import { API } from "../libs/api"
import { Text } from "@chakra-ui/react"

interface like {
    id: number
}


export default function TotalLike(props: like) {
    const [ total_like, set_total_like] = useState(0)
    
    try {
        useEffect(() => {
            API.get(`/thread/${props.id}/likes`)
                .then(function (response) {
                    set_total_like(response.data)
                })
        }, [props])
    } catch(error) {
        console.log("getlike: " + error)
    }


    return (
        <Text color={'#B9B4C7'} fontSize={'small'} paddingBottom={'3px'}>{total_like}</Text>
    )
}