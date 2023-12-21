import { Box, HStack, Image, Input, Text } from "@chakra-ui/react";
import user_simple from "../mocks/user-simple"
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

export default function NewTwit() {
    const user = user_simple[0]

    return (
        <>
            <Box backgroundColor={'#191919'} m={3}>
                <Text color={'#B9B4C7'} fontSize={'3xl'}>Home</Text>
            </Box>
            <HStack m={0}>
                <HStack pl={3} w={'70vw'}>
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
                            marginLeft: "0",
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
        </>
    )
}