import { editModeAtom } from '@/state/atoms'
import { OnePageResponse } from '@/types/OnePage.types'
import { useAtomValue } from 'jotai'
import React from 'react'
import { createReactEditorJS } from 'react-editor-js'

const ReactEditorJS = createReactEditorJS()

type OneEngineParams = {
  page: OnePageResponse
}

export default function OneEngine({ page }: OneEngineParams) {
  const editMode = useAtomValue(editModeAtom)

  return (
    <div>
      <h1>{page?.title}</h1>
      <main>{editMode ? <ReactEditorJS /> : <p>content</p>}</main>
    </div>
  )
}
