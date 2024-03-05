import { HStack, Input, VStack } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout.tsx";
import { RiUserSearchLine } from "react-icons/ri";
import { useEffect } from "react";
import AccountCardWithBio from "../follows/CardAccount/AccountCardWithBio.tsx";
import useSearch from "./useSearch.ts";

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
                        <AccountCardWithBio
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