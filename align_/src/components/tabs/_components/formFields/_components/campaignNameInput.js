"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CampaignNameInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedCampaignName = searchParams.get("campaign_name") || "";

  const handleCampaignNameInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const campaign_name = event.target.value;

    if (campaign_name.trim() === "") {
      sp.delete("campaign_name");
    } else {
      sp.set("campaign_name", campaign_name);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="campaignName" className="px-1 text-xs md:text-sm">
        Campaign Name
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="campaignName"
        name="campaignName"
        value={addedCampaignName}
        onChange={handleCampaignNameInput}
        placeholder="e.g., 10 Free Spins on Starburst"
      />
    </div>
  );
}
