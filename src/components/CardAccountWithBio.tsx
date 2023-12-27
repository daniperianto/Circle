import { Card, CardBody, HStack, Image, Box, Text, Flex, Button } from "@chakra-ui/react"
import { useUser } from "../hooks/useUser"
import { API } from "../libs/api"
import { useEffect } from "react"

interface accounts {
    photoProfile: string | undefined,
    fullname: string | undefined,
    username: string | undefined,
    id: number | undefined,
    bio: string | undefined
}

export default function CardAccountWithBio(props: accounts) {
    const { isFollowing, setIsFollowing, isFollowingChange } = useUser()

    async function getIsFollowing() {
        try {
            const response = await API.get(`/following/is-following/${props.id}`)

            setIsFollowing(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getIsFollowing()
    }, [])


    return (
        <>
            <Card backgroundColor={'#191919'} w={'100%'} >
                <CardBody p={0}>
                    <HStack>
                        <Image
                            src={props.photoProfile}
                            alt="background-image"
                            w={'30px'}
                            h={'30px'}
                            objectFit={'cover'}
                            borderRadius={'full'}
                            borderColor={'#191919'}
                            borderWidth={3}
                            borderStyle={'solid'}
                        />
                        <Flex flexDirection={'column'} p={0}>
                            <Text color={'white'} fontSize={'small'} m={0}>{props.fullname}</Text>
                            <Text color={'#B9B4C7'} m={0} fontSize={'x-small'} margin={0}>{props.username}</Text>
                            <Text color={'#F4EEE0'} m={0} fontSize={'small'}>{props.bio}</Text>
                        </Flex>
                        <Box 
                            marginRight={'0px'}
                            marginLeft={'auto'}>
                            {
                                isFollowing && 
                                <Button 
                                    size={'small'}
                                    style={{textDecoration:'none'}}
                                    backgroundColor={'#352F44'}
                                    borderRadius={'20px'}
                                    color={'#B9B4C7'}
                                    borderColor={'#B9B4C7'}
                                    borderStyle={'solid'}
                                    borderWidth={1}
                                    fontSize={'11px'}
                                    paddingTop={'2px'}
                                    paddingBottom={'2px'}
                                    paddingX={'10px'}
                                    onClick={() => isFollowingChange(props.id)}
                                >Following</Button>
                            }
                            {
                                !isFollowing && 
                                <Button 
                                    size={'small'}
                                    style={{textDecoration:'none'}}
                                    backgroundColor={'#352F44'}
                                    borderRadius={'20px'}
                                    color={'white'}
                                    borderColor={'white'}
                                    borderStyle={'solid'}
                                    borderWidth={1}
                                    fontSize={'11px'}
                                    paddingTop={'2px'}
                                    paddingBottom={'2px'}
                                    paddingX={'10px'}
                                    onClick={() => isFollowingChange(props.id)}
                                >Follow</Button>
                            }
                        </Box>
                        
                    </HStack>
                    
                </CardBody>
            </Card>
        </>
    )
}