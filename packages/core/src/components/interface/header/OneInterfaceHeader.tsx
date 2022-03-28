import Cancel from '@/components/icons/Cancel'
import Edit from '@/components/icons/Edit'
import Logo from '@/components/icons/Logo'
import Menu from '@/components/icons/Menu'
import Publish from '@/components/icons/Publish'
import { usePublish } from '@/hooks/publish'
import { configModeAtom, editModeAtom } from '@/state/atoms'
import { useAtom } from 'jotai'
import React from 'react'

export default function OneInterfaceHeader() {
  const [editMode, setEditMode] = useAtom(editModeAtom)
  const [configMode, setConfigMode] = useAtom(configModeAtom)

  const { publish, loading } = usePublish()

  return (
    <div className="px-5 py-5 mb-4 bg-gray-100 shadow-2xl rounded-2xl flex justify-between items-center relative z-10">
      <div className="h-10 w-10 ">
        <Logo />
      </div>
      <div className="flex gap-4">
        <div>
          {editMode ? (
            <div className="flex gap-2 relative">
              <div
                className={
                  'h-8 w-8 rounded p-0.5 mr-1 cursor-pointer transition hover:bg-gray-200 active:scale-90' +
                  (loading ? ' opacity-30' : '')
                }
                onClick={() => setEditMode(!editMode)}
              >
                <Cancel />
              </div>
              <div
                className={
                  'h-8 w-8 rounded p-0.5 mr-1 cursor-pointer transition hover:bg-gray-200 active:scale-90' +
                  (loading ? ' opacity-30' : '')
                }
                onClick={() => publish()}
              >
                <Publish />
              </div>
            </div>
          ) : (
            <div
              className="h-8 w-8 rounded p-0.5 mr-1 cursor-pointer transition hover:bg-gray-200 active:scale-90"
              onClick={() => setEditMode(!editMode)}
            >
              <Edit />
            </div>
          )}
        </div>
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
