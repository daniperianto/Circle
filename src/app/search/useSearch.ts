import { useState } from "react"
import User from "../../model/User.ts"
import { API } from "../../libs/api.ts"

export default function useSearch() {
    const [ search, setSearch ] = useState('')
    const [ users, setUsers ] = useState<User[]>([])
    console.log(search)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    async function getResult() {
        try {
            const response = await API.get(`/auth/search/${search}`)

            setUsers(response.data)
        } catch(error) {
            console.log(error)
            setUsers([])
        }
    }

    return {
        search,
        users,
        handleChange,
        getResult
    }
}