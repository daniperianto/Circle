import { Card, CardBody, HStack, Image, Link, Text } from "@chakra-ui/react"
import users from "../mocks/user"


export default function CardProfile() {
    const user = users[0]
    return (
        <>
            <Card style={{backgroundColor:'#352F44'}} m={3}>
                <CardBody padding={3} >
                    <Text fontSize={'md'} as={'b'} color={'white'}>My Profile</Text>          
                    <Image 
                        src={user["background-image"]} 
                        alt="background-image" 
                        w={'100%'}
                        h={'70px'}
                        objectFit={'cover'}
                        mb={2}
                        mt={2}
                        borderRadius={10}
                        />
                    <HStack m={0}>
                        <Image 
                            src={user["photo-profile"]}
                            alt="background-image"
                            position={'relative'}
                            left={'20px'}
                            bottom={'30px'}
                            w={'60px'}
                            h={'60px'}
                            objectFit={'cover'}
                            borderRadius={'full'}
                            borderColor={'black'}
                            borderWidth={3}
                            borderStyle={'solid'}
                        />
                        <Link 
                            style={{textDecoration:'none'}}
                            href="/edit-profile" 
                            backgroundColor={'#352F44'}
                            borderRadius={'20px'}
                            color={'white'}
                            borderColor={'white'}
                            borderStyle={'solid'}
                            borderWidth={1}
                            fontSize={'10px'}
                            paddingTop={'1px'}
                            paddingBottom={'1px'}
                            marginRight={'0px'}
                            marginLeft={'auto'}
                            paddingX={'10px'}
                            position={'relative'}
                            bottom={'20px'}
                        >Edit Profile</Link>
                    </HStack>
                    <Text marginTop={'-20px'} color={'white'}>{user.fullname}</Text>
                    <Text color={'#B9B4C7'} m={0} fontSize={'x-small'}>{user.username}</Text>
                    <Text color={'#F4EEE0'} fontSize={'small'}>{user.bio}</Text>
                    <HStack>
                        <Text color={'white'} fontSize={'smaller'}>{user.following}</Text>
                        <Text color={'#B9B4C7'} fontSize={'smaller'} ml={-1}>Following</Text>
                        <Text color={'white'} fontSize={'smaller'}>{user.followers}</Text>
                        <Text color={'#B9B4C7'} fontSize={'smaller'} ml={-1}>Followers</Text>
                    </HStack>
                </CardBody>
            </Card>
        </>
    )
}