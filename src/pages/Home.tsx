import Feed from "../components/HomeComponent/Feed";
import NewTwit from "../components/HomeComponent/NewTwit";
import Layout from "./Layout";

export default function Hometest() {
    return (
        <Layout>
            <NewTwit />
            <Feed />
        </Layout>
    )
}