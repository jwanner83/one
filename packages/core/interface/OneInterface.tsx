import { ReactNode } from 'react'

type OneInterfaceParmas = {
    children: ReactNode
}

export default function OneInterface ({ children }: OneInterfaceParmas) {
    return (
        <div>
            {children}
        </div>
    )
}