"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResetButton() {
  const searchParams = useSearchParams();
  const router = useRouter(); // Use router to push updates
  const pathname = usePathname(); // To get the current path

  const reset = () => {
    const sp = new URLSearchParams(searchParams);

    // Iterate through and delete specific keys
    Array.from(sp.keys()).forEach((key) => {
      if (
        key.startsWith("ticket_number") ||
        key.startsWith("campaign_date") ||
        key.startsWith("product_category") ||
        key.startsWith("campaign_type") ||
        key.startsWith("player_segment") ||
        key.startsWith("marketing_channels") ||
        key.startsWith("campaign_name") ||
        key.startsWith("base_url") ||
        key.startsWith("utm_source") ||
        key.startsWith("utm_medium") ||
        key.startsWith("utm_campaign") ||
        key.startsWith("utm_term") ||
        key.startsWith("utm_content") ||
        key.startsWith("utm_enabled")
      ) {
        sp.delete(key); // Remove matching parameter
      }
    });

    // Push updated URL without the deleted search params
    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <Button variant="outline" type="reset" onClick={reset}>
      <RefreshCcw className="mr-2 h-4 w-4" /> Clear all
    </Button>
  );
}
