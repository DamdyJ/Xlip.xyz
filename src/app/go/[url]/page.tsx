"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RedirectURLPage() {
  const router = useRouter();
  const { url } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.xlip.xyz/api/links/${url}`, {
          method: "GET",
        });
        const data = await response.json();
        if (data.link && data.link.redirect) {
          const redirectTimeout = setTimeout(() => {
            console.error(
              "Redirect took too long. Redirecting to not found page...",
            );
            router.push("/notfound");
          }, 5000);

          router.push(data.link.redirect);
          window.onload = function () {
            clearTimeout(redirectTimeout);
          };
        } else {
          console.error("Redirect link not found");
          router.push("/notfound");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  if (loading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <h1 className="text-3xl font-semibold md:text-5xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <h1 className="text-3xl font-semibold md:text-5xl">Redirecting...</h1>
    </div>
  );
}
