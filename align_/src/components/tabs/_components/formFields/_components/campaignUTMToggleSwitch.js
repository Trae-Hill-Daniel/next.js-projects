"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function CampaignUTMToggleSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isUtmEnabledInUrl = searchParams.get("utm_enabled") === "true";
  const addedBaseURL = searchParams.get("base_url") || "";

  const handleUTMToggle = (isOn) => {
    const sp = new URLSearchParams(searchParams);

    if (!isOn) {
      sp.delete("utm_enabled");
      sp.delete("base_url"); // Clear baseURL if UTM is disabled
    } else {
      sp.set("utm_enabled", "true");
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="utm-toggle"
        name="utm-toggle"
        checked={isUtmEnabledInUrl}
        onCheckedChange={handleUTMToggle}
      />
      <Label htmlFor="utm-toggle" className="text-xs md:text-sm">
        Generate UTM Link?
      </Label>
    </div>
  );
}
