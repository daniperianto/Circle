import { Box } from "@chakra-ui/react";
import feed from "../mocks/feed"
import CardPost from "./CardPost";
export default function Feed() {
    return (
        <Box mt={3}>
            {
                feed.map( (post) => (
                    <CardPost
                        profile_picture={post.profile_picture}
                        fullname={post.fullname}
                        username={post.username}
                        posted_at={post.posted_at}
                        content={post.content}
                        image={post.image}
                        isLike={post.isLike}
                        total_likes={post.total_likes}
                        total_replies={post.total_replies} />
                ))
            }
        </Box>
    )
}