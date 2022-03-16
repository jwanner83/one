import React, { ReactNode } from 'react'
import OneInterface from '../interface/OneInterface'

type OneProviderParams = {
  children: ReactNode
}

export default function OneProvider({ children }: OneProviderParams) {
  return <OneInterface>{children}</OneInterface>
}
