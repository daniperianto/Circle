import { Card, CardBody, Text } from "@chakra-ui/react";
import user_simple from "../mocks/user-simple"
import CardAccount from "./CardAccount";
import { API } from "../libs/api";

async function getUser() {
    try {
        const response = await API.get("/threads/all")
        console.log(response.data)
    } catch(error) {
        console.log(error)
    }
}


export default function SugestedAccount() {
    getUser()

    return (
        <>
            <Card backgroundColor={'#352F44'} m={3}>
                <CardBody padding={3}>
                    <Text color={'white'} mb={2}>Suggested For You</Text>
                    {
                        user_simple.map( user => (
                            <CardAccount 
                                photoProfile={user["photo-profile"]} 
                                fullname={user.fullname}
                                username={user.username}
                                isFollowing={user["is-following"]}/>      
                        ))
                    }
                </CardBody>
            </Card>
        </>
    )
}