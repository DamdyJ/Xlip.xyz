import QRCode from "qrcode";

export const QRGenerator = async (text: string) => {
  try {
    const qr = await QRCode.toDataURL(text);
    return qr;
  } catch (err) {
    console.error(err);
    return "";
  }
};
