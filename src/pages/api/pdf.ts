import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = req.query.url as string

  const response = await fetch(url)
  const blob = await response.blob()
  const arrayBuffer = await blob.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  res.setHeader('Content-Type', 'application/pdf')

  return res.status(200).end(buffer)
}

export const config = {
  api: {
    responseLimit: false,
  },
}
