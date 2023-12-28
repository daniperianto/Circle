import Feed from "../components/HomeComponent/Feed";
import NewTwit from "../components/HomeComponent/NewTwit";
import Layout from "./Layout";

export default function Home() {
    return (
        <Layout>
            <NewTwit />
            <Feed />
        </Layout>
    )
}