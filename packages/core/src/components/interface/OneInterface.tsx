import OneInterfaceHeader from '@/components/interface/header/OneInterfaceHeader'
import React, { ReactNode } from 'react'

type OneInterfaceParmas = {
  children: ReactNode
}

export default function OneInterface({ children }: OneInterfaceParmas) {
  return (
    <div className="h-screen relative">
      <div className="h-full grid grid-rows-one-layout p-8">
        <div>
          <OneInterfaceHeader />
        </div>
        <div className="rounded-2xl overflow-x-auto">{children}</div>
      </div>
    </div>
  )
}
