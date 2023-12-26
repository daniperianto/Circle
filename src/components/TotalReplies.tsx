import { useEffect, useState } from "react"
import { API } from "../libs/api"
import { Text } from "@chakra-ui/react"

interface reply {
    id: number | undefined
}

export default function TotalReplies(props: reply) {
    const [ total_replies, set_total_replies] = useState(0)
    
    try {
        useEffect(() => {
            API.get(`/thread/${props.id}/total-replies`)
                .then(function (response) {
                    set_total_replies(response.data)
                })
        }, [props])
    } catch(error) {
        console.log("getReplies: " + error)
    }

    return (
        <>
            {
                total_replies > 1 && (
                    <Text color={'#B9B4C7'} fontSize={'small'} paddingBottom={'3px'}>{total_replies} Replies</Text>
                )
            }
            {
                total_replies < 2 && (
                    <Text color={'#B9B4C7'} fontSize={'small'} paddingBottom={'3px'}>{total_replies} Reply</Text>
                )
            }
        </>   
    )
}

