import { HStack, VStack, Text, Image, Input } from "@chakra-ui/react";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Thread from "../model/Thread";
import { BiMessageAltDetail } from "react-icons/bi";
import { useState, useEffect } from "react";
import { API } from "../libs/api";
import user_simple from "../mocks/user-simple";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import TotalLike from "./TotalLike";
import TotalReplies from "./TotalReplies";

interface Param {
    id: number
}

export default function CardThreadDetails(props: Param) {
    const [ thread, setThread] = useState<Thread>()
    const id = props.id
    const user = user_simple[0]

    try {
        useEffect(() => {
            API.get(`/thread/${id}`)
            .then(function (response) {
                setThread(response.data)
            })
            
        }, [id])
        
    } catch(error) {
        console.log(error)
    }

    return (
        <VStack spacing={0} m={3}>
            <HStack spacing={3} w={'100%'}>
                <FontAwesomeIcon icon={faArrowLeft} style={{color: '#B9B4C7',fontSize: '23px'}} />
                <Text color={'#B9B4C7'} fontSize={'3xl'}>Status</Text>
            </HStack>
            <HStack spacing={2} w={'100%'}>
                <Image src={thread?.user.photo_profile}
                        alt="photo-profile"
                        w={'35px'}
                        h={'35px'}
                        mx={0}
                        objectFit={'cover'}
                        borderRadius={'full'}
                        borderColor={'#191919'}
                        borderWidth={3}
                        borderStyle={'solid'}/>
                <VStack spacing={0}>
                    <Text color={'white'} fontSize={'small'}>{thread?.user.fullname}</Text>
                    <Text color={'#B9B4C7'} fontSize={'x-small'} w={'100%'}>{thread?.user.username}</Text>
                </VStack>
            </HStack>
            <Text color={'#F4EEE0'} fontSize={'small'} my={2} w={'100%'}>{thread?.content}</Text>
            <Image src={thread?.image} />
            <Text color={'#B9B4C7'} mt={2} fontSize={'small'} w={'100%'}>{thread?.created_at.toString()}</Text>
            <HStack w={'100%'} my={2}>
                {
                    true && (
                        <FontAwesomeIcon icon={faHeart}
                                        style={{
                                            color:"red",
                                        }} />
                    )
                }
                {
                    !true && (
                        <FontAwesomeIcon icon={faHeart} />
                    )
                }
                <TotalLike id={id} />
                <BiMessageAltDetail color='#B9B4C7' fontSize="20px"/>
                <TotalReplies id={id} />
            </HStack>
            <HStack m={0} w={'100%'}>
                <HStack pl={0} w={'70vw'}>
                    <Image
                        src={user["photo-profile"]}
                        alt="photo-profile"
                        w={'35px'}
                        h={'35px'}
                        mx={0}
                        objectFit={'cover'}
                        borderRadius={'full'}
                        borderColor={'#191919'}
                        borderWidth={3}
                        borderStyle={'solid'}
                        
                    />
                    <Input 
                        placeholder="What is happening?"
                        color={'#B9B4C7'}
                        fontSize={'medium'}
                        border={'none'}
                        w={'100%'}
                        h={'30px'}
                        pl={1}
                        mx={0}
                    />
                </HStack>
                <HStack w={'20vw'}>
                    <MdOutlineAddPhotoAlternate 
                        color="darkred"
                        style={{
                            fontSize:"20px",
                            marginLeft: "5px",
                            marginRight: "1px"
                        }}
                    />
                    <Text 
                        style={{textDecoration:'none'}}
                        backgroundColor={'red.700'}
                        borderRadius={'20px'}
                        color={'#B9B4C7'}
                        fontSize={'11px'}
                        paddingTop={'1px'}
                        paddingBottom={'1px'}
                        paddingX={'15px'}
                        marginLeft={1}
                        marginRight={'auto'}
                        as={'b'}
                    >Post</Text>
                </HStack>
            </HStack>
        </VStack>
    )
}