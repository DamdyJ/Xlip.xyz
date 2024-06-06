import { auth } from "@/auth";
import React from "react";

export default async function Dashboard() {
  const session = await auth();
  return (
    <>
      {/* This page is going to find the userid when from token than redirect it to dashboard/[userid]/home */}
      <p>User: {session?.user?.name}</p>
    </>
  );
}
