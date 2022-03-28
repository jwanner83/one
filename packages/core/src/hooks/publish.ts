import { editModeAtom } from '@/state/atoms'
import { useSetAtom } from 'jotai'
import { useState } from 'react'

export function usePublish() {
  const setEditMode = useSetAtom(editModeAtom)
  const [loading, setLoading] = useState(false)

  const publish = () => {
    console.log('publishing')
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setEditMode(false)
    }, 1000)
  }

  return {
    publish,
    loading
  }
}
