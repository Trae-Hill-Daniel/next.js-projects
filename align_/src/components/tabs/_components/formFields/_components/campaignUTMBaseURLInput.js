"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CampaignUTMBaseURLInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedBaseURL = searchParams.get("base_url") || "";
  const isUtmEnabledInUrl = searchParams.get("utm_enabled") === "true";

  const handleBaseURLInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const base_url = event.target.value;

    if (base_url.trim() === "") {
      sp.delete("base_url");
    } else {
      sp.set("base_url", base_url);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  if (!isUtmEnabledInUrl) return null;

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="baseURL" className="px-1">
        Base URL
      </Label>
      <Input
        className="w-full"
        type="url"
        id="baseURL"
        name="baseURL"
        value={addedBaseURL}
        onChange={handleBaseURLInput}
        placeholder="e.g., https://cng.com/promotions/10-free-spins-on-starburst"
      />
    </div>
  );
}
