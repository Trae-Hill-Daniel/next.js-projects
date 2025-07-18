"use client";
import { useSearchParams } from "next/navigation";

import {
  HowToUseQuickBuilderContentBlock,
  HowToUseCustomBuilderContentBlock,
  HowToUseURLBuilderContentBlock,
} from "./_elements/howToUseContentBlocks";

export default function HowToUse() {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get("tab") || "quick_campaign_builder";

  const HowToUseContentBlock = () => {
    switch (selectedTab) {
      case "quick_campaign_builder":
        return <HowToUseQuickBuilderContentBlock />;
      case "custom_campaign_builder":
        return <HowToUseCustomBuilderContentBlock />;
      case "utm_builder":
        return <HowToUseURLBuilderContentBlock />;
      default:
        return null;
    }
  };

  // Render the appropriate content block based on the selected tab
  return <>{HowToUseContentBlock()}</>;
}
