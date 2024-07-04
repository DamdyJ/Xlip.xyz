"use client";
import Image from "next/image";
import React, { useState } from "react";
import QRCode from "qrcode";
import { generateRandomString } from "@/utils/random-string-generator";
import { Button } from "./ui/button";
export default function GenerateQR() {
  const [qrImg, setQrImg] = useState<string>("");
  const generateQR = async (text: string) => {
    try {
      const qr = await QRCode.toDataURL(text);
      console.log(qr);
      setQrImg(qr);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Image src={qrImg} alt="qr" width={200} height={200} />
      <Button onClick={() => generateQR(generateRandomString(12))}>
        Generate
      </Button>
      <a href={qrImg} download="qrcode.png" className="p-12 bg-red-500 text-white">
        Download
      </a>
    </>
  );
}
