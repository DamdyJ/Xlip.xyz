import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export function SignInWithGithub() {
  return (
    <form
      action={async () => {
        "use server";
        try {
          await signIn("github");
          
        } catch (error) {
          if (error instanceof AuthError) {
            return redirect(`/api/auth?error=${error.type}`);
          }
          throw error;
        }
      }}
    >
      <button
        type="submit"
        className="btn bg-[#24292f] text-white hover:bg-[#24292f]/80 w-full"
      >
        <img
          src="https://authjs.dev/img/providers/github.svg"
          loading="lazy"
          height={24}
          width={24}
        />
        <span>Sign in with GitHub</span>
      </button>
    </form>
  );
}
