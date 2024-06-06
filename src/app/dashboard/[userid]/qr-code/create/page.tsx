'use client'
import QRCode from "qrcode";
import { useState } from "react";

export default function QRCodeCreatePage() {
  const [username, setUsername] = useState<string>();
  const [src, setSrc] = useState<string>();
  async function generate() {
    const res = await QRCode.toDataURL(`${username}`);
    setSrc(res);
    console.log(res);
  }
  return (
    <>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={generate}>Generate</button>
      <img src={src} />
    </>
  );
}
