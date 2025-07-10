"use client";
import { useSearchParams } from "next/navigation";
import { CopyIconButton } from "../../_components/copyIconButton";
import { Link as LinkIcon } from "lucide-react";

function formatValue(value) {
  if (typeof value !== "string") return "";
  return value
    .toUpperCase()
    .replace(/-/g, "_")
    .replace(/\s+/g, "_")
    .replace(/[^A-Z0-9_]/g, "");
}

function FormatCampaignNamePreview({
  ticketNumber,
  campaignDate,
  productCategory,
  campaignType,
  playerSegment,
  marketingChannel,
  campaignName,
}) {
  const parts = [
    ticketNumber,
    campaignDate,
    productCategory,
    campaignType,
    playerSegment,
    marketingChannel,
    campaignName,
  ]
    .filter(Boolean)
    .map(formatValue);

  return parts.join("_");
}

// HELPER: Builds the UTM link. (No changes)
function buildUTMLink(params) {
  const {
    baseURL,
    utmCampaignID,
    utmSource,
    utmMedium,
    utmCampaignName,
    campaignTerm,
    campaignContent,
  } = params;

  if (!baseURL || !/^https?:\/\//.test(baseURL)) {
    return "";
  }
  try {
    const url = new URL(baseURL);
    if (utmCampaignID) url.searchParams.set("utm_id", utmCampaignID);
    if (utmSource) url.searchParams.set("utm_source", utmSource);
    if (utmMedium) url.searchParams.set("utm_medium", utmMedium);
    if (utmCampaignName) url.searchParams.set("utm_campaign", utmCampaignName);
    if (campaignTerm) url.searchParams.set("utm_term", campaignTerm);
    if (campaignContent) url.searchParams.set("utm_content", campaignContent);
    return url.toString();
  } catch (err) {
    console.error("Invalid Base URL:", err);
    return "Invalid Base URL provided";
  }
}

export function CustomCampaignNamePreview() {
  const searchParams = useSearchParams();

  const ticketNumber = searchParams.get("ticket_number") || "";
  const campaignDate = searchParams.get("campaign_date") || "";
  const productCategory = searchParams.get("product_category") || "";
  const campaignType = searchParams.get("campaign_type") || "";
  const playerSegment = searchParams.get("player_segment") || "";
  const marketingChannel = searchParams.get("marketing_channel") || "";
  const campaignName = searchParams.get("campaign_name") || "";
  const baseURL = searchParams.get("base_url") || "";
  const isUtmEnabledInUrl = searchParams.get("utm_enabled") === "true";
  const utmCampaignID = searchParams.get("utm_id") || "";
  const utmSource = searchParams.get("utm_source") || "";
  const utmMedium = searchParams.get("utm_medium") || "";
  const utmCampaignName = searchParams.get("utm_campaign") || "";
  const campaignTerm = searchParams.get("utm_term") || "";
  const campaignContent = searchParams.get("utm_content") || "";

  // --- ✨ CHANGE: Generate a single campaign name directly ---
  const preview = FormatCampaignNamePreview({
    ticketNumber,
    campaignDate,
    productCategory,
    campaignType,
    playerSegment,
    marketingChannel,
    campaignName,
  });

  const utmLink = isUtmEnabledInUrl
    ? buildUTMLink({
        baseURL,
        utmCampaignID,
        utmSource,
        utmMedium,
        utmCampaignName,
        campaignTerm,
        campaignContent,
      })
    : "";

  return (
    <div className="w-full max-w-full rounded-lg border p-4 text-xs md:text-sm font-medium text-muted-foreground bg-muted overflow-hidden">
      <h3 className="mb-3 text-sm md:text-lg font-semibold text-foreground">
        Preview:
      </h3>
      <div className="space-y-1 rounded-md border-2 border-dashed bg-background/50 p-4">
        {preview ? (
          <>
            {/* Display Campaign Name and its Copy Button */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground md:text-sm break-all">
                {preview}
              </span>
              <CopyIconButton textToCopy={preview} />
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
          </>
        ) : (
          // This alternative text will now appear inside the dashed div
          <span className="text-xs text-muted-foreground md:text-sm">
            Your campaign preview will appear here.
          </span>
        )}
      </div>
    </div>
  );
}
