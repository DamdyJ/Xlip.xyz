"use client";

import { useEffect, useState } from "react";
import { getCount } from "@/lib/action";
import CountUp from "react-countup";

export default function LinkCounter() {
  const [linkCount, setLinkCount] = useState<number>(0);

  useEffect(() => {
    getCount().then(setLinkCount).catch(console.error);
  }, []);

  return (
    <div className="mx-auto mb-20 mt-8 w-fit rounded-lg bg-slate-800 p-4 flex gap-4 items-center">
      <p className="text-center text-lg font-semibold text-white">
        Total Links Generated:
      </p>
        <CountUp
          start={0}
          end={linkCount}
          duration={6}
          separator=" "
          decimals={0}
          decimal=","
          prefix=""
          suffix=""
          className="rounded-md bg-slate-700 py-2 px-3 text-xl font-semibold text-white"
          // onEnd={() => console.log("Ended! 👏")}
          // onStart={() => console.log("Started! 💨")}
        >
          {/* {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} />
            <button onClick={start}>Start</button>
          </div>
        )} */}
        </CountUp>
    </div>
  );
}
