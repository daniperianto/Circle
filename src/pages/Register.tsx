import { VStack, Text, Input, Button, HStack, Link, FormControl, Center } from "@chakra-ui/react";


export default function Register() {
    return (
        <Center 
            backgroundColor={'#191919'}
            position={'fixed'}
            w={'100vw'}
            h={'100vh'}>
            <VStack 
                spacing={0}
                minWidth={'300px'}
                width={'30vw'}
                position={'relative'}
                bottom={'20px'}
                >
                <Text color={'red.500'} fontSize={'4xl'} w={"100%"} as={'b'} m={0}>circle</Text>
                <Text color={'white'} fontSize={'3xl'} w={"100%"} position={'relative'} bottom={'4px'}>Create account Circle</Text>
                <FormControl>
                    <Input type="text" name="fullname" my={1} placeholder="Full Name*" color={'white'}/>
                    <Input type="email" name="email" my={1} placeholder="Email*" color={'white'}/>
                    <Input type="password" name="password" my={1} placeholder="Password*" color={'white'}/>
                    <Button>Create</Button>
                </FormControl>
                <HStack spacing={0}>
                    <Text>Already have account?</Text>
                    <Link style={{textDecoration: 'none'}}
                        href="/login"
                        >Login</Link>
                </HStack>
            </VStack>
        </Center>
    )
}