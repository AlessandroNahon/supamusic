import { useState } from 'react'

import { useAppContext } from "../context/appContext";

export default function useMagiclink() {
    const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

    const { auth } = useAppContext();

  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await auth.signInWithOtp({ email })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  return { loading, email, setEmail, handleLogin }
}