import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { faArrowRightFromBracket, faHeart, faHouse, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
    return (
        <Flex flexDirection="column" bg='#191919' h='100vh' px={5} pt={3}>
            <Box>
                <Text fontSize={'5xl'} as={'b'} color={'red.600'}>Circle</Text>
            </Box>
            <Box h='40vh' px={2}>
                <a href="/"><Text ml={3} my={4} color={'white'}><FontAwesomeIcon style={{marginRight:"15px", color:"#ffffff"}} icon={faHouse} size="xl" />Home</Text></a>
                <a href="/search"><Text ml={3} color={'white'} my={4}><FontAwesomeIcon style={{marginRight:"15px", color:"#ffffff"}} size="xl" icon={faMagnifyingGlass} />Search</Text></a>
                <a href="/follows"><Text ml={3} color={'white'} my={4}><FontAwesomeIcon style={{marginRight:"15px", color:"#ffffff"}} size="xl" icon={faHeart} />Follows</Text></a>
                <a href="/profile"><Text ml={3} color={'white'} my={4}><FontAwesomeIcon style={{marginRight:"15px", color:"#ffffff"}} size="xl" icon={faUser} />Profile</Text></a>
                <Button mt={5} colorScheme="red" width="100%" borderRadius="25px">Create Post</Button>
            </Box>
            <Spacer />
            <Box h='10vh' px={2}>
                <Text color={'white'}><FontAwesomeIcon style={{marginRight:"10px", color:"#ffffff"}} icon={faArrowRightFromBracket} rotation={180} />Logout</Text>
            </Box>
        </Flex>
    )
}