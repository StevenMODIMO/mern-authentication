import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const { dispatch } = useAuth()

    const login = async (email, password) => {
        setLoading(true)
        setError(null)

        const response = await fetch('http://localhost:3001/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password})
        })

        const json = await response.json()

        if(!response.ok) {
            setLoading(false)
            setError(json.error)
        }

        if(response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({ type: 'LOGIN', payload: json})

            setLoading(false)
        }
    }

    return { login, loading, error }
}