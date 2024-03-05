/* eslint-disable react-hooks/exhaustive-deps */
// noinspection JSIgnoredPromiseFromCall

import { Card, CardBody, Text } from "@chakra-ui/react";
import AccountCard from "./AccountCard/AccountCard.tsx";
import { useSuggestedAccount } from "./useSuggestedAccount.ts";
import { useEffect } from "react";




export default function SuggestedAccount() {
    const { suggestedAccount, getSuggestedAccount } = useSuggestedAccount()

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
                                    <AccountCard key={user.id}
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