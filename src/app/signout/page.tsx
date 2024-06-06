import { SignOut } from "@/components/ui/signOutButton";
import React from "react";

export default function SignOutPage() {
  return (
    <div className="flex min-h-screen w-full px-4 items-center justify-center bg-base-300">
      <div className="flex h-fit w-80 flex-col items-center justify-between gap-4 rounded-lg bg-base-100 p-4">
        <h1 className="mb-2 text-4xl font-semibold">Sign Out</h1>
        <h2 className="mb-4 text-center">Are you sure you want to sign out?</h2>
        <div className="w-full">
          <SignOut />
        </div>
      </div>
    </div>
  );
}
