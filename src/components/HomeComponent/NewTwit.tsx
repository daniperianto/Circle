import { Box, Button, FormControl, HStack, Image, Input, Text, VisuallyHiddenInput } from "@chakra-ui/react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useThread } from "../../hooks/useThread";


export default function NewTwit() {
    const user = JSON.parse(localStorage.user)
    const { handleSubmit, handleChange, form, fileInputRef } = useThread()

    return (
        <>
            <Box backgroundColor={'#191919'} m={3}>
                <Text color={'#B9B4C7'} fontSize={'3xl'}>Home</Text>
            </Box>
            <form onSubmit={handleSubmit} encType="multipart/form-data" >
                <FormControl>
                    <HStack m={0}>
                        <HStack pl={3} w={'70vw'}>
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
                                type="text"
                                placeholder="What is happening?"
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
                                style={{textDecoration:'none',fontWeight:'bold'}}
                                backgroundColor={'red.700'}
                                borderRadius={'20px'}
                                color={'#B9B4C7'}
                                fontSize={'11px'}
                                paddingTop={'2px'}
                                paddingBottom={'2px'}
                                paddingX={'15px'}
                                marginLeft={1}
                                marginRight={'auto'}
                                >Post</Button>
                        </HStack>
                        
                    </HStack>
                    
                </FormControl>
                
                                
            </form>
        </>
    )
}