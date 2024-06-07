export default function MagicButton({
  text,
  isLoading,
}: {
  text: string;
  isLoading: boolean;
}) {
  return (
    <>
      <div className="group relative z-10 inline-flex">
        <div className="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
        <button
          disabled={isLoading}
          type="submit"
          className="relative inline-flex h-12 w-full overflow-hidden rounded-full p-[1px] disabled:cursor-progress md:w-fit"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#44BCFF_0%,#FF44EC_50%,#FF675E_75%,#44BCFF_100%)]" />
          <span
            className={`inline-flex h-full w-full ${isLoading ? "cursor-loading bg-slate-600" : "cursor-pointer bg-slate-950"} items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl`}
          >
            {isLoading ? "Loading..." : text}
          </span>
        </button>
      </div>
    </>
  );
}
