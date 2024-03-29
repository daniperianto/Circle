import { HStack, VStack, Text, Image, Input, Button, VisuallyHiddenInput, FormControl } from "@chakra-ui/react";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Thread from "../../model/Thread";
import { BiMessageAltDetail } from "react-icons/bi";
import { useState, useEffect } from "react";
import { API } from "../../libs/api";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import TotalLike from "../TotalLike";
import TotalReplies from "../TotalReplies";
import { useReply } from "../../hooks/useReply";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { timeToString } from "../../libs/timeToString";

interface Param {
    id: number
}

export default function CardThreadDetails(props: Param) {
    const [ thread, setThread] = useState<Thread>()
    const [ time, setTime ] = useState('')
    const id = props.id
    const user = JSON.parse(localStorage.user)
    const { handleChange, fileInputRef, form, handleSubmit } = useReply(id)

    async function getThread() {
        try {
            const response = await API.get(`/thread/${id}`)
            setThread(response.data)
            setTime(timeToString(new Date(response.data.created_at)))
            console.log(response.data.created_at)
            console.log(new Date(response.data.created_at))
        } catch(error) {
            console.log(error)
        }
        
    }

    
    useEffect(() => {
        getThread()
        
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   

    return (
        <VStack spacing={0} m={3} ml={6} >
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
            <Text color={'#B9B4C7'} mt={2} fontSize={'small'} w={'100%'}>{time}</Text>
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
            <form style={{width: '100%'}} onSubmit={handleSubmit} encType="multipart/form-data">
                <FormControl >
                    <HStack m={0} w={'100%'}>
                        <HStack pl={0} w={'70vw'}>
                            <Image
                                src={user.photo_profile}
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
                                placeholder="Type your comment?"
                                color={'#B9B4C7'}
                                fontSize={'medium'}
                                border={'none'}
                                w={'100%'}
                                h={'30px'}
                                pl={1}
                                mx={0}
                                name="content"
                                onChange={handleChange}
                                value={form.content}
                            />
                        </HStack>
                        <HStack w={'20vw'}>
                            <VisuallyHiddenInput
                                type="file"
                                id="input_file"
                                name="image"
                                onChange={handleChange}
                                ref={fileInputRef}

                            />
                            <label htmlFor="input_file">
                                <MdOutlineAddPhotoAlternate 
                                    color="darkred"
                                    style={{
                                        fontSize:"20px",
                                        marginLeft: "0",
                                        marginRight: "1px",
                                        cursor: 'pointer'
                                    }}
                                    
                                    />
                            </label>
                            <Button 
                                size={'small'}
                                type="submit"
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
                            >Post</Button>
                        </HStack>
                    </HStack>
                </FormControl>
            </form>
        </VStack>
    )
}