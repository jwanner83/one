import { useState } from 'react'

export function useLogout() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const logout = () => {
    // login functionality
  }

  return {
    logout,
    loading,
    message
  }
}
