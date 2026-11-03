import { MapPin, Navigation } from "lucide-react";
import caramelBismillahImg from "@/assets/caramelBismillah.png";
import inshaAllahImg from "@/assets/inshaAllah-brownn.png";
import ScrollSection from "./ScrollSection";
import NikkahCard from "./NikkahCard";
import CountdownTimer from "./CountdownTimer";
import GlitterReveal from "./GlitterReveal";

interface ScrollInvitationProps {
  isEnvelopeOpened?: boolean;
}

const ScrollInvitation = ({ isEnvelopeOpened = true }: ScrollInvitationProps) => {
  return (
    <div className="relative font-bold">
      {/* 1ST PAGE - BISMILLAH CALLIGRAPHY & INVITATION */}
      <ScrollSection isFirst={true} className="px-1.5 sm:px-3">
        <GlitterReveal
          pathVariant="diagonal"
          duration={3.0}
          enabled={isEnvelopeOpened}
          delay={2.4}
          fadeDuration={1.8}
          revealThreshold={0.5}
        >
          <div className="flex flex-col items-center justify-center w-full px-2 mx-auto text-center my-auto">
            <img
              src={caramelBismillahImg}
              alt="Bismillah Calligraphy"
              className="w-full max-w-[360px] sm:max-w-[400px] h-auto drop-shadow-sm origin-center mb-5"
            />
            {/* English Translation */}
            <p
              className="text-[#8C6C38] text-[10.5px] min-[360px]:text-[11.5px] min-[400px]:text-xs sm:text-[13.5px] font-semibold tracking-wide text-center whitespace-nowrap mb-3.5 px-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>

            {/* Invitation Cordial Message */}
            <p
              className="text-[11px] min-[360px]:text-xs md:text-[13px] text-[#6E5637] italic max-w-[300px] sm:max-w-xs mx-auto text-center leading-relaxed tracking-wide px-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We cordially invite your esteemed presence on the auspicious occasion of the nikkah
              ceremony of
            </p>
          </div>
        </GlitterReveal>
      </ScrollSection>

      {/* 2ND PAGE - THE COUPLE */}
      <ScrollSection>
        <div className="relative text-center px-4 w-full max-w-md mx-auto my-auto flex flex-col items-center justify-center font-bold">
          {/* GROOM */}
          <div className="flex flex-col items-center mb-6">
            {/* Arabic Calligraphy Name */}
            <h2
              className="text-2xl min-[360px]:text-3xl sm:text-4xl text-[#8C6C38] font-bold leading-tight mb-2"
              style={{ fontFamily: "'Reem Kufi', sans-serif", fontWeight: 700 }}
              dir="rtl"
              lang="ar"
            >
              محمد صَوّاد
            </h2>

            {/* English Name */}
            <h1
              className="text-2xl min-[360px]:text-3xl sm:text-4xl text-[#382918] font-extrabold tracking-normal leading-tight whitespace-nowrap py-1"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
            >
              Mohamed Savad
            </h1>

            {/* Parentage Lines */}
            <div
              className="text-sm min-[360px]:text-base text-[#6E5637] italic tracking-wider mt-2 flex flex-col items-center leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span>
                Son of{" "}
                <strong className="font-extrabold text-[#382918] not-italic text-base">
                  Aboobacker Madathil Palliyalil
                </strong>
              </span>
              <span className="text-sm min-[360px]:text-base text-[#9E8252] my-1 font-bold">
                &amp;
              </span>
              <strong className="font-extrabold text-[#382918] not-italic text-base">
                Sajna Aboobacker
              </strong>
            </div>
          </div>

          {/* Ornamental Ampersand Divider */}
          <div className="flex items-center justify-center gap-4 my-4 w-full max-w-[240px]">
            <div className="flex-1 h-px bg-[#CBB282]/40" />
            <span
              className="text-4xl min-[360px]:text-5xl text-[#94743D] font-bold italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
            >
              &amp;
            </span>
            <div className="flex-1 h-px bg-[#CBB282]/40" />
          </div>

          {/* BRIDE */}
          <div className="flex flex-col items-center mt-4">
            {/* Arabic Calligraphy Name */}
            <h2
              className="text-2xl min-[360px]:text-3xl sm:text-4xl text-[#8C6C38] font-bold leading-tight mb-2"
              style={{ fontFamily: "'Reem Kufi', sans-serif", fontWeight: 700 }}
              dir="rtl"
              lang="ar"
            >
              خديجة عبد الشكور
            </h2>

            {/* English Name */}
            <h1
              className="text-2xl min-[360px]:text-3xl sm:text-4xl text-[#382918] font-extrabold tracking-normal leading-tight whitespace-nowrap py-1"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
            >
              Khadeeja Abdul Shukkoor
            </h1>

            {/* Parentage Lines */}
            <div
              className="text-sm min-[360px]:text-base text-[#6E5637] italic tracking-wider mt-2 flex flex-col items-center leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span>
                Daughter of{" "}
                <strong className="font-extrabold text-[#382918] not-italic text-base">
                  AJ Abdul Shukkoor
                </strong>
              </span>
              <span className="text-sm min-[360px]:text-base text-[#9E8252] my-1 font-bold">
                &amp;
              </span>
              <strong className="font-extrabold text-[#382918] not-italic text-base">
                Hashmiya Abdul Shukkoor
              </strong>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* 3RD PAGE - SAVE THE DATE */}
      <ScrollSection>
        <div className="text-center max-w-lg w-full px-4 mx-auto mb-8 font-bold">
          <h2
            className="text-[#8C6C38] font-serif text-base min-[360px]:text-lg md:text-xl font-bold tracking-[0.3em] mb-3 uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
          >
            Save The Date
          </h2>

          <NikkahCard />
        </div>
      </ScrollSection>

      {/* 4TH PAGE - VENUE */}
      <ScrollSection>
        <div className="text-center max-w-lg w-full px-3 mx-auto font-bold">
          <p
            className="text-[#8C6C38] font-serif text-base min-[360px]:text-lg md:text-xl font-bold tracking-[0.3em] mb-3 uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
          >
            Venue
          </p>

          <div className="mb-8">
            <div className="p-3.5 min-[360px]:p-4 rounded-2xl bg-white/92 border border-[#D5C099]/40 backdrop-blur-sm shadow-[0_8px_30px_rgba(85,65,35,0.08)] max-w-[350px] mx-auto">
              <h3
                className="text-[13px] min-[360px]:text-sm sm:text-[15px] font-serif text-[#382918] font-bold tracking-[0.1em] uppercase mb-1 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
              >
                LE MÉRIDIEN DUBAI HOTEL &amp; CONFERENCE CENTRE
              </h3>
              <p
                className="text-xs min-[360px]:text-[13px] font-serif italic text-[#6E5637] font-bold mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
              >
                Great Ballroom
              </p>
              <p
                className="text-[10.5px] min-[360px]:text-[11px] text-[#6E5637] font-body font-bold flex items-center justify-center gap-1 mb-2.5"
                style={{ fontWeight: 700 }}
              >
                <MapPin className="w-3 h-3 text-[#8C6C38] shrink-0" />
                <span>Airport Road, Garhoud, Dubai, UAE</span>
              </p>

              {/* Embedded Google Map */}
              <div className="relative overflow-hidden rounded-lg border border-[#D5C099]/35 shadow-xs bg-white mb-2.5">
                <div className="h-[120px] min-[360px]:h-[130px] w-full">
                  <iframe
                    src="https://maps.google.com/maps?q=Le%20M%C3%A9ridien%20Dubai%20Hotel%20%26%20Conference%20Centre&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Le Méridien Dubai Hotel & Conference Centre Location"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              {/* Action Button for Navigation */}
              <div className="flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=Le+M%C3%A9ridien+Dubai+Hotel+%26+Conference+Centre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#7D6132] text-[#FDFBF7] font-serif text-[11px] min-[360px]:text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-[#685028] transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  <Navigation className="w-3 h-3" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* 5TH PAGE - COUNT DOWN */}
      <ScrollSection>
        <div className="text-center max-w-lg w-full px-4 mx-auto font-bold">
          <div className="mb-6 flex flex-col items-center">
            <h2
              className="text-[#8C6C38] font-serif text-[10.5px] min-[360px]:text-xs min-[400px]:text-sm sm:text-base font-bold tracking-[0.12em] min-[360px]:tracking-[0.16em] sm:tracking-[0.22em] mb-3 uppercase whitespace-nowrap"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
            >
              Counting Down to Our Big Day
            </h2>

            <CountdownTimer />

            <img
              src={inshaAllahImg}
              alt="InshaAllah Calligraphy"
              className="w-auto h-8 min-[360px]:h-9 sm:h-10 mx-auto mt-7 min-[360px]:mt-8 sm:mt-9 drop-shadow-xs opacity-85"
              style={{
                filter: "sepia(0.9) hue-rotate(5deg) saturate(1.6) brightness(0.7)",
              }}
            />
          </div>
        </div>
      </ScrollSection>

      {/* 6TH PAGE - QURAN VERSE & BEST COMPLIMENTS */}
      <ScrollSection>
        <div className="text-center max-w-lg w-full px-3 mx-auto font-bold">
          <div className="flex flex-col items-center justify-center gap-3.5 my-auto min-h-[50svh]">
            {/* Quran Verse Card */}
            <div className="w-full max-w-[340px] min-[360px]:max-w-[360px] mx-auto rounded-2xl bg-[#FAF6EE]/65 backdrop-blur-lg border border-[#D8C49D]/50 shadow-[0_6px_20px_rgba(85,65,35,0.08)] p-5 min-[360px]:p-6 text-center">
              {/* Botanical Motif */}
              <div className="flex items-center justify-center gap-2 mb-3 opacity-70">
                <span className="h-px w-8 bg-[#CBB282]/45" />
                <svg
                  className="w-5 h-4 text-[#8C6C38] shrink-0"
                  viewBox="0 0 24 20"
                  fill="currentColor"
                >
                  <path d="M12 0C12 0 9.5 4 9.5 8C9.5 10 10.5 11 12 12C13.5 11 14.5 10 14.5 8C14.5 4 12 0 12 0Z" />
                  <path d="M4 11C4 11 7 8 10 10C9.5 11.5 8.5 12.5 6.5 12.5C5 12.5 4 11 4 11Z" />
                  <path d="M20 11C20 11 17 8 14 10C14.5 11.5 15.5 12.5 17.5 12.5C19 12.5 20 11 20 11Z" />
                  <circle cx="12" cy="14" r="1.5" />
                </svg>
                <span className="h-px w-8 bg-[#CBB282]/45" />
              </div>

              {/* Arabic Verse */}
              <p
                className="text-base min-[360px]:text-lg text-[#8C6C38] leading-relaxed font-bold mb-3 px-2"
                style={{ fontFamily: "'Amiri', serif", fontWeight: 700 }}
                dir="rtl"
                lang="ar"
              >
                لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
              </p>

              {/* English Translation */}
              <p
                className="text-xs min-[360px]:text-[13px] text-[#5A452B] italic font-serif font-bold leading-snug px-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
              >
                “That you may find tranquility in them, and He placed between you affection and
                mercy.”
              </p>

              {/* Citation */}
              <p
                className="text-[10px] min-[360px]:text-[11px] tracking-[0.2em] uppercase text-[#9E8252] mt-3 font-serif font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
              >
                — Qur’an 30:21 —
              </p>
            </div>

            {/* With Love & Best Compliments Card */}
            <div className="w-full max-w-[340px] min-[360px]:max-w-[360px] mx-auto rounded-2xl bg-[#FAF6EE]/65 backdrop-blur-lg border border-[#D8C49D]/50 shadow-[0_6px_20px_rgba(85,65,35,0.06)] p-5 min-[360px]:p-6 text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <span className="text-[#9E8252] text-[10px]">✤</span>
                <p
                  className="text-xs min-[360px]:text-[13px] uppercase tracking-[0.2em] text-[#8C6C38] font-bold"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  With Love &amp; Best Compliments
                </p>
                <span className="text-[#9E8252] text-[10px]">✤</span>
              </div>
              <div className="h-px w-20 bg-[#CBB282]/45 mx-auto mb-3" />
              <p
                className="text-[13px] min-[360px]:text-[14px] sm:text-[15px] text-[#382918] font-serif leading-relaxed font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
              >
                Huda Fathima , Hamdan , Shahbaz , Hana , Haadi Mohammed
              </p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Bottom spacer to allow optimal scroll headroom so final card clears bottom 3D flowers */}
      <div className="h-[22vh] w-full pointer-events-none" />
    </div>
  );
};

export default ScrollInvitation;
