"use client";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function UTMSourcePreset() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedMarketingChannel = searchParams.get("marketingChannel") || "";
  const isUtmEnabledInUrl = searchParams.get("utm_enabled") === "true";

  // Use useEffect to automatically update the URL when marketingChannel changes
  useEffect(() => {
    const sp = new URLSearchParams(searchParams.toString());
    const currentUtmSource = sp.get("utmSource");

    // Update the URL only if the utmSource needs to be changed
    if (addedMarketingChannel && addedMarketingChannel !== currentUtmSource) {
      sp.set("utmSource", addedMarketingChannel);
      router.push(`${pathname}?${sp.toString()}`, { scroll: false });
    } else if (!addedMarketingChannel && currentUtmSource) {
      sp.delete("utmSource");
      router.push(`${pathname}?${sp.toString()}`, { scroll: false });
    }
  }, [addedMarketingChannel, pathname, router, searchParams]);
  if (!isUtmEnabledInUrl) return null;

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="utmSource" className="px-1 text-xs md:text-sm">
        UTM Source
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="utmSource"
        name="utmSource"
        value={addedMarketingChannel}
        readOnly
        placeholder="Auto-set from marketingChannel"
      />
    </div>
  );
}
