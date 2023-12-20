import { HStack, VStack, Text, Image } from '@chakra-ui/react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiMessageAltDetail } from "react-icons/bi";


interface Thread {
    profile_picture: string,
    fullname: string,
    username: string,
    posted_at: Date,
    content: string,
    image: string,
    isLike: boolean,
    total_likes: number,
    total_replies: number
}

export default function CardPost(props: Thread) {
    return (
        <HStack mx={3} borderTop={'1px'} borderColor={'red.700'}>
            <Image 
                src={props.profile_picture}
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
                    <Text color={'white'} fontSize={'small'} mr={1}>{props.fullname}</Text>
                    <Text color={'#B9B4C7'} fontSize={'small'}>{props.username}  ·</Text>
                    <Text color={'#B9B4C7'} fontSize={'small'} mx={1}>{props.posted_at.toISOString()}</Text>
                </HStack >
                <Text color={'#F4EEE0'} fontSize={'small'} w={'100%'} mb={2}>{props.content}</Text>
                <Image src={props.image} />
                <HStack w={'100%'} my={2}>
                    {
                        props.isLike && (
                            <FontAwesomeIcon icon={faHeart}
                                            style={{
                                                color:"red",
                                            }} />
                        )
                    }
                    {
                        !props.isLike && (
                            <FontAwesomeIcon icon={faHeart} />
                        )
                    }
                    <Text color={'#B9B4C7'} fontSize={'medium'} paddingBottom={'3px'}>{props.total_likes}</Text>
                    <BiMessageAltDetail color='#B9B4C7' fontSize="20px"/>
                    <Text color={'#B9B4C7'} fontSize={'medium'} paddingBottom={'3px'}>{props.total_replies} Replies</Text>
                </HStack>
            </VStack>
        </HStack>
    )
}