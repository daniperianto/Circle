import { VStack, Text, Input, Button, HStack, Link, Center, FormControl } from "@chakra-ui/react";
import  useRegister  from "./useRegister.ts"
import { ToastContainer } from "react-toastify";




export default function Register() {
    const {  handleRegister, handleChange, form } = useRegister()

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
                <Text color={'white'} fontSize={'3xl'} w={"100%"} position={'relative'} bottom={'4px'}>Create account Circle</Text>
                <form>
                    <FormControl onSubmit={ () => handleRegister()}>
                        <Input type="text" autoComplete="current-fullname" id="fullname" name="fullname" my={1} placeholder="Full Name*" color={'white'} borderColor={'#5C8374'} value={form.fullname}  onChange={handleChange} />
                        <Input type="email" autoComplete="current-email" id="email" name="email" my={1} placeholder="Email*" color={'white'} borderColor={'#5C8374'} value={form.email}  onChange={handleChange}/>
                        <Input type="password" autoComplete="current-password" id="password" name="password" my={1} placeholder="Password*" color={'white'} borderColor={'#5C8374'} value={form.password}  onChange={handleChange}/>
                        <Button onClick={ () => handleRegister()} color={'white'} backgroundColor={'red.500'} w={'100%'} borderRadius={'34px'} m={1}>Create</Button>
                    </FormControl>
                </form>
                <HStack spacing={0} w={'100%'} mt={2}>
                    <Text color={'white'} mr={2}>Already have account? </Text>
                    <Link style={{textDecoration: 'none'}}
                          href={"/login"} color={'red.500'}
                        >Login</Link>
                </HStack>
            </VStack>
            <ToastContainer />
        </Center>
    )
}