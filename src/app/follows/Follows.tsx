import { HStack, Text, VStack } from "@chakra-ui/react";
import AccountCardWithBio from "./CardAccount/AccountCardWithBio.tsx";
import { useFollows } from "./useFollows.ts";
import Layout from "../../components/Layout/Layout.tsx";
import { useEffect } from "react";

export default function Follows() {
    const { isFollowers, followers, following, handleClickFollowers, handleClickFollowing,
            getFollowers, getFollowing } = useFollows()
    
    useEffect(() => {
        getFollowers()
        getFollowing()
    }, [])

    return (
        <Layout>
            <VStack spacing={0} m={3} pr={5} w={'100%'}>
                <Text
                    color={'white'}
                    fontSize={'x-large'}
                    w={'100%'}
                    my={3}
                >Follows</Text>
                <HStack w={'100%'} spacing={0} mb={3}>
                    {
                        isFollowers && 
                        <>
                            <Text 
                                color={'white'}
                                w={'50%'} 
                                textAlign={'center'}
                                borderBottom={'2px'}
                                borderColor={'red.500'}
                                paddingBottom={1}
                                cursor={'pointer'}
                                onClick={handleClickFollowers}
                            >Followers</Text>
                            <Text
                                color={'white'}
                                w={'50%'} 
                                textAlign={'center'}
                                borderBottom={'1px'}
                                borderColor={'#767676'}
                                paddingBottom={1}
                                cursor={'pointer'}
                                onClick={handleClickFollowing}
                            >Following</Text>
                        </>
                    }
                    {
                        !isFollowers && 
                        <>
                            <Text 
                                color={'white'}
                                w={'50%'} 
                                textAlign={'center'}
                                borderBottom={'1px'}
                                borderColor={'#767676'}
                                paddingBottom={1}
                                cursor={'pointer'}
                                onClick={handleClickFollowers}
                            >Followers</Text>
                            <Text
                                color={'white'}
                                w={'50%'} 
                                textAlign={'center'}
                                borderBottom={'2px'}
                                borderColor={'red.500'}
                                paddingBottom={1}
                                cursor={'pointer'}
                                onClick={handleClickFollowing}
                            >Following</Text>
                        </>
                    }
                </HStack >
                <VStack w={'100%'} mx={3}>               
                    {
                        isFollowers && (
                            followers?.map((user) => (
                                <AccountCardWithBio key={user.id}
                                                    id={user.id}
                                                    fullname={user.fullname}
                                                    username={user.username}
                                                    photoProfile={user.photo_profile}
                                                    bio={user.bio} />
                            ))
                        )
                    }
                    {
                        !isFollowers && (
                            following?.map((user) => (
                                <AccountCardWithBio key={user.id}
                                                    id={user.id}
                                                    fullname={user.fullname}
                                                    username={user.username}
                                                    photoProfile={user.photo_profile}
                                                    bio={user.bio} />
                            ))
                        )
                    }
                </VStack>
            </VStack>
        </Layout>
    )
}