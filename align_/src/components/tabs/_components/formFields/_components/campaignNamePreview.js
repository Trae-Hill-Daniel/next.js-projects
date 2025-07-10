"use client";
import { useSearchParams } from "next/navigation";
import { CopyIconButton } from "./copyIconButton";
import { Link as LinkIcon } from "lucide-react";

function formatValue(value) {
  return value
    .toUpperCase()
    .replace(/-/g, "_") // Convert dashes to underscores (esp. in dates)
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .replace(/[^A-Z0-9_]/g, ""); // Strip non-alphanumeric/underscores
}

function FormatCampaignNamePreview({
  ticketNumber,
  campaignDate,
  productCategory,
  campaignType,
  playerSegment,
  marketingChannels,
  campaignName,
}) {
  const parts = [
    ticketNumber,
    campaignDate,
    productCategory,
    campaignType,
    playerSegment,
    marketingChannels,
    campaignName,
  ]
    .filter(Boolean) // Skip empty/nulls
    .map(formatValue); // Format each part

  return parts.join("_"); // Single underscore separator
}

function buildUTMLink(addedBaseURL, channel, campaignName) {
  if (!/^https?:\/\//.test(addedBaseURL)) {
    return "Base URL must include http:// or https://";
  }
  try {
    const url = new URL(addedBaseURL);
    url.searchParams.set("utm_source", channel.toLowerCase());
    url.searchParams.set("utm_medium", channel.toLowerCase());
    url.searchParams.set("utm_campaign", campaignName.toLowerCase());
    return url.toString();
  } catch (err) {
    return "Invalid Base URL format";
  }
}

export function CampaignNamePreview() {
  const searchParams = useSearchParams();

  const ticketNumber = searchParams.get("ticket_number") || "";
  const campaignDate = searchParams.get("campaign_date") || "";
  const productCategory = searchParams.get("product_category") || "";
  const campaignType = searchParams.get("campaign_type") || "";
  const playerSegment = searchParams.get("player_segment") || "";
  const marketingChannels = searchParams.getAll("marketing_channels");
  const campaignName = searchParams.get("campaign_name") || "";
  const addedBaseURL = searchParams.get("base_url") || "";
  const isUtmEnabledInUrl = searchParams.get("utm_enabled") === "true";

  const hasChannels = marketingChannels.length > 0;

  const previews = (hasChannels ? marketingChannels : [""]).map((channel) => {
    const preview = FormatCampaignNamePreview({
      ticketNumber,
      campaignDate,
      productCategory,
      campaignType,
      playerSegment,
      marketingChannels: channel,
      campaignName,
    });

    const utmLink =
      isUtmEnabledInUrl && addedBaseURL
        ? buildUTMLink(addedBaseURL, channel, preview)
        : "";

    return { channel, preview, utmLink };
  });

  return (
    <div className="w-full max-w-full rounded-lg border p-4 text-xs md:text-sm font-medium text-muted-foreground bg-muted overflow-hidden">
      <h3 className="mb-3 text-sm md:text-lg font-semibold text-foreground">
        Preview:
      </h3>
      <ul className="space-y-5">
        {previews.map(({ preview, utmLink }, idx) => (
          <li
            key={idx}
            className="space-y-1 rounded-md border-2 border-dashed bg-background/50 p-4"
          >
            {/* Display Campaign Name and its Copy Button */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground md:text-sm break-all">
                {preview || "Your Campaign preview will appear here."}
              </span>
              {preview && <CopyIconButton textToCopy={preview} />}
            </div>

            {/* Conditionally Display UTM Link and its Copy Button */}
            {utmLink && (
              <div className="flex items-center justify-between border-t pt-1 overflow-hidden">
                <div className="flex items-center gap-2 overflow-hidden">
                  <LinkIcon className="size-3.5 flex-shrink-0 text-sky-500" />
                  <span className="truncate font-sans text-xs text-sky-600 dark:text-sky-500">
                    {utmLink}
                  </span>
                </div>
                <CopyIconButton textToCopy={utmLink} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
