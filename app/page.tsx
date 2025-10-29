import MenuPage from "./components/MenuPage";
import FeaturedMenu from "./components/FeaturedMenu";
import { theme } from "./theme";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import TimingsSection from "./components/TimingsSection";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: theme.primaryColour }}
      className="flex flex-col min-h-screen items-center justify-center"
    >
      <Header />
      <HeroSection />
      <FeaturedMenu />
      <MenuPage />
      <TimingsSection />
      <AboutSection />
    </div>
  );
}
