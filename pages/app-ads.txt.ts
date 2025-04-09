import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.send('google.com, pub-3631717657404519, DIRECT, f08c47fec0942fa0');
}
