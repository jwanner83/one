import { OneEngine, OnePageResponse } from '@one/core'

type SlugParams = {
  response: OnePageResponse
}

export default function Slug({ response }: SlugParams) {
  return (
    <div className="bg-gray-100">
      <div className="container m-auto">
        <h1 className="text-8xl py-36 text-center">{response.title}</h1>

        <div className="p-14">
          <OneEngine page={response} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  console.log('slug', params.slug)
  const response = { title: params.slug.join('/'), content: 'content' } // replace with real page entry

  return {
    props: {
      response
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  return {
    paths: ['/test', '/test/test'],
    fallback: true
  }
}
