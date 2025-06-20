import { HomeBackground } from "../components/homebackground";
import { WobbleCards } from "../components/wobblecards";
import Highlights from "../components/Highlights/highlights";
import FeaturesTab from "../components/FeaturesTab";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Xpensease",
  description: "Track your expenses with ease",
};
export default function Home() {
  return (
    <div className="bg-transparent">
      <HomeBackground/>
      <FeaturesTab/>
      <WobbleCards/>
      <Highlights/>
    </div>
  );
}
