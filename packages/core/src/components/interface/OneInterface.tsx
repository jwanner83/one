import OneInterfaceConfig from '@/components/interface/config/OneInterfaceConfig'
import OneInterfaceHeader from '@/components/interface/header/OneInterfaceHeader'
import { configModeAtom } from '@/state/atoms'
import { useAtomValue } from 'jotai'
import React, { ReactNode } from 'react'

type OneInterfaceParmas = {
  children: ReactNode
}

export default function OneInterface({ children }: OneInterfaceParmas) {
  const configMode = useAtomValue(configModeAtom)

  return (
    <div className="h-screen relative">
      <div className="h-full grid grid-rows-one-layout p-8">
        <div>
          <OneInterfaceHeader />
        </div>
        <div className="rounded-2xl overflow-x-auto relative">
          {configMode && <OneInterfaceConfig />}
          {children}
        </div>
      </div>
    </div>
  )
}
