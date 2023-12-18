interface ThreadCard {
    profile_picture: string,
    fullname: string,
    username: string,
    created_at: Date,
    content: string,
    image: string
}

export default function ThreadCard(props: ThreadCard) {
    return (
        <>
            <img src={props.profile_picture} alt="profile-picture"/>
            <p>{props.fullname}</p>
            <p>{props.username}</p>
            <p>.</p>
            <p>{props.content}</p>
            <img src={props.image} alt="image" />
        </>
    )
}