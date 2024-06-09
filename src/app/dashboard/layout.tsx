import SideNav from "@/components/sidenav";
import { Search } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* root */}
      <div className="divide-base-content/20 bg-base-300 flex divide-x">
        {/* side navbar */}
        <SideNav />
        {/* top-bottom layout */}
        <div className="divide-base-content/20 flex min-h-screen w-full flex-col divide-y">
          {/* top navbar */}
          <nav className="flex w-full max-h-16 justify-end p-3 bg-base-100">
            <ul className="flex items-center gap-3">
              <li>
                <label className="input input-bordered h-fit py-2 input-primary flex items-center gap-2">
                  <input
                    type="text"
                    className="min-w-80 grow"
                    placeholder="Search"
                  />
                  <Search size={16} />
                </label>
              </li>
              <li>
                <div className="bg-secondary flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                  <span>DJ</span>
                </div>
              </li>
            </ul>
          </nav>
          {/* body */}
          <section className="w-full">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </section>
        </div>
      </div>
    </>
  );
}
