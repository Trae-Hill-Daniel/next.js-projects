"use client";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function UTMMediumPreset() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedMarketingChannel = searchParams.get("marketingChannel") || "";
  const isUtmEnabledInUrl = searchParams.get("utm_enabled") === "true";

  // Use useEffect to automatically update the URL when marketingChannel changes
  useEffect(() => {
    const sp = new URLSearchParams(searchParams.toString());
    const currentUtmMedium = sp.get("utmMedium");

    // Update the URL only if the utmMedium needs to be changed
    if (addedMarketingChannel && addedMarketingChannel !== currentUtmMedium) {
      sp.set("utmMedium", addedMarketingChannel);
      router.push(`${pathname}?${sp.toString()}`, { scroll: false });
    } else if (!addedMarketingChannel && currentUtmMedium) {
      sp.delete("utmMedium");
      router.push(`${pathname}?${sp.toString()}`, { scroll: false });
    }
  }, [addedMarketingChannel, pathname, router, searchParams]);
  if (!isUtmEnabledInUrl) return null;

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="utmMedium" className="px-1 text-xs md:text-sm">
        UTM Medium
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="utmMedium"
        name="utmMedium"
        value={addedMarketingChannel}
        readOnly
        placeholder="Auto-set from marketingChannel"
      />
    </div>
  );
}
