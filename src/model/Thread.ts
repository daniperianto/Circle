interface Thread {
    id?: number,
    content: string,
    image: string,
    created_at?: Date,
    user?: {
        username?: string,
        fullname?: string,
        photo_profile?: string,
    },
    total_likes?: number
}

export default Thread