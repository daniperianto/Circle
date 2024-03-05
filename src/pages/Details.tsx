
import { useParams } from "react-router-dom";
import CardThreadDetails from "../components/DetailThreadComponent/CardThreadDetail";
import Layout from "../components/Layout/Layout.tsx";
import ThreadReply from "../components/DetailThreadComponent/ThreadReply";

export default function Details() {
    const { id } = useParams()

    return (
        <Layout>
            <CardThreadDetails id={Number(id)} />
            <ThreadReply id={Number(id)} />
        </Layout>
    )
}