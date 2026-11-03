import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import download31 from "@/assets/download (31).jpg";
import flowersTop3d from "@/assets/flowers_top_3d.png";
import flowersBottom3d from "@/assets/flowers_bottom_3d.png";
import FallingPetals from "@/components/FallingPetals";
import ScrollInvitation from "@/components/ScrollInvitation";
import { Envelope } from "@/components/Envelope";
import AudioPlayer from "@/components/AudioPlayer";
import ScrollIndicator from "@/components/ScrollIndicator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikkah Invitation - Khadeeja & Savad" },
      {
        name: "description",
        content:
          "Wedding celebration of Khadeeja Abdul Shukkoor & Mohamed Savad — 24 January 2027.",
      },
      { property: "og:title", content: "Nikkah Invitation - Khadeeja & Savad" },
      {
        property: "og:description",
        content: "Wedding celebration of Khadeeja Abdul Shukkoor & Mohamed Savad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Index,
});

function Index() {
  const [isOpened, setIsOpened] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    if (isOpened) {
      const timer = setTimeout(() => {
        setShowScrollIndicator(true);
      }, 6000); // Wait 6 seconds for Bismillah animation to complete
      return () => clearTimeout(timer);
    }
  }, [isOpened]);

  return (
    <div className="min-h-screen w-full bg-[#181410] flex justify-center items-start overflow-x-hidden">
      <main className="relative min-h-screen w-full max-w-[430px] mx-auto bg-[#FCFAF5] sm:shadow-[0_0_70px_rgba(0,0,0,0.45)] sm:border-x sm:border-[#CBB282]/30 overflow-x-hidden">
        {/* 0. Envelope (z-[100]) - strictly locked to mobile portrait frame */}
        <Envelope isOpen={isOpened} onOpen={() => setIsOpened(true)} />

        {/* Audio Player - starts playing from envelope screen and persists throughout */}
        <AudioPlayer autoPlayTrigger={true} />
        {/* Scroll Indicator */}
        {showScrollIndicator && <ScrollIndicator />}

        {/* 1. Fixed stationary background (z-0) - locked to mobile frame */}
        <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-full z-0 pointer-events-none overflow-hidden">
          <img
            className="w-full h-full object-cover object-top"
            src={download31}
            alt="Champagne Floral Watercolor Background"
          />
        </div>

        {/* 2. Scrollable page content (z-10) - inside mobile container */}
        <div
          className={`relative z-10 w-full max-w-[430px] mx-auto ${
            isOpened ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-1500`}
        >
          <ScrollInvitation isEnvelopeOpened={isOpened} />
        </div>

        {/* 3. Fixed falling petals overlay (z-20) - strictly framed inside mobile portrait */}
        <div
          className={`fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-full pointer-events-none z-20 overflow-hidden ${
            isOpened ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1500`}
          role="img"
          aria-label="Champagne falling petals"
        >
          <FallingPetals />
        </div>

        {/* 4. Fixed 3D foreground floral overlays (z-30) - components scroll underneath this! */}
        <div
          className={`fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-full pointer-events-none z-30 overflow-hidden ${
            isOpened ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1500`}
        >
          {/* Top 3D Floral Garland */}
          <div className="absolute top-0 left-0 w-full pointer-events-none drop-shadow-[0_12px_24px_rgba(75,55,25,0.22)]">
            <img
              src={flowersTop3d}
              alt=""
              className="w-full h-auto object-contain block pointer-events-none select-none"
            />
          </div>

          {/* Bottom 3D Floral Garland */}
          <div className="absolute bottom-0 left-0 w-full pointer-events-none drop-shadow-[0_-10px_20px_rgba(75,55,25,0.18)]">
            <img
              src={flowersBottom3d}
              alt=""
              className="w-full h-auto object-contain block pointer-events-none select-none"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
