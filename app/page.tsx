import MenuPage from "./components/MenuPage";
import FeaturedMenu from "./components/FeaturedMenu";
import { theme } from "./theme";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: theme.primaryColour }}
      className="flex flex-col min-h-screen items-center justify-center"
    >
      <Nav />
      <FeaturedMenu />
      <MenuPage />
    </div>
  );
}
