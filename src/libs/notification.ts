import { toast } from "react-toastify"

export default new class Notification {
    success(message: string) {
        toast.success(message, {
            autoClose: 2000,
            theme: 'dark',
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true
        })
    }

    error(message: string) {
        toast.error(message, {
            autoClose: 2000,
            theme: 'dark',
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true
        })
    }
}