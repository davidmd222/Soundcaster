// pages/api/scores/get.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function getScores(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = 'https://graph.cast.k3l.io/scores/global/following/rankings';
    const params = { offset: 0, limit: 20 };
    const response = await fetch(`${url}?${new URLSearchParams(params)}`, {
      headers: { 'accept': 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch scores');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching scores:", error);
    res.status(500).json({ error: "Failed to fetch scores" });
  }
}
