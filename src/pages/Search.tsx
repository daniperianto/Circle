import { HStack, Input, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import { RiUserSearchLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import User from "../model/User";
import { API } from "../libs/api";

export default function Search() {
    const [ search, setSearch ] = useState('')
    const [ users, setUsers ] = useState<User>([])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    async function getResult() {
        try {
            const result = await API
        } catch(error) {
            console.log(error)
        }
    }



    return (
        <Layout>
            <VStack spacing={0} mx={3}>
                <HStack 
                    spacing={0}
                    backgroundColor={'#352F44'}
                    width={'100%'}
                    my={5}
                    borderRadius={'30px'}
                    >

                    <RiUserSearchLine style={{
                        fontSize: "25px",
                        color: "white",
                        marginLeft: "5px",
                        marginRight: "5px"
                    }}/>
                    <Input 
                        type="text"
                        value={search}
                        onChange={handleChange}
                        p={1}
                        color={'white'}
                        border={'none'}
                        borderRightRadius={'30px'} />
                </HStack>
                {

                }
            </VStack>
        </Layout>
    )
}