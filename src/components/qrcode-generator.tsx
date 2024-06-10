"use client";
import Image from "next/image";
import QRCode from "qrcode";
import { useState } from "react";
import { z } from "zod";

// Define the URL schema with a custom regex pattern
const urlSchema = z
  .string()
  .regex(/^https:\/\/(www\.)?xlip\.xyz\/go\//, {
    message:
      "Invalid URL. Please enter a URL in the format: https://www.xlip.xyz/go/{unique}",
  });

export default function QRCodeGenerator() {
  const [username, setUsername] = useState<string>("");
  const [qrImg, setQrImg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    setQrImg("");
    try {
      // Validate the username (URL) against the schema
      urlSchema.parse(username);
      setError(null); // Clear any previous errors
      const res = await QRCode.toDataURL(username);
      setQrImg(res);
    } catch (e) {
      if (e instanceof z.ZodError) {
        setError(e.errors[0].message);
      }
    }
  }

  return (
    <>
      <section className="my-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-end gap-3">
            <div>
              <div className="flex flex-col gap-3">
                <label htmlFor="qr" className="text-2xl font-semibold">
                  QR Code Generator
                </label>
                <p>Only works with xlip url.</p>
                <p>
                  Ex: https://xlip.xyz/go/
                  <span className="italic text-blue-600">unique</span>
                </p>
                <div className="flex gap-3">
                  <input
                    required
                    autoComplete="off"
                    id="qr"
                    type="text"
                    placeholder="Enter Your URL Here"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="input input-bordered w-full max-w-xs rounded-full bg-sky-50 text-black/80"
                  />
                  <button
                    type="submit"
                    onClick={generate}
                    className="btn btn-primary w-fit rounded-full"
                  >
                    Generate
                  </button>
                </div>
              </div>
              {error && <p className="my-2 text-center text-error">{error}</p>}
            </div>
          </div>
          {qrImg && (
          <div className="flex flex-col gap-4">
            <Image src={qrImg} alt="Generated QR Code" width={200} height={200} />
            <a
              href={qrImg}
              download="qrcode.png"
              className="btn btn-secondary rounded-full"
            >
              Save QR Code
            </a>
          </div>
          )} 
        </div>
      </section>
    </>
  );
}
