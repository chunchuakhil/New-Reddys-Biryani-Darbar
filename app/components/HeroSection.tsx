"use client";
import Image from "next/image";

const HeroSection = () => {
  const hour = new Date().getHours();
  const isReady = hour >= 12;

  // Paths (place your files in public/images)
  const gifPath = "/images/biryani-cooking.gif";
  const pngPath = "/images/biryani-cooking.png";

  return (
    <section
      className="h-[40vh] flex justify-center items-center mt-30"
      aria-label="Biryani hero"
    >
      <Image
        src={gifPath}
        alt="Description of image"
        width={400}
        height={200}
        // className="bg-amber-300 border-2"
        className="h-50 w-50"
      />
    </section>
  );
};

export default HeroSection;
