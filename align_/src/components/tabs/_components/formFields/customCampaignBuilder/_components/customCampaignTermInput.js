"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CustomUTMCampaignTermInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedCampaignTerm = searchParams.get("utm_term") || "";
  const isUtmEnabledInUrl = searchParams.get("utm_enabled") === "true";

  const handleCampaignTermInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const utm_term = event.target.value;

    if (utm_term.trim() === "") {
      sp.delete("utm_term");
    } else {
      sp.set("utm_term", utm_term);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  if (!isUtmEnabledInUrl) return null;

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="campaignTerm" className="px-1 text-xs md:text-sm">
        Campaign Term
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="campaignTerm"
        name="campaignTerm"
        value={addedCampaignTerm}
        onChange={handleCampaignTermInput}
        placeholder="e.g., free spins, bonus, etc."
      />
    </div>
  );
}
