"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { campaignTypes } from "../_elements/options";

export function CampaignTypeSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCampaignType = searchParams.get("campaign_type") || "";

  const handleCampaignTypeChange = (campaign_type) => {
    const sp = new URLSearchParams(searchParams);

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

      <Select
        name="campaignType"
        value={selectedCampaignType}
        onValueChange={handleCampaignTypeChange}
      >
        <SelectTrigger id="campaignType" className="w-full text-xs md:text-sm">
          <SelectValue placeholder="Select a campaign type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Campaign Type</SelectLabel>

            {campaignTypes.map((types) => (
              <SelectItem key={types.key} value={types.value}>
                {types.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
