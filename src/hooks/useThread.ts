import { useQuery } from "@tanstack/react-query";
import { API } from "../libs/api";

import { FormEvent } from "react";
import React from "react";

interface NewThread {
    content: string,
    image?: Blob | MediaSource | string
}

export function useThread() {
    const [form, setform] = React.useState<NewThread>({
        content: "",
        image: ""
    })

    async function getThreads() {
        try {
            const response = await API.get("/threads/all")
            return response.data
        } catch(error) {
            throw new Error
        }
    }

    const { data: threads, refetch } = useQuery({ queryKey: ['todos'], queryFn: getThreads})

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, files } = e.target

        if(files) {
            setform({
                ...form,
                [name]: files[0]
            })
        } else {
            setform({
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
        event.preventDefault()

        const formData = new FormData

        formData.append("content", form.content)
        formData.append("image", form.image as File)

        API.post("/thread", formData)
        refetch()
    }

    return {
        form,
        threads,
        handleChange,
        fileInputRef,
        handleClickButton,
        handleSubmit
    }
}