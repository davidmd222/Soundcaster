"use client";
import { useState, useEffect } from "react";
import { useFarcasterIdentity } from "@/utils/use-farcaster-identity";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import "./globals.css";
import { PrivyProvider } from "@privy-io/react-auth";

type Video = {
  downloadUrl: string;
  name: string;
  score?: Score; // Add optional Score field to Video type
};

type Score = {
  fid: number;
  fname: string;
  username: string;
  rank: number;
  score: number;
  percentile: number;
};

function VideoFrame({ src }: { src: string }) {
  return (
    <div className="video-frame w-full">
      <video controls className="w-full" src={src}></video>
    </div>
  );
}

function VideoActions({ name }: { name: string }) {
  return (
    <div className="video-actions">
      <div className="-mt-1 mb-4">{name}</div>
      {/* Add other actions/buttons here */}
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const [scores, setScores] = useState<Score[]>([]);
  const { loading, startFarcasterSignerProcess, logout } = useFarcasterIdentity();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch videos
        const videosResponse = await fetch("/api/videos");
        if (!videosResponse.ok) {
          throw new Error("Failed to fetch videos");
        }
        const videosData = await videosResponse.json();
        setVideos(videosData);

        // Fetch scores from the new API route
        const scoresResponse = await fetch("/api/scores");
        if (!scoresResponse.ok) {
          throw new Error("Failed to fetch scores");
        }
        const scoresData = await scoresResponse.json();
        setScores(scoresData.result);

        // Map scores to videos using index as identifier
        const videosWithScores = videosData.map((video, index) => {
          const score = scoresData.result[index];
          return { ...video, score };
        });
        setVideos(videosWithScores);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PrivyProvider
      appId="clu4j453o096j4pr6kikthva2"
      config={{
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://your-logo-downloadUrl",
        },
      }}
    >
      <div className="flex flex-col min-h-screen w-full sm:px-0 px-3 justify-center items-center gap-6 mb-6">
        <Dialog open={open} onOpenChange={setOpen}>
          <Nav />
          <DialogTrigger asChild>
            <Button className="sm:w-[500px] w-full mt-4" variant="outline">
              +
            </Button>
          </DialogTrigger>
          <div className="flex flex-col gap-4 w-full max-w-4xl m-auto">
            {videos.map((video, index) => (
              <div key={index}>
                <VideoFrame src={video.downloadUrl} />
                <VideoActions name={video.name} />
                {video.score && (
                  <div>
                    <p>Rank: {video.score.rank}, Score: {video.score.score.toFixed(4)}, Percentile: {video.score.percentile}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Dialog>
      </div>
    </PrivyProvider>
  );
}
