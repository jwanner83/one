import Logo from '@/components/icons/Logo'
import Menu from '@/components/icons/Menu'
import React from 'react'

export default function OneInterfaceHeader() {
  return (
    <div className="px-5 py-5 mb-4 bg-gray-100 shadow-2xl rounded-2xl flex justify-between items-center">
      <div className="h-10 w-10 ">
        <Logo />
      </div>
      <div>
        <div className="h-8 w-8">
          <Menu />
        </div>
      </div>
    </div>
  )
}
