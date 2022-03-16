import React, { ReactNode } from 'react'

type OneInterfaceParmas = {
  children: ReactNode
}

export default function OneInterface({ children }: OneInterfaceParmas) {
  return (
    <div>
      <div>admin interface</div>
      {children}
    </div>
  )
}
