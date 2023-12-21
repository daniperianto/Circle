import Feed from "../components/Feed";
import NewTwit from "../components/NewTwit";
import Layout from "./Layout";

export default function Hometest() {
    return (
        <Layout>
            <NewTwit />
            <Feed />
        </Layout>
    )
}