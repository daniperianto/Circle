interface User {
    id?: number,
    fullname?: string,
    email?: string,
    username?: string,
    password?: string,
    photo_profile?: string,
    background_image?: string,
    bio?: string,
    created_at?: Date
}

export default User