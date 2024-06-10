"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function LinkCounter() {
  const [linkCount, setLinkCount] = useState<number>(0);

  useEffect(() => {
    async function fetchLinkCount() {
      try {
        const response = await fetch("/api/count", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data.count)
        if (data.count) {
          setLinkCount(data.count.count);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchLinkCount();
  }, []);

  return (
    <div className="mx-auto mb-20 mt-8 flex w-fit flex-wrap items-center justify-center gap-4 rounded-lg bg-slate-800 p-4">
      <p className="text-center text-lg font-semibold text-white">
        Total Links Generated:
      </p>
      <CountUp
        start={0}
        end={linkCount}
        duration={3}
        separator=" "
        decimals={0}
        decimal=","
        prefix=""
        suffix=""
        className="rounded-md bg-slate-700 px-3 py-2 text-xl font-semibold text-white"
      ></CountUp>
    </div>
  );
}
