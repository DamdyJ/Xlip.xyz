import { Home, Link2, QrCode, LogOut } from "lucide-react";
import Link from "next/link";

export default function SideNav() {
  return (
    <nav className="flex min-h-screen w-full flex-col justify-between px-3 py-4 md:w-fit lg:min-w-60 bg-base-100">
      <ul className="flex flex-col gap-3">
        <a
          href="/"
          className="btn btn-ghost mb-8 w-full justify-start text-lg font-bold hover:bg-transparent"
        >
          Shr.fyi
        </a>
        <li>
          <button className="btn btn-primary w-full font-extrabold">
            Create new
          </button>
        </li>
        <div className="divider -my-2"></div>
        <li>
          <Link
            href={`/dashboard/home`}
            className="btn btn-neutral hover:bg-base-content/20 text-primary flex w-full items-center justify-start gap-3 font-semibold"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href={`/dashboard/home`}
            className="btn btn-ghost flex w-full items-center justify-start gap-3 font-semibold"
          >
            <Link2 size={20} />
            Links
          </Link>
        </li>
        <li>
          <Link
            href={`/dashboard/home`}
            className="btn btn-ghost flex w-full items-center justify-start gap-3 font-semibold"
          >
            <QrCode size={20} />
            QR Codes
          </Link>
        </li>
      </ul>
      <button className="btn btn-ghost text-error mb-4 w-full justify-start">
        <LogOut size={20} />
        Logout
      </button>
    </nav>
  );
}
