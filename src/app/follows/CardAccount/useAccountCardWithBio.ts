import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {API} from "../../../libs/api.ts";
import User from "../../../model/User.ts";

export default function useAccountCardWithBio(user: User) {
    const navigate = useNavigate()
    const [ isFollowing, setIsFollowing ] = useState(false)
    async function isFollowingChange(id: number | undefined) {
        try {
            if(isFollowing) {
                await API.delete(`/follow/delete/${id}`)
                    .then( function () {
                        setIsFollowing(false)
                    })
                    .catch( function (error)  {
                        if(error.response.data.message == "failed") setIsFollowing(false)
                        if(error.response.status == 403) navigate("/login")
                    })
            } else {
                await API.post(`/follow/add/${id}`)
                    .then( function () {
                        setIsFollowing(true)
                    })
                    .catch( function (error) {
                        if(error.response.data.message == "failed") setIsFollowing(true)
                        if(error.response.data.message == "query error") setIsFollowing(true)
                        if(error.response.status == 403) navigate("/login")
                    })
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function getIsFollowing() {
        const response = await API.get(`/follow/is-following/${user.id}`)
        setIsFollowing(response.data)
    }



    return {
        isFollowing,
        isFollowingChange,
        getIsFollowing
    }
}