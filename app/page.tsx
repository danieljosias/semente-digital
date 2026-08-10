import { TrustBar } from "./components/home/TrustBar";
import { Hero } from "./components/components/home/Hero";
import { Services } from "./components/home/Services";
import { Portfolio } from "./components/home/Portfolio";

export default function Home() {
  return (
    <div>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
    </div>
  );
}
