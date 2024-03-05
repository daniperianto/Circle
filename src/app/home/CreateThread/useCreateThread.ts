
import { FormEvent } from "react";
import React from "react";
import {API} from "../../../libs/api.ts";

interface NewThread {
    content: string,
    image?: Blob | MediaSource | string
}

export function useCreateThread() {
    const [form, setForm] = React.useState<NewThread>({
        content: "",
        image: ""
    })

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

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData

        formData.append("content", form.content)
        formData.append("image", form.image as File)

        await API.post("/thread/add", formData)
        setForm({
            content: "",
            image: ""
        })
    }

    return {
        form,
        handleChange,
        fileInputRef,
        handleClickButton,
        handleSubmit
    }
}