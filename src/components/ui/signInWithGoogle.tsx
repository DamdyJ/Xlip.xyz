import { signIn } from "@/auth";
import prisma from "@/lib/prisma";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Image from "next/image";
export function SignInWithGoogle() {
  return (
    <form
      action={async () => {
        "use server";

        try {
          const cookie = cookies();
          const google = await signIn("google");
          // const user = await prisma.user.findFirst({
          //   where: { email: google.email },
          // });
          // const session = await prisma.session.create({
          //   data: {
          //     sessionToken: cookie.get("authjs.session-token"),
          //     userId: user?.id,
          //   },
          // });
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
        className="btn bg-white text-black hover:bg-white/80 w-full"
      >
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="google icon"
          loading="lazy"
          height={24}
          width={24}
        />
        <span>Sign in with Google</span>
      </button>
    </form>
  );
}
