import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="mb-4 text-3xl font-semibold text-error md:text-5xl text-center">
            Not Found
          </h2>
          <p className="text-white md:text-lg text-center">
            Could not find requested resource
          </p>
          <Link className="btn btn-primary" href="/">
            Go to homepage
          </Link>
        </div>
      </div>
    </>
  );
}
