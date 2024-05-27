import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingFooter } from "@/components/landing-footer";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingFooter />
    </div>
  );
}
 
export default LandingPage;
