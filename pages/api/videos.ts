// pages/api/videos/get.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function getVideos(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch("https://livepeer.studio/api/asset", {
      headers: {
        Authorization: "Bearer a7bdb3c6-748c-4fd3-9748-eadcaa2aed52"
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
}
