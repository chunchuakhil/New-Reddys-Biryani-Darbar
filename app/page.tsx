import MenuPage from "./components/MenuPage";
import FeaturedMenu from "./components/FeaturedMenu";
import { theme } from "./theme";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: theme.background }}
      className="flex flex-col min-h-screen items-center justify-center"
    >
      <FeaturedMenu />
      <MenuPage />
    </div>
  );
}
