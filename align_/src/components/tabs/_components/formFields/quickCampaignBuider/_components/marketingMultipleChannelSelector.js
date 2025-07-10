"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { marketingChannels } from "../_elements/options";

export function MarketingMultiChannelSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const initialSelected = searchParams.getAll("marketing_channels") || [];
    setSelected(initialSelected);
  }, [searchParams]);

  const toggleChannel = (channel) => {
    const newSelected = selected.includes(channel)
      ? selected.filter((c) => c !== channel)
      : [...selected, channel];

    setSelected(newSelected);

    const sp = new URLSearchParams(searchParams);

    sp.delete("marketing_channels");

    // Add the updated list of channels
    newSelected.forEach((c) => sp.append("marketing_channels", c));

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="marketingChannel">Marketing Channel</Label>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {marketingChannels.map((channel) => (
          <div
            key={channel.key}
            className="flex items-center gap-2 text-sm border p-2 rounded-md dark:hover:bg-input/50"
          >
            <Checkbox
              value={channel.value}
              id="marketingChannel"
              name="marketingChannel"
              checked={selected.includes(channel.value)}
              onCheckedChange={() => toggleChannel(channel.value)}
            />
            <Label htmlFor="marketingChannel">{channel.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}
