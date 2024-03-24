"use client";

import { useState, useEffect, React } from "react";
import { useFarcasterIdentity } from "@/utils/use-farcaster-identity";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import "./globals.css";
import { PrivyProvider } from "@privy-io/react-auth";

type Video = {
  downloadUrl: string;
  name: string;
};

function VideoFrame({ src }: { src: string }) {
  return (
    <div className="video-frame w-full">
      <video controls className="w-full" src={src}>
      </video>
    </div >
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

export default function Page({ }: {
  searchParams: Record<string, string>;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const [channel, setChannel] = useState<string>("chain://eip155:7777777/erc721:0x36ef4ed7a949ee87d5d2983f634ae87e304a9ea2");
  const [videos, setVideos] = useState<Video[]>([]);
  const { farcasterUser, loading, startFarcasterSignerProcess, logout } = useFarcasterIdentity();

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("/api/videos");
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        console.log({ data })
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    fetchVideos();
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
          <Nav setChannel={setChannel} />
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
              </div>
            ))}
          </div>
        </Dialog>
      </div >
    </PrivyProvider >
  );
}
