import Feed from "./Feed/Feed.tsx";
import CreateThread from "./CreateThread/CreateThread.tsx";
import Layout from "../../components/Layout/Layout.tsx";

export default function Home() {
    return (
        <Layout>
            <CreateThread />
            <Feed />
        </Layout>
    )
}