import { HStack, VStack, Text, Image, Link, Box } from '@chakra-ui/react';
import { BiMessageAltDetail } from "react-icons/bi";
import Thread from '../../../../model/Thread.ts';
import TotalLike from '../../../../components/TotalLike.tsx';
import TotalReplies from '../../../../components/TotalReplies.tsx';
import { useCardThread } from './useCardThread.ts';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { TimeInterval} from '../../../../libs/timeToString.ts';


export default function CardThread(props: Thread) {
    const { isLike, isLiked, handleClick } = useCardThread(props.id)
    const [ time, setTime ] = useState('')

    useEffect(() => {
        isLiked()
        if(props.created_at) {
            const time = new Date(props.created_at)
            setTime(TimeInterval(time))
        }
        // eslint-disable-next-line
    }, [])

    return (
        <VStack spacing={0} borderTop={'1px'} borderColor={'#B9B4C7'}>
            <HStack w={'100%'} mx={3} spacing={0}>
                <Image 
                    src={props.user?.photo_profile}
                    w={'35px'}
                    h={'35px'}
                    mr={2}
                    ml={3}
                    objectFit={'cover'}
                    borderRadius={'full'}
                    borderColor={'#191919'}
                    borderWidth={3}
                    borderStyle={'solid'}
                    mt={3}
                    mb={'auto'}
                />
                <HStack spacing={0} position={'relative'} bottom={2}>
                    <Text color={'white'} fontSize={'small'} mr={1}>{props.user?.fullname}</Text>
                    <Text color={'#B9B4C7'} fontSize={'small'}>{props.user?.username}  ·</Text>
                    <Text color={'#B9B4C7'} fontSize={'small'} mx={1}>{time}</Text>
                </HStack>
            </HStack>

            <Link href={`/details/${props.id}`} pr={3} w={'100%'}>
                <HStack ml={3} mt={-5} mb={-2} spacing={0} w={'100%'}>
                    <Text opacity={0}>.........</Text> {/* for layout */}
                        
                    <VStack mt={0} mx={3} spacing={0} >
                        
                        <Text color={'#F4EEE0'} fontSize={'small'} mb={1} w={'100%'} >{props.content}</Text>
                        {
                            props.image && (
                                <Image mb={2} w={'100%'} src={props.image} />
                                )
                            }
                        
                    </VStack>
                </HStack>
            </Link>

            <HStack w={'100%'} mb={2} mx={3}>
                <Text opacity={0}>11111</Text> {/* for layout */}
                <HStack ml={2} position={'relative'} top={1}>
                    <Box onClick={handleClick}>

                    
                    {
                        isLike && (
                            <FaHeart 
                                style={{
                                    color:"red",
                                    fontSize:"15px",
                                    cursor: "pointer"
                                }} />
                        )
                    }
                    {
                        !isLike && (
                            <FaRegHeart 
                                style={{
                                    fontSize: "15px",
                                    color: "white",
                                    cursor: "pointer"
                                }}/>
                        )
                    }
                    </Box>
                    <TotalLike id={props.id}/>
                    <Link href={`/details/${props.id}`}>
                        <HStack spacing={1}>
                            <BiMessageAltDetail color='#B9B4C7' fontSize="15px"/>
                            <TotalReplies id={props.id} />
                        </HStack>
                    </Link>
                </HStack>
            </HStack>
        </VStack>
    )
}