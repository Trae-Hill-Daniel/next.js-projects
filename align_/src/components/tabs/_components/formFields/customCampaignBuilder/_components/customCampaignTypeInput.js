"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CustomCampaignTypeInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedCampaignType = searchParams.get("campaign_type") || "";

  const handleCampaignTypeInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const campaign_type = event.target.value;

    if (campaign_type.trim() === "") {
      sp.delete("campaign_type");
    } else {
      sp.set("campaign_type", campaign_type);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="campaignType" className="px-1 text-xs md:text-sm">
        Campaign Type
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="campaignType"
        name="campaignType"
        value={addedCampaignType}
        onChange={handleCampaignTypeInput}
        placeholder="e.g., Bonus led, Product led etc."
      />
    </div>
  );
}
