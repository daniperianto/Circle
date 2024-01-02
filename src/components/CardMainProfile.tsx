import {
    Card,
    CardBody,
    HStack,
    Image,
    Link,
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react"
import {useEffect, useState} from "react"
import { useUser } from "../hooks/useUser";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {monthYearToString} from "../libs/timeToString.ts";
import Thread from "../model/Thread.ts";
import {API} from "../libs/api.ts";
import User from "../model/User.ts";
import CardThread from "./HomeComponent/CardThread.tsx";


export default function CardMainProfile(props: User) {
    const { following, followers, getFollowing, getFollowers } = useUser()
    const [ time, setTime ] = useState('')
    const [ threads, setTreads ] = useState<Thread[]>()


    async function getThreads() {
        try {
            const response = await API.get(`/threads/user/${props.id}`)
            setTreads(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFollowers()
        getFollowing()
        setTime(monthYearToString(new Date(props.created_at)))
        getThreads()
    }, [])

    return (
        <>
            <Card style={{backgroundColor:'#191919'}} m={3}>
                <CardBody padding={3} >         
                    <Image 
                        src={props.background_image} 
                        alt="background-image" 
                        w={'100%'}
                        h={'140px'}
                        objectFit={'cover'}
                        mb={2}
                        mt={2}
                        />
                    <HStack m={0}>
                        <Image 
                            src={props.photo_profile}
                            alt="background-image"
                            position={'relative'}
                            left={'20px'}
                            bottom={'50px'}
                            w={'90px'}
                            h={'90px'}
                            objectFit={'cover'}
                            borderRadius={'full'}
                            borderColor={'#191919'}
                            borderWidth={3}
                            borderStyle={'solid'}
                        />
                        <Link 
                            style={{textDecoration:'none'}}
                            href='/edit-profile'
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
                    <Text marginTop={'-45px'} fontSize={'xx-large'} mb={0} color={'white'}>{props.fullname}</Text>
                    <Text color={'#B9B4C7'} mt={-2} mb={2} fontSize={'medium'}>{props.username}</Text>
                    <Text color={'#F4EEE0'} my={2}  fontSize={'medium'}>{props.bio}</Text>
                    <HStack spacing={2} >
                        <FontAwesomeIcon icon={faCalendarDays} size="1x" style={{color: '#F4EEE0',}} />
                        <Text color={'#F4EEE0'} >Joined {time}</Text>
                    </HStack>
                    <HStack spacing={0}>
                        <Text color={'white'} fontSize={'smaller'} mr={1}>{following}</Text>
                        <Text color={'#B9B4C7'} fontSize={'smaller'} >Following</Text>
                        <Text color={'white'} fontSize={'smaller'} mx={1}>{followers}</Text>
                        <Text color={'#B9B4C7'} fontSize={'smaller'} >Followers</Text>
                    </HStack>
                </CardBody>
            </Card>

            <Tabs isFitted={true} margin={3} variant={'unstyled'}>
                <TabList color={'white'}>
                    <Tab>Posts</Tab>
                    <Tab>Replies</Tab>
                    <Tab>Media</Tab>
                </TabList>
                <TabIndicator
                    bg={'red.500'}
                    borderRadius={'1px'}
                    height={'2px'}
                />


                <TabPanels>
                    <TabPanel>
                        {
                            threads?.map((thread) => (
                                <CardThread
                                    content={thread.content}
                                    image={thread.image}
                                    user={props}
                                    created_at={thread.created_at}
                                    id={thread.id}
                                />
                            ))
                        }

                    </TabPanel>
                    <TabPanel>
                        Replies
                    </TabPanel>
                    <TabPanel>
                        Media
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}