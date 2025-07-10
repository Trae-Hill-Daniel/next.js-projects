"use client";
import { useSearchParams } from "next/navigation";
import { CopyIconButton } from "../../_components/copyIconButton";
import { Link as LinkIcon } from "lucide-react";

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

export function UTMLinkPreview() {
  const searchParams = useSearchParams();

  const utmParams = {
    baseURL: searchParams.get("base_url") || "",
    utmCampaignID: searchParams.get("utm_id") || "",
    utmSource: searchParams.get("utm_source") || "",
    utmMedium: searchParams.get("utm_medium") || "",
    utmCampaignName: searchParams.get("utm_campaign") || "",
    campaignTerm: searchParams.get("utm_term") || "",
    campaignContent: searchParams.get("utm_content") || "",
  };

  const utmLink = buildUTMLink(utmParams);
  const previews = utmLink ? [{ utmLink }] : [];

  return (
    <div className="w-full max-w-full rounded-lg border bg-muted p-4 text-xs font-medium text-muted-foreground md:text-sm">
      <h3 className="mb-3 text-sm font-semibold text-foreground md:text-lg">
        Preview:
      </h3>
      {previews.length > 0 ? (
        <ul className="space-y-3">
          {previews.map(({ utmLink }, idx) => (
            <li
              key={idx}
              className="space-y-1 rounded-md border bg-background/50 p-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-hidden">
                  <LinkIcon className="size-3.5 flex-shrink-0 text-sky-500" />
                  <span className="truncate font-sans text-xs text-sky-600 dark:text-sky-500">
                    {utmLink}
                  </span>
                </div>
                <CopyIconButton textToCopy={utmLink} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center rounded-md border-2 border-dashed bg-background/50 p-4">
          <p>Your UTM link preview will appear here.</p>
        </div>
      )}
    </div>
  );
}
