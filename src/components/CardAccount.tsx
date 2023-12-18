import { Card, CardBody, HStack, Image, Box, Text, Flex } from "@chakra-ui/react"

interface accounts {
    photoProfile: string,
    fullname: string,
    username: string,
    isFollowing: boolean
}

export default function CardAccount(props: accounts) {
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
                            borderColor={'black'}
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
                                props.isFollowing && 
                                <Text 
                                    style={{textDecoration:'none'}}
                                    backgroundColor={'#352F44'}
                                    borderRadius={'20px'}
                                    color={'#B9B4C7'}
                                    borderColor={'#B9B4C7'}
                                    borderStyle={'solid'}
                                    borderWidth={1}
                                    fontSize={'11px'}
                                    paddingTop={'1px'}
                                    paddingBottom={'1px'}
                                    
                                    paddingX={'10px'}
                                >Following</Text>
                            }
                            {
                                !props.isFollowing && 
                                <Text 
                                    style={{textDecoration:'none'}}
                                    backgroundColor={'#352F44'}
                                    borderRadius={'20px'}
                                    color={'white'}
                                    borderColor={'white'}
                                    borderStyle={'solid'}
                                    borderWidth={1}
                                    fontSize={'11px'}
                                    paddingTop={'1px'}
                                    paddingBottom={'1px'}
                                    
                                    paddingX={'10px'}
                                >Follow</Text>
                            }
                        </Box>
                        
                    </HStack>
                    
                </CardBody>
            </Card>
        </>
    )
}