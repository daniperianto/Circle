import ProfileCard from "./ProfileCard/ProfileCard.tsx";
import Layout from "../../components/Layout/Layout.tsx";

export default function Profile() {
    const user = JSON.parse(localStorage.user)

    return (
        <Layout>
            <ProfileCard
                username={user.username}
                id={user.id}
                fullname={user.fullname}
                photo_profile={user.photo_profile}
                background_image={user.background_image}
                created_at={user.created_at}
                bio={user.bio}
            />
        </Layout>
    )
}