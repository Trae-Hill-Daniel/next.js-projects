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
import { utmMediums } from "../../quickCampaignBuider/_elements/options";

export function CustomUTMMediumSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedUTMMedium = searchParams.get("utm_medium") || "";
  const isUtmEnabledInUrl = searchParams.get("utm_enabled") === "true";

  const handleUTMMediumChange = (utm_medium) => {
    const sp = new URLSearchParams(searchParams);

    if (utm_medium.trim() === "") {
      sp.delete("utm_medium");
    } else {
      sp.set("utm_medium", utm_medium);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  if (!isUtmEnabledInUrl) return null;

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="UTMMedium" className="px-1 text-xs md:text-sm">
        UTM Medium
      </Label>

      <Select
        name="UTMMedium"
        value={selectedUTMMedium}
        onValueChange={handleUTMMediumChange}
      >
        <SelectTrigger id="UTMMedium" className="w-full text-xs md:text-sm">
          <SelectValue placeholder="Select a UTM Medium" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>UTM Medium</SelectLabel>

            {utmMediums.map((types) => (
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
