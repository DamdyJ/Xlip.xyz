import { SignInWithGithub } from "@/components/ui/signInWithGithub";
import { SignInWithGoogle } from "@/components/ui/signInWithGoogle";

export default async function SignInPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-base-300 px-4">
      <div className="flex w-80 flex-col items-center gap-4 rounded-lg bg-base-100 p-4">
        <h1 className="mb-2 text-4xl font-semibold">Sign In</h1>
        <h2 className="mb-4">Welcome back.</h2>
        <div className="w-full flex flex-col gap-4">
          <SignInWithGithub />
          <SignInWithGoogle />
        </div>
      </div>
    </div>
  );
}
