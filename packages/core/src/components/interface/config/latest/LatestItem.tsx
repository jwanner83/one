import { LatestItemElement } from '@/components/interface/config/latest/LatestItems.types'
import React from 'react'

type LatestItemParams = {
  item: LatestItemElement
}

export default function LatestItem({ item }: LatestItemParams) {
  return (
    <div className="bg-gray-200 rounded p-3 transition hover:bg-gray-300 active:scale-90 cursor-pointer">
      {item.type && (
        <div className="px-1 rounded bg-blue-200 inline-block mb-2 uppercase font-bold text-[12px]">
          {item.type}
        </div>
      )}
      <h4 className="font-bold mb-1 line-clamp-1">{item.name}</h4>
      <p className="line-clamp-2">{item.excerpt}</p>
    </div>
  )
}
