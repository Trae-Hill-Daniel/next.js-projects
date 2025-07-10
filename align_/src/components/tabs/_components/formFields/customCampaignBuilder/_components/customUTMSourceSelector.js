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
import { utmSources } from "../../quickCampaignBuider/_elements/options";

export function CustomUTMSourceSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedUTMSource = searchParams.get("utm_source") || "";
  const isUtmEnabledInUrl = searchParams.get("utm_enabled") === "true";

  const handleUTMSourceChange = (utm_source) => {
    const sp = new URLSearchParams(searchParams);

    if (utm_source.trim() === "") {
      sp.delete("utm_source");
    } else {
      sp.set("utm_source", utm_source);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  if (!isUtmEnabledInUrl) return null;

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="utmSource" className="px-1 text-xs md:text-sm">
        UTM Source
      </Label>

      <Select
        name="utmSource"
        value={selectedUTMSource}
        onValueChange={handleUTMSourceChange}
      >
        <SelectTrigger id="utmSource" className="w-full text-xs md:text-sm">
          <SelectValue placeholder="Select a UTM Source" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>UTM Source</SelectLabel>

            {utmSources.map((types) => (
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
