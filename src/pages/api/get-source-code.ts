import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = req.query.url as string
  const data = await (await fetch(url)).text()

  res.setHeader('Content-Type', 'text/plain')

  return res.status(200).send(data)
}
