"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyIconButton({ textToCopy }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (!textToCopy) return; // Don't do anything if there's no text

    try {
      // Correctly pass the text to the clipboard API
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      // Reset the copied state after a short delay
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // Optionally, handle the error in the UI
    }
  };
  return (
    <Button
      variant="secondary"
      size="icon"
      className="size-8"
      onClick={handleCopy}
    >
      {isCopied ? (
        <Check className="size-4 text-green-500" />
      ) : (
        <Copy className="size-4" />
      )}
      <span className="sr-only">Copy to clipboard</span>
    </Button>
  );
}
