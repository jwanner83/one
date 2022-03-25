import LatestItem from '@/components/interface/config/latest/LatestItem'
import { LatestItemElement } from '@/components/interface/config/latest/LatestItems.types'
import React from 'react'

type LatestItemsParams = {
  label?: string
  items: LatestItemElement[]
}

export default function LatestItems({ label, items }: LatestItemsParams) {
  return (
    <div>
      {label && <h3 className="text-[18px] mb-2 mt-5">{label}</h3>}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item) => (
          <LatestItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}
