import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Reply from "../model/Reply";
import { API } from "../libs/api";
import CardThread from "./CardThread";


interface Param {
    id: number
}

export default function ThreadReply(props: Param) {
    const id = props.id
    const [ replies, setReplies ] = useState<Reply[]>()

    console.log(id)

    try {
        useEffect(() => {
            API.get(`/thread/${id}/replies`)
            .then(function (response) {
                setReplies(response.data)
            })
            
        }, [id])
        
    } catch(error) {
        console.log(error)
    }

    



    return (
        <Box>
            {
                replies?.map( (post) => (
                    <CardThread id={post.id}
                    user={post.user}
                    created_at={post.created_at}
                    content={post.content}
                    image={post.image}
                    total_likes={300}
                     />
                ))
            }
        </Box>
    )
}