import Logo from '@/components/icons/Logo'
import Menu from '@/components/icons/Menu'
import { configModeAtom } from '@/state/atoms'
import { useAtom } from 'jotai'
import React from 'react'

export default function OneInterfaceHeader() {
  const [configMode, setConfigMode] = useAtom(configModeAtom)

  return (
    <div className="px-5 py-5 mb-4 bg-gray-100 shadow-2xl rounded-2xl flex justify-between items-center relative z-10">
      <div className="h-10 w-10 ">
        <Logo />
      </div>
      <div>
        <div
          className="h-8 w-8 rounded p-0.5 mr-1 cursor-pointer transition hover:bg-gray-200 active:scale-90"
          onClick={() => setConfigMode(!configMode)}
        >
          <Menu />
        </div>
      </div>
    </div>
  )
}
