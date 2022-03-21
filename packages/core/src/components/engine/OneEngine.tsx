import { OnePageResponse } from '@/types/OnePage.types'
import React from 'react'

type OneEngineParams = {
  page: OnePageResponse
}

export default function OneEngine({ page }: OneEngineParams) {
  return <h1>{page?.title}</h1>
}
