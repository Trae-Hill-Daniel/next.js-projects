"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function UTMSourceInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedUTMSource = searchParams.get("utm_source") || "";

  const handleUTMSourceInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const utm_source = event.target.value;

    if (utm_source.trim() === "") {
      sp.delete("utm_source");
    } else {
      sp.set("utm_source", utm_source);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="utmSource" className="px-1 text-xs md:text-sm">
        UTM Source
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="utmSource"
        name="utmSource"
        value={addedUTMSource}
        onChange={handleUTMSourceInput}
        placeholder="e.g., google, newsletter, etc."
      />
    </div>
  );
}
