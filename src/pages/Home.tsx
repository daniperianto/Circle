import { Box, Flex } from "@chakra-ui/react"
import Nav from "../components/Nav"
import CardProfile from "../components/CardProfile"
import SugestedAccount from "../components/SuggestedAccount"



export default function Home() {

    return (
        <Flex flexDirection="row">
            <Box w={'23vw'}>
                <Nav />
            </Box>
            <Box w={'45vw'}>
                <h1>Hello World</h1>
            </Box>
            <Box w={'32vw'} backgroundColor={'black'}>
                <CardProfile />
                <SugestedAccount />
            </Box>
        </Flex>
    )
}