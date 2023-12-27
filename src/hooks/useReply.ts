import { FormEvent, useState } from "react"
import { API } from "../libs/api"
import React from "react"

interface newReply {
    content: string,
    image?: Blob | MediaSource | string 
}

export function useReply(id: number) {
    const [ form , setForm ] = useState<newReply>({
        content: "",
        image: ""
    })

    async function getReply() {
        try {
            const response = await API.get(`thread/${id}/replies`)
            return response.data
        } catch(error) {
            throw new Error
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, files } = e.target

        if(files) {
            setForm({
                ...form,
                [name]: files[0]
            })
        } else {
            setForm({
                ...form,
                [name]: value
            })
        }
    }

    const fileInputRef = React.useRef<HTMLInputElement>(null)

    function handleClickButton() {
        fileInputRef.current?.click()
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        const formData = new FormData

        formData.append("content", form.content)
        formData.append("image", form.image as File)

        console.log(form.image)

        API.post(`/thread/${id}/reply/add`, formData)
        setForm({
            content: "",
            image: ""
        })
        //window.location.reload()
    }

    return {
        form,
        handleChange,
        fileInputRef,
        handleClickButton,
        handleSubmit,
        getReply
    }
}