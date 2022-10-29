import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = req.query.url as string

  const buffer = Buffer.from(await (await fetch(url)).arrayBuffer())

  res.setHeader('Content-Type', 'application/pdf')

  return res.status(200).end(buffer)
}

export const config = {
  api: {
    responseLimit: false,
  },
}
