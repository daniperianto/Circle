import { Box, Flex } from "@chakra-ui/react"
import Nav from "../components/Nav"
import CardProfile from "../components/CardProfile"
import SugestedAccount from "../components/SuggestedAccount"
import Creator from "../components/Creator"
import { PropsWithChildren } from "react"




export default function Layout(props: PropsWithChildren) {

    return (
        <Flex flexDirection="row">
            <Box w={'23vw'} position={'fixed'} 
                backgroundColor={'#191919'}  
                borderRight={'1px'}
                borderColor={'red.700'}>
                <Nav />
            </Box>
            <Box w={'23vw'}></Box>
            <Box w={'45vw'} backgroundColor={'#191919'} px={1} >
                {props.children}
            </Box>
            <Box w={'32vw'}></Box>
            <Box w={'32vw'} h={'100vh'} position={'fixed'} left={'67vw'}
                backgroundColor={'#191919'}  
                borderLeft={'1px'}
                borderColor={'red.700'}>
                <CardProfile />
                <SugestedAccount />
                <Creator />
            </Box>
        </Flex>
    )
}