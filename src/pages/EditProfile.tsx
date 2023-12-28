import { Box, Flex, VStack, Image, HStack, Text, Input, Textarea, Button } from "@chakra-ui/react";
import Nav from "../components/LayoutComponent/Nav";
import React, { useEffect, useState } from "react";
import User from "../model/User";
import { API } from "../libs/api";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface userPartial {
    fullname?: string,
    username?: string,
    email?: string,
    bio?: string
}

export default function EditProfile() {
    const userId = JSON.parse(localStorage.user).id
    const [ user, setUser ] = useState<User>()
    const [ form, setForm ] = useState<userPartial>()
    
    const [ isFullnameDisabled, setIsFullnameDisabled] = useState(true)
    const [ isUsernameDisabled, setIsUsernameDisabled] = useState(true)
    const [ isEmailDisabled, setIsEmailDisabled] = useState(true)
    const [ isBioDisabled, setIsBioDisabled] = useState(true)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    function handleKeyFullname(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key == "Enter") setIsFullnameDisabled(true)
    }

    function handleKeyUsername(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key == "Enter") setIsUsernameDisabled(true)
    }

    function handleKeyEmail(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key == "Enter") setIsEmailDisabled(true)
    }

    function handleKeyBio(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key == "Enter") setIsBioDisabled(true)
    }

    async function getUser() {
        try {
            const response = await API.get(`/user/${userId}`)

            setUser(response.data)
            setForm({
                fullname: response.data.fullname,
                username: response.data.username,
                email: response.data.email,
                bio: response.data.bio
            })
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <Flex flexDirection="row">
            <Box w={'23vw'} position={'fixed'} 
                backgroundColor={'#191919'}  
                borderRight={'1px'}
                borderColor={'red.700'}>
                <Nav />
            </Box>
            <Box w={'23vw'}></Box>
            <Box w={'77vw'} backgroundColor={'#191919'} px={1} >
                <VStack m={3}>
                    <HStack m={3} w={'100%'}>
                        <Image 
                            src={user?.background_image}
                            alt="background-image"
                            width={'100%'}
                            h={'30vh'}
                            objectFit={'cover'}
                            borderRadius={20}
                            />
                        <FontAwesomeIcon icon={faPen} size="lg" style={{
                            color:"white",
                            fontSize:"25px",
                            cursor:"pointer",
                            position: "absolute",
                            left:"96vw",
                            bottom: "33vw",
                            boxShadow: "0 0 30px  #191919",
                        }}/>
                        <Image
                            src={user?.photo_profile}
                            minWidth={'60px'}
                            minHeight={'60px'}
                            width={'100px'}
                            height={'100px'}
                            left={'80%'}
                            top={'35%'}
                            position={'absolute'}
                            objectFit={'cover'}
                            borderRadius={'full'}
                            borderColor={'#191919'}
                            borderWidth={3}
                            borderStyle={'solid'}
                        />
                        <FontAwesomeIcon icon={faPen} size="lg" style={{
                            color:"black",
                            fontSize:"25px",
                            cursor:"pointer",
                            position: "absolute",
                            left:"85vw",
                            bottom: "25vw",
                            boxShadow: "0 0 30px  #191919",
                            backgroundColor: "rgba(0,0,0,0)"
                        }}/>
                    </HStack>
                </VStack>
                <VStack m={3} w={'100%'} spacing={1}>
                    <HStack w={'100%'}>
                        <label style={{color:"white"}}>Fullname :</label>
                        <Input size={'20px'} w={'auto'} name="fullname" color={'white'} borderRadius={'5px'} value={form?.fullname} 
                            onChange={handleChange} disabled={isFullnameDisabled}
                            onKeyDown={handleKeyFullname}/>
                        <FontAwesomeIcon onClick={() => setIsFullnameDisabled(false)} icon={faPen} size="lg" style={{
                            color:"white",
                            fontSize:"18px",
                            cursor:"pointer",
                            boxShadow: "0 0 30px  #191919",
                        }}/>
                    </HStack>
                    <HStack w={'100%'}>
                        <label style={{color:"white"}}>Username :</label>
                        <Input size={'20px'} w={'auto'} name="username" color={'white'} borderRadius={'5px'} value={form?.username} 
                            onChange={handleChange} disabled={isUsernameDisabled}
                            onKeyDown={handleKeyUsername}/>
                        <FontAwesomeIcon onClick={() => setIsUsernameDisabled(false)} icon={faPen} size="lg" style={{
                            color:"white",
                            fontSize:"18px",
                            cursor:"pointer",
                            boxShadow: "0 0 30px  #191919",
                        }}/>
                    </HStack>
                    <HStack w={'100%'}>
                        <label style={{color:"white"}}>Email :</label>
                        <Input size={'20px'} w={'auto'} name="email" color={'white'} borderRadius={'5px'} value={form?.email} 
                            onChange={handleChange} disabled={isEmailDisabled}
                            onKeyDown={handleKeyEmail}/>
                        <FontAwesomeIcon onClick={() => setIsEmailDisabled(false)} icon={faPen} size="lg" style={{
                            color:"white",
                            fontSize:"18px",
                            cursor:"pointer",
                            boxShadow: "0 0 30px  #191919",
                        }}/>
                    </HStack>
                    <HStack w={'100%'}>
                        <label style={{color:"white"}} >Bio      :</label>
                        <Input size={'20px'} w={'auto'} name="bio" color={'white'} borderRadius={'5px'} value={form?.bio} 
                            onChange={handleChange} disabled={isBioDisabled}
                            onKeyDown={handleKeyBio}/>
                        <FontAwesomeIcon onClick={() => setIsBioDisabled(false)} icon={faPen} size="lg" style={{
                            color:"white",
                            fontSize:"18px",
                            cursor:"pointer",
                            boxShadow: "0 0 30px  #191919",
                        }}/>
                    </HStack>
                </VStack>
                <VStack w={'100%'}>

                    <Button 
                        size={'small'}
                        type="submit"
                        style={{textDecoration:'none'}}
                        backgroundColor={'#191919'}
                        border={'1px'}
                        borderColor={'white'}
                        borderRadius={'20px'}
                        color={'#B9B4C7'}
                        fontSize={'15px'}
                        paddingTop={'1px'}
                        paddingBottom={'1px'}
                        paddingX={'15px'}
                        marginLeft={5}
                        marginRight={'auto'}
                    >Change Password</Button>
                    <Button 
                        m={3}
                        type="submit"
                        style={{textDecoration:'none'}}
                        backgroundColor={'#191919'}
                        border={'1px'}
                        borderColor={'white'}
                        borderRadius={'20px'}
                        color={'#B9B4C7'}
                        fontSize={'15px'}
                        paddingTop={'1px'}
                        paddingBottom={'1px'}
                        paddingX={'15px'}
                        marginRight={5}
                        marginLeft={'auto'}
                    >Save</Button>
                </VStack>
            </Box>
        </Flex>
    )
}