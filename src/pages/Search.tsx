import { HStack, Input, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import { RiUserSearchLine } from "react-icons/ri";
import { useEffect } from "react";
import CardAccountWithBio from "../components/CardAccountWithBio";
import useSearch from "../hooks/useSearch";

export default function Search() {
    const { search, users, handleChange, getResult } = useSearch()

    useEffect(() => {
        getResult()
    }, [search])



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
                        placeholder="Search user"
                        p={1}
                        color={'white'}
                        border={'none'}
                        borderRightRadius={'30px'} />
                </HStack>
                {
                    users.map((user) => (
                        <CardAccountWithBio 
                            id={user.id}
                            photoProfile={user.photo_profile}
                            fullname={user.fullname}
                            username={user.username}
                            bio={user.bio}
                            />
                    ))
                }
            </VStack>
        </Layout>
    )
}