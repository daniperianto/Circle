import { Box } from "@chakra-ui/react";
import CardThread from "./CardThread/CardThread.tsx";
import { useEffect, useState } from "react";
import { API } from "../../../libs/api.ts";
import Thread from "../../../model/Thread.ts";



export default function Feed() {
    const [ threads, setThreads] = useState<Thread[]>([])

    try {
        useEffect(() => {
            API.get("/thread/following")
            .then(function (response) {
                setThreads(response.data)
            })
        }, [])
        
    } catch(error) {
        console.log(error)
    }


    return (
        <Box mt={3}>
            {
                threads.map( (post) => (
                    <CardThread key={post.id} id={post.id}
                    user={post.user}
                    created_at={post.created_at}
                    content={post.content}
                    image={post.image}
                    total_likes={post.total_likes}
                    />
                ))
            }
        </Box>
    )
}