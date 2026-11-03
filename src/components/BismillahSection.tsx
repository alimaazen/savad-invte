import { motion } from "framer-motion";
import caramelBismillahImg from "@/assets/caramelBismillah.png";

export const BismillahSection = () => {
  return (
    <section className="min-h-[100svh] flex items-center justify-center px-4 py-12 relative z-0">
      <div className="text-center max-w-lg px-3 mx-auto">
        {/* Bismillah Calligraphy */}
        <img
          src={caramelBismillahImg}
          alt="Bismillah Calligraphy"
          className="w-full max-w-[340px] min-[360px]:max-w-[380px] mx-auto h-auto drop-shadow-sm"
        />

        {/* English Translation */}
        <p
          className="mt-4 text-[#8C6C38] text-[10.5px] min-[360px]:text-[11.5px] min-[400px]:text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          In the name of Allah, the Most Gracious, the Most Merciful
        </p>

        {/* Invitation Cordial Message */}
        <p
          className="mt-5 text-[10px] min-[360px]:text-[11px] md:text-xs text-[#6E5637] italic max-w-[280px] sm:max-w-xs mx-auto leading-relaxed tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          We cordially invite your esteemed presence on the auspicious occasion of the nikkah
          ceremony of
        </p>
      </div>
    </section>
  );
};

export default BismillahSection;
