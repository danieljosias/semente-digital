import { TrustBar } from "./components/home/TrustBar";
import { Hero } from "./components/components/home/Hero";
import { Services } from "./components/home/Services";
import { Portfolio } from "./components/home/Portfolio";
import { Process } from "./components/home/Process";

export default function Home() {
  return (
    <div>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <Process />
    </div>
  );
}
