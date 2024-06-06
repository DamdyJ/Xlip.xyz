import { signOut } from "@/auth";
import { LogOut } from "lucide-react";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="btn btn-error w-full">
        <LogOut size={20} />
        <span>Sign Out</span>
      </button>
    </form>
  );
}
