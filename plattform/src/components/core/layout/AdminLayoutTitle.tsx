import { Typography } from '@mui/material'
import Head from 'next/head'

type AdminLayoutTitleProps = {
  title: string
}

export default function AdminLayoutTitle({ title }: AdminLayoutTitleProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Typography variant="h1">{title}</Typography>
    </>
  )
}
