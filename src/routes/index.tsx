import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import download30 from "@/assets/download (30).jpg";
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
    <div className="min-h-screen w-full bg-[#12180E] flex justify-center items-start overflow-x-hidden">
      <main className="relative min-h-screen w-full max-w-[430px] mx-auto bg-[#FAFBF7] sm:shadow-[0_0_70px_rgba(0,0,0,0.45)] sm:border-x sm:border-[#7A8E63]/25 overflow-x-hidden">
        {/* 0. Envelope (z-[100]) - strictly locked to mobile portrait frame */}
        <Envelope isOpen={isOpened} onOpen={() => setIsOpened(true)} />

        {/* Audio Player - starts playing from envelope screen and persists throughout */}
        <AudioPlayer autoPlayTrigger={true} />
        {/* Scroll Indicator */}
        {showScrollIndicator && <ScrollIndicator />}

        {/* 1. Fixed stationary background (z-0) - locked to mobile frame */}
        <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-full z-0 pointer-events-none overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={download30}
            alt="Botanical Olive Watercolor Background"
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
          aria-label="Olive botanical falling petals"
        >
          <FallingPetals />
        </div>
      </main>
    </div>
  );
}
