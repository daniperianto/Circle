import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Reply from "../../model/Reply";
import { API } from "../../libs/api";
import CardReply from "../HomeComponent/CardReply";


interface Param {
    id: number
}

export default function ThreadReply(props: Param) {
    const id = props.id
    const [ replies, setReplies ] = useState<Reply[]>()

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
                    <CardReply key={id} id={post.id}
                    user={post.user}
                    created_at={post.created_at}
                    content={post.content}
                    image={post.image}
                     />
                ))
            }
        </Box>
    )
}