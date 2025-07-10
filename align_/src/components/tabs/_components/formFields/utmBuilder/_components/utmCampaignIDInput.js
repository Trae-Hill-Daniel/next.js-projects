"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function UTMCampaignIDInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedUTMCampaignID = searchParams.get("utm_id") || "";

  const handleUTMCampaignIDInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const utm_id = event.target.value;

    if (utm_id.trim() === "") {
      sp.delete("utm_id");
    } else {
      sp.set("utm_id", utm_id);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="utmCampaignID" className="px-1 text-xs md:text-sm">
        Campaign ID
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="utmCampaignID"
        name="utmCampaignID"
        value={addedUTMCampaignID}
        onChange={handleUTMCampaignIDInput}
        placeholder="e.g., Ad ID 8wku2"
      />
    </div>
  );
}
