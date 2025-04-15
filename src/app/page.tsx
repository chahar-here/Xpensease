import Image from "next/image";
import { Nav } from "./components/nav";
import { HomeBackground } from "./components/homebackground";

export default function Home() {
  return (
    <div>
      <Nav/>
      <HomeBackground/>
    </div>
  );
}
