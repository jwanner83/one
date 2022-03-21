import { useState } from 'react'

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const login = () => {
    // login functionality
  }

  return {
    login,
    loading,
    message
  }
}
