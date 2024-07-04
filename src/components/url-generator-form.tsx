"use client";
import urlGenerator from "@/actions/url-generator-action";
import { Button } from "./ui/button";
import { URLType, urlSchema } from "@/types/schema/url-schema";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Clipboard } from "lucide-react";
import { useState } from "react";
import MinimalistGenerator from "./minimalist-generator";
import { CopyToClipboard } from "@/utils/copy-to-clipboard";
import { GeneratedURLType } from "@/types/generated-url";
import { QRGenerator } from "@/utils/qr-generator";

export default function URLGeneratorForm() {
  const [urls, setUrls] = useState<GeneratedURLType>({
    aiSuggestion: [""],
    minimalist: "",
    qrcode: "",
  });
  const [pressed, setPressed] = useState<number[]>([]);
  const [qrGenerated, setQrGenerated] = useState<boolean>(false);
  const [qrImg, setQrImg] = useState<string | null>("");
  const handleButtonClick = (index: number, url: string) => {
    if (!pressed.includes(index)) {
      setPressed((prevPressed) => [...prevPressed, index]);
    }
    CopyToClipboard(`https://www.xlip.xyz/go/${url}`);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<URLType>({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      url: "",
    },
  });

  const onSubmit: SubmitHandler<URLType> = async (data) => {
    const result = urlSchema.safeParse(data);
    if (!result.success) {
      result.error.errors.forEach((issue) => {
        toast({
          title: "Error",
          description: issue.message,
        });
      });
      return;
    }

    try {
      const response = await urlGenerator(result.data);
      if (response.success) {
        setUrls({
          aiSuggestion: response.data.aiSuggestion,
          minimalist: response.data.minimalist,
          qrcode: response.data.qrcode,
        });
        const qrCode = await QRGenerator(
          `https://www.xlip.xyz/go/${response.data.qrcode}`,
        );
        setQrImg(qrCode);
        toast({
          title: "Success",
          description: "URL generated successfully",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error generating the URL",
      });
    }
    reset();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex max-w-lg flex-col gap-6 md:flex-row md:justify-center"
      >
        <div className="w-full space-y-3">
          <label htmlFor="url" className="text-base font-bold text-white/50">
            Enter your URL below to see how it works:
          </label>
          <div
            className={cn(
              "w-full rounded-md bg-gradient-to-r from-[#823CB4] to-[#953268] p-[1px]",
              { "opacity-50": isSubmitting },
            )}
          >
            <input
              disabled={isSubmitting}
              id="url"
              type="url"
              required
              autoComplete="off"
              placeholder="Paste your link here"
              className="h-12 w-full truncate rounded-md bg-[#37273F] px-4 text-base font-semibold text-[#F4ECF8] focus:outline-none focus:ring-2 focus:ring-[#953268] focus:ring-offset-2"
              {...register("url")}
            />
          </div>
        </div>
        <Button
          loading={isSubmitting}
          type="submit"
          className="mt-auto h-12 w-full bg-gradient-to-r from-[#823CB4] to-[#953268] font-bold text-white md:w-fit"
        >
          Generate
        </Button>
      </form>
      {errors.url?.message && (
        <p className="mx-auto max-w-lg text-left text-danger-600">
          {errors.url.message}
        </p>
      )}
      {isSubmitSuccessful && (
        <div>
          <span className="sr-only">AI Name Suggestion</span>
          <div>
            <h3 className="text-center font-bold text-white">
              AI Name Suggestion
            </h3>
            {/* Generated Link */}
            <div className="mx-auto flex max-w-[344px] flex-col gap-4 lg:max-w-full lg:flex-row">
              {urls.aiSuggestion.map((url, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex w-full items-center overflow-hidden rounded-lg border border-[#823CB4] bg-[#37273F] pl-3",
                    {
                      "opacity-50": pressed && pressed.includes(index),
                    },
                  )}
                >
                  <span className="w-full truncate text-base text-white">
                    {`https://www.xlip.xyz/go/${url}`}
                  </span>
                  <Button
                    size="icon"
                    onClick={() => {
                      handleButtonClick(index, url);
                    }}
                    className="ml-2 size-12 flex-shrink-0 rounded-none bg-[#823CB4] hover:bg-[#823CB4]/80"
                  >
                    <Clipboard color="#FFF" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <span className="sr-only">Minimalist</span>
          <MinimalistGenerator userUrl={urls.minimalist} />
          <span className="sr-only">QR Codes</span>
          <div>
            <h3 className="text-center font-bold text-white">QR Code</h3>
            {!qrGenerated ? (
              <>
                <Image
                  src="/blur-qr-code.png"
                  alt="QR Code"
                  width={195}
                  height={195}
                  className="mx-auto rounded-2xl"
                />
                <div className="flex justify-center">
                  <Button
                    onClick={() => setQrGenerated(true)}
                    className="h-12 w-[195px] bg-gradient-to-r from-[#823CB4] to-[#953268] font-bold text-white"
                  >
                    Generate
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Image
                  src={qrImg || ""}
                  alt="QR Code"
                  width={195}
                  height={195}
                  className="mx-auto rounded-2xl"
                />
                <div className="flex justify-center">
                  <a
                    href={qrImg || ""}
                    download="QR-CODE.png"
                    className="h-12 w-[195px] rounded-md bg-[#823CB4] flex items-center justify-center font-bold text-white no-underline"
                  >
                    <span>Save</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
