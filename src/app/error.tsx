"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-error md:text-5xl mb-4 text-center">
          Something went wrong!
        </h2>
        <button className="btn btn-error" onClick={() => reset()}>
          Try again
        </button>
        <Link className="btn btn-outline btn-primary" href="/">
          Go to homepage
        </Link>
      </div>
    </div>
  );
}
