import CardMainProfile from "../components/CardMainProfile";
import Layout from "./Layout";

export default function Profile() {
    const user = JSON.parse(localStorage.user)

    return (
        <Layout>
            <CardMainProfile
                username={user.username}
                id={user.id}
                fullname={user.fullname}
                photo_profile={user.photo_profile}
                background_image={user.background_image}
                created_at={user.created_at}
            />
        </Layout>
    )
}