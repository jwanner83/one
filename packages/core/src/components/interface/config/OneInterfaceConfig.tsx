import LatestItems from '@/components/interface/config/latest/LatestItems'
import { pages } from '@/mock/pages'
import { posts } from '@/mock/posts'
import React from 'react'

export default function OneInterfaceConfig() {
  return (
    <div className="h-full w-full absolute overflow-x-scroll bg-gray-100 p-6">
      <div>
        <h1 className="text-[30px] font-bold mb-4">Hello Jonas</h1>

        <LatestItems label="latest pages" items={pages} />
        <LatestItems label="latest posts" items={posts} />
      </div>
    </div>
  )
}
