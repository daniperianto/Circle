import { Card, CardBody, HStack, Image, Link, Text } from "@chakra-ui/react"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"

export default function CardProfile() {
    let user;
    if(localStorage.user) user = JSON.parse(localStorage.user)
    const { following, followers, getFollowing, getFollowers } = useUser()

    useEffect(() => {
        getFollowers()
        getFollowing()
    }, [getFollowers, getFollowing])

    return (
        <>
            <Card style={{backgroundColor:'#352F44'}} m={3}>
                <CardBody padding={3} >
                    <Text fontSize={'md'} as={'b'} color={'white'}>My Profile</Text>          
                    <Image 
                        src={user.background_image} 
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
                            src={user.photo_profile}
                            alt="background-image"
                            position={'relative'}
                            left={'20px'}
                            bottom={'30px'}
                            w={'60px'}
                            h={'60px'}
                            objectFit={'cover'}
                            borderRadius={'full'}
                            borderColor={'#191919'}
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
                    <HStack spacing={0}>
                        <Text color={'white'} fontSize={'smaller'} mr={1}>{following}</Text>
                        <Text color={'#B9B4C7'} fontSize={'smaller'} >Following</Text>
                        <Text color={'white'} fontSize={'smaller'} mx={1}>{followers}</Text>
                        <Text color={'#B9B4C7'} fontSize={'smaller'} >Followers</Text>
                    </HStack>
                </CardBody>
            </Card>
        </>
    )
}