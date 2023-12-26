import { Box } from "@chakra-ui/react";
import CardThread from "./CardThread";
import { useEffect, useState } from "react";
import { API } from "../../libs/api";
import { Link } from "react-router-dom";
import Thread from "../../model/Thread";



export default function Feed() {
    const [ threads, setThreads] = useState<Thread[]>([])

    try {
        useEffect(() => {
            API.get("/threads/following")
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
                    <Link key={post.id} to={`/details/${post.id}`}>
                        <CardThread id={post.id}
                        user={post.user}
                        created_at={post.created_at}
                        content={post.content}
                        image={post.image}
                        total_likes={post.total_likes}
                        />
                    </Link>
                    
                ))
            }
        </Box>
    )
}