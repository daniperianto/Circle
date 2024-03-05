import { VStack, Text, Input, Button, HStack, Link, FormControl, Center } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { useLogin } from "./useLogin.ts";

export default function Login() {
    const { handleLogin, handleChange, form } = useLogin()

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
                <form>
                    <FormControl>
                        <Input type="text" autoComplete="current-user1email" id="user1email" name="user1email" my={1} placeholder="Email/Username*" color={'white'} borderColor={'#5C8374'}
                               value={form.user1email} onChange={handleChange}/>
                        <Input type="password" autoComplete="current-password" id="password" name="password" my={1} placeholder="Password*" color={'white'} borderColor={'#5C8374'}
                               value={form.password} onChange={handleChange}/>
                        <Text float={'inline-end'} color={'white'} fontSize={'small'}>Forgot password?</Text>
                        <Button onClick={handleLogin} color={'white'} backgroundColor={'red.500'} w={'100%'} borderRadius={'34px'} m={1}>Login</Button>
                    </FormControl>
                </form>
                <HStack spacing={0} w={'100%'} mt={2}>
                    <Text color={'white'} mr={2}>Don't have an account yet? </Text>
                    <Link style={{textDecoration: 'none'}}
                          href={"/register"} color={'red.500'}
                        >Register</Link>
                </HStack>
            </VStack>
            <ToastContainer limit={1}/>
        </Center>
    )
}