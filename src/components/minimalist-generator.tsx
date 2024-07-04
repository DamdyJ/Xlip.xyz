"use state";
import { CopyToClipboard } from "@/utils/copy-to-clipboard";
import { Button } from "./ui/button";
import { Clipboard } from "lucide-react";
import { MinimalistGeneratorProps } from "@/types/minimalist-generator";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function MinimalistGenerator({
  userUrl,
}: MinimalistGeneratorProps) {
  const [pressed, setPressed] = useState<boolean>(false);
  const miniUrl = `https://www.xlip.xyz/go/${userUrl}`;

  const handleButtonClick = (url: string) => {
    if (!pressed) {
      setPressed(true);
    }
    CopyToClipboard(url);
  };

  return (
    <div>
      <h3 className="text-center font-bold text-white">Minimalist</h3>
      <div
        className={cn(
          "mx-auto flex w-full max-w-[344px] items-center overflow-hidden rounded-lg border border-[#953268] bg-[#37273F] pl-3",
          {
            "opacity-50": pressed,
          },
        )}
      >
        <span className="w-full truncate text-base text-white">{miniUrl}</span>
        <Button
          onClick={() => {
            handleButtonClick(miniUrl);
          }}
          size="icon"
          className="ml-2 size-12 flex-shrink-0 rounded-none bg-[#953268] hover:bg-[#953268]/80"
        >
          <Clipboard color="#FFF" />
        </Button>
      </div>
    </div>
  );
}
