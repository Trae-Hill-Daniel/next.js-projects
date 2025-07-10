import HowToUse from "@/components/contentBlock/howToUse";
import Tab from "@/components/tabs/tabs";

export default async function Home(props) {
  const searchParams = await props.searchParams;
  const selectedTab = searchParams.tab || "quick_campaign_builder"; // Default selected tab
  return (
    <main className="container px-4 pb-40 md:px-8">
      <section className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row justify-between py-5">
        <HowToUse />
        <Tab selectedTab={selectedTab} />
      </section>
    </main>
  );
}
