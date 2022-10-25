import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = req.query.url as string
  const { data: buffer } = await axios.get(url, {
    responseType: 'arraybuffer',
  })

  res.setHeader('Content-Type', 'application/pdf')

  return res.status(200).end(buffer)
}

export const config = {
  api: {
    responseLimit: false,
  },
}
