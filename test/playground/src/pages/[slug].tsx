import { OneEngine, OnePageResponse } from '@one/core'

type SlugParams = {
  response: OnePageResponse
}

export default function Slug({ response }: SlugParams) {
  return (
    <>
      <OneEngine page={response} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const response = { title: params.slug, content: 'content' } // replace with real page entry

  return {
    props: {
      response
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  return {
    paths: ['/deger'],
    fallback: true
  }
}
