import Image from "next/image";
import React from "react";

export default function Avatar() {
  return (
    <div className="relative h-12 w-12 overflow-hidden rounded-full">
      <div className="group relative inline-flex">
        <div className="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#44BCFF_0%,#FF44EC_50%,#FF675E_75%,#44BCFF_100%)]" />
        <Image
          className="relative z-10 inline-flex h-12 w-12 overflow-hidden rounded-full border-secondary p-[3px]"
          src={"/me.svg"}
          alt="damdy junaedi"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}
