import React from "react"
import { API } from "./api"

type IthreadPost = {
    content: string
    image?: Blob | MediaSource | string
}

export function useThread() {
    const [form, setForm] = React.useState<IthreadPost>({
        content: '',
        image: ''
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, files } = e.target

        if(files) {
            setForm({
                ...form,
                [name]: files
            })
        } else {
            setForm({
                ...form,
                [name]: value
            })
        }
    }

    const fileInputRef = React.useRef<HTMLFormElement>(null)

    function handleClickButton() {
        fileInputRef.current?.click()
    }

    async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        try {
            e.preventDefault()

            const formData = new FormData()

            formData.append("content", form.content)
            formData.append("image", form.image as File)
            console.log(formData)

            await API.post("/thread/add", formData)
        } catch (error) {
            console.log(error)
        }
        
    }

    return {
        handleChange,
        handleClickButton,
        fileInputRef,
        handleSubmit
    }
}