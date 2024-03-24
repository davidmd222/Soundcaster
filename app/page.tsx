"use client";
import { useState } from "react";
import UploadForm from "@/components/upload-form";
import Feed from "@/components/feed";
import { LoginWindow } from "@/components/login-window";
import { useFarcasterIdentity } from "@/utils/use-farcaster-identity";
import type { FarcasterUser } from "@/utils/types/farcaster-user";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Nav } from "@/components/nav";
import { PrivyProvider } from "@privy-io/react-auth";


export default function Page({}: {
  searchParams: Record<string, string>;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const [channel, setChannel] = useState(
    "chain://eip155:7777777/erc721:0x36ef4ed7a949ee87d5d2983f634ae87e304a9ea2"
  );

  const { farcasterUser, loading, startFarcasterSignerProcess, logout } =
    useFarcasterIdentity();

  return (
    <PrivyProvider
      appId="clu4j453o096j4pr6kikthva2"
      config={{
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://your-logo-url",
        },
      }}
    >
      <div className="flex flex-col min-h-screen w-full sm:px-0 px-3 justify-center items-center gap-6 mb-6">
        <Dialog open={open} onOpenChange={setOpen}>
          <Nav setChannel={setChannel} />
          <Separator className="sm:w-[500px] w-sm" />
          <div className="flex flex-col gap-4">
          <DialogTrigger asChild>
            <Button className="sm:w-[500px] w-full mt-4" variant="outline">
              +
            </Button>
          </DialogTrigger>
            <iframe
              src="https://ipfs.livepeer.studio/ipfs/bafybeigjqjk2ssav2aeplct5jbv4v3ikyvgqf433od2cptrmabtpdk6y3i"
              width="560"
              height="315"
              title="Video 1"
              allowFullScreen
            ></iframe>
            <div className="flex gap-12 items-center">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Like</span>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Comment</span>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Recast</span>
              </button>
            </div>
            <iframe
              src="https://ipfs.livepeer.studio/ipfs/bafybeibnvah2glmc3mayspnpdtncm54kznxcoosqk4uovnpfuv7wna2p2e"
              width="560"
              height="315"
              title="Video 2"
              allowFullScreen
            ></iframe>
            <div className="flex gap-12 items-center">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Like</span>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Comment</span>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Recast</span>
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <iframe
              src="https://ipfs.livepeer.studio/ipfs/bafybeih66sgdbgpafhiul3e7l6n3gle3zdssqmoltrzs5745t42lwtr6ce"
              width="560"
              height="315"
              title="Video 3"
            ></iframe>
            <div className="flex gap-12 items-center">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Like</span>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Comment</span>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Recast</span>
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <iframe
              src="https://ipfs.livepeer.studio/ipfs/bafybeig5vovxiuaqrsjnmw52xjiox2qx6elkolprguyfj2itw44vzvvpvi"
              width="560"
              height="315"
              title="Video 4"
    
              allowFullScreen
            ></iframe>
            <div className="flex gap-12 items-center">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Like</span>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Comment</span>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Recast</span>
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-auto"
                viewBox="0 0 0"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-9a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </Dialog>
      </div>
    </PrivyProvider>
  );
}
