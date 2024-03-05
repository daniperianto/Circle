import { Card, CardBody, HStack, Image, Box, Text, Flex, Button } from "@chakra-ui/react"
import {useAccountCard} from "./useAccountCard.ts";

interface accounts {
    photoProfile: string | undefined,
    fullname: string | undefined,
    username: string | undefined,
    id: number | undefined
}

export default function AccountCard(props: accounts) {
    const { isFollowing, isFollowingChange } = useAccountCard()

    return (
        <>
            <Card backgroundColor={'#352F44'} >
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