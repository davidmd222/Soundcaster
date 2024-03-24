"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LoginWindow } from "./login-window";
import { useFarcasterIdentity } from "@/utils/use-farcaster-identity";
import { UserRound } from "lucide-react";
import { ChannelSwitch } from "./channel-change";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";

export function Nav({ setChannel }: any) {
  const { login } = usePrivy();
  return (
    <div className="flex justify-between w-full items-center sm:w-[500px] mt-6">
      <Dialog>
        <div className="flex flex-col">
          <h1 className="font-display sm:text-4xl text-3xl">Soundcaster</h1>
          <p>Listen to earn $HEARD and tip $DEGEN</p>
        </div>
        <div className="flex gap-4">
          <ChannelSwitch setChannel={setChannel} />
          <DialogTrigger>
            <Button variant="outline" size="icon">
              <UserRound className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <ThemeToggle />
        </div>
        <div className="mt-6 flex justify-center text-center">
          <button
            className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
            onClick={login}
          >
            Log in
          </button>
        </div>
      </Dialog>
    </div>
  );
}
