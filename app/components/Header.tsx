import React from "react";
import { theme } from "../theme";

const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full flex items-center justify-center z-50 overflow-hidden"
      style={{ backgroundColor: theme.primaryColour }}
    >
      <h1
        className="text-[#FFD700] font-bold text-center whitespace-nowrap heading-outline py-3"
        style={{
          fontSize: "clamp(1.8rem, 4vw, 5rem)", // responsive font scaling
        }}
      >
        Reddys Biryani Darbar
      </h1>
    </div>
  );
};

export default Header;
