// noinspection JSIgnoredPromiseFromCall

import { Card, CardBody, HStack, Image, Link, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useProfileCard from "./useProfileCard.ts";
import User from "../../../model/User.ts";
import {monthYearToString} from "../../../libs/timeToString.ts";

export default function ProfileCard(props: User) {
    const { following, followers, getTotalFollowing, getTotalFollowers } = useProfileCard(props)

    useEffect(() => {
        getTotalFollowers()
        getTotalFollowing()
    }, [getTotalFollowers, getTotalFollowing])

    function joined(): string {
        if(props.created_at) {
            return monthYearToString(new Date(props.created_at))
        }
        return ""
    }

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
                            href={"/edit-profile"}
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
                    <Text color={'#F4EEE0'} m={2}  fontSize={'medium'}>{props.bio}</Text>
                    <HStack spacing={2} >
                        <FontAwesomeIcon icon={faCalendarDays} size="1x" style={{color: '#F4EEE0',}} />
                        <Text color={'#F4EEE0'} >Joined {joined()}</Text>
                    </HStack>
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