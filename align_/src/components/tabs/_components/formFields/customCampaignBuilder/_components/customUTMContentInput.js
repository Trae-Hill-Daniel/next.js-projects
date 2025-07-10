"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CustomUTMCampaignContentInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedCampaignContent = searchParams.get("utm_content") || "";
  const isUtmEnabledInUrl = searchParams.get("utm_enabled") === "true";

  const handleCampaignContentInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const utm_content = event.target.value;

    if (utm_content.trim() === "") {
      sp.delete("utm_content");
    } else {
      sp.set("utm_content", utm_content);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  if (!isUtmEnabledInUrl) return null;

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="campaignContent" className="px-1 text-xs md:text-sm">
        Campaign Content
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="campaignContent"
        name="campaignContent"
        value={addedCampaignContent}
        onChange={handleCampaignContentInput}
        placeholder="e.g., bannerlink, smslink, etc."
      />
    </div>
  );
}
