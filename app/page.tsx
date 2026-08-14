import { TrustBar } from "./components/home/TrustBar";
import { Hero } from "./components/components/home/Hero";
import { Services } from "./components/home/Services";
import { Portfolio } from "./components/home/Portfolio";
import { Process } from "./components/home/Process";
import { Differentials } from "./components/home/Differentials";
import { Testimonials } from "./components/home/Testimonials";
import { VideoTestimonials } from "./components/home/VideoTestimonials";
import { FAQ } from "./components/home/FAQ";

export default function Home() {
  return (
    <div>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <Process />
        <Differentials />
        <Testimonials />
        <VideoTestimonials />
        <FAQ />
    </div>
  );
}
