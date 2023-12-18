import { Box, Flex } from "@chakra-ui/react"
import Nav from "../components/Nav"


export default function Home() {

    return (
        <Flex flexDirection="row">
            <Box w={'23vw'}>
                <Nav />
            </Box>
            <Box w={'50vw'}>
                <h1>Hello World</h1>
            </Box>
            <Box w={'27vw'}>

            </Box>

        </Flex>
    )
}