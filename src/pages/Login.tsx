import { VStack, Text, Input, Button, HStack, Link, FormControl, Center } from "@chakra-ui/react";
import { useState } from "react";
import User from "../model/User";
import authService from "../hooks/useRegister";


export default function Login() {
    const [ user1email, setUser1email ] = useState('')
    const [ password, setPassword ] = useState('')

    const getUser1email = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser1email(e.target.value)
    }
    const getPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    

    function handleLogin() {
        const user: User = {
            password: password
        }
        if(user1email.startsWith('@')) user.username = user1email
        else user.email = user1email

        try {
            authService.useLogin(user)
        } catch(error) {
            console.log(error)
        }
    }
    


    return (
        <Center 
            backgroundColor={'#191919'}
            position={'fixed'}
            w={'100vw'}
            h={'100vh'}>
            <VStack 
                spacing={0}
                minWidth={'300px'}
                width={'25vw'}
                position={'relative'}
                bottom={'20px'}
                >
                <Text color={'red.500'} fontSize={'5xl'} w={"100%"} as={'b'} m={0}>circle</Text>
                <Text color={'white'} fontSize={'3xl'} w={"100%"} position={'relative'} bottom={'4px'}>Login to Circle</Text>
                <FormControl>
                    <Input type="text" name="fullname" my={1} placeholder="Email/Username*" color={'white'} borderColor={'#5C8374'}
                        value={user1email} onChange={getUser1email}/>
                    <Input type="password" name="password" my={1} placeholder="Password*" color={'white'} borderColor={'#5C8374'}
                        value={password} onChange={getPassword}/>
                    <Text float={'inline-end'} color={'white'} fontSize={'small'}>Forgot password?</Text>
                    <Button onClick={handleLogin} color={'white'} backgroundColor={'red.500'} w={'100%'} borderRadius={'34px'} m={1}>Create</Button>
                </FormControl>
                <HStack spacing={0} w={'100%'} mt={2}>
                    <Text color={'white'} mr={2}>Don't have an account yet? </Text>
                    <Link style={{textDecoration: 'none'}}
                        href="/register" color={'red.500'}
                        >Register</Link>
                </HStack>
            </VStack>
        </Center>
    )
}