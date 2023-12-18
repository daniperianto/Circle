import { Card, CardBody, Text } from "@chakra-ui/react";
import user_simple from "../mocks/user-simple"
import CardAccount from "./CardAccount";

export default function SugestedAccount() {


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