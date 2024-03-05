import { Card, CardBody, HStack, Text } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Creator() {
    return (
        <>
            <Card backgroundColor={'#352F44'} m={3}>
                <CardBody padding={3}>
                    <HStack>
                        <Text color={'#B9B4C7'}>Developed By</Text>
                        <Text color={'white'}>Dani Perianto ·</Text>
                        <FaGithub color={'#B9B4C7'} size={'1.5em'}/>
                        <FaLinkedin color={'#B9B4C7'} size={'1.5em'}/>
                        <FaFacebook color={'#B9B4C7'} size={'1.5em'}/>
                        <FaInstagram color={'#B9B4C7'} size={'1.5em'}/>
                        
                    </HStack>
                </CardBody>
            </Card>
        </>
    )
}