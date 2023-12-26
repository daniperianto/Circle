import { Card, CardBody, Text } from "@chakra-ui/react";
import CardAccount from "./CardAccount";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";




export default function SugestedAccount() {
    const { suggestedAccount, getSuggestedAccount } = useUser()

    useEffect(() => {
        getSuggestedAccount()
    }, [])

    return (
        <>  {
                suggestedAccount.length == 0 && ( <></> )
            }
            {
                suggestedAccount.length > 0 && (
                    <Card backgroundColor={'#352F44'} m={3}>
                        <CardBody padding={3}>
                            <Text color={'white'} mb={2}>Suggested For You</Text>
                            {
                                suggestedAccount?.map( (user) => (
                                    <CardAccount key={user.id}
                                        photoProfile={user.photo_profile} 
                                        fullname={user.fullname}
                                        username={user.username}
                                        id={user.id}/>      
                                ))
                            }
                        </CardBody>
                    </Card>
                )
            }
        </>
    )
}