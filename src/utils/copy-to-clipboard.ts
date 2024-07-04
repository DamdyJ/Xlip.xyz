import { toast } from "@/components/ui/use-toast";

export const CopyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast({
    title: "Copied",
    description: "URL copied to clipboard",
  });
};
