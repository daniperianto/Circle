import { HStack, VStack, Text, Image } from '@chakra-ui/react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TotalLike from '../TotalLike';
import Reply from '../../model/Reply';
import { useEffect, useState } from 'react';
import { TimeInterval } from '../../libs/timeToString.ts';




export default function CardReply(props: Reply) {
    const [ time, setTime ] = useState('')

    useEffect(() => {
        if(props.created_at) {
            const time = new Date(props.created_at)
            setTime(TimeInterval(time))
        }
    }, [])


    return (
        <HStack mx={3} borderTop={'1px'} borderColor={'#B9B4C7'}>
            <Image 
                src={props.user.photo_profile}
                alt="photo-profile"
                w={'35px'}
                h={'35px'}
                mx={0}
                objectFit={'cover'}
                borderRadius={'full'}
                borderColor={'#191919'}
                borderWidth={3}
                borderStyle={'solid'}
                mt={3}
                mb={'auto'}
            />
            <VStack mt={1} spacing={0}>
                <HStack w={'100%'} m={0} spacing={0}>
                    <Text color={'white'} fontSize={'small'} mr={1}>{props.user.fullname}</Text>
                    <Text color={'#B9B4C7'} fontSize={'small'}>{props.user.username}  ·</Text>
                    <Text color={'#B9B4C7'} fontSize={'small'} mx={1}>{time}</Text>
                </HStack >
                <Text color={'#F4EEE0'} fontSize={'small'} w={'100%'} >{props.content}</Text>
                {
                    props.image && (
                        <Image my={2} src={props.image} />
                    )
                }
                <HStack w={'100%'} mb={2}>
                    {
                        true && (
                            <FontAwesomeIcon icon={faHeart}
                                            style={{
                                                color:"red",
                                                fontSize:"15px"
                                            }} />
                        )
                    }
                    {
                        !true && (
                            <FontAwesomeIcon icon={faHeart} />
                        )
                    }
                    <TotalLike id={props.id}/>
                </HStack>
            </VStack>
        </HStack>
    )
}