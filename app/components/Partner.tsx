"use client";

import { useEffect, useRef } from "react";

const partners = [
  { src: "/Group1.png", alt: "Group 1", name: "Group 1" },
  { src: "/creative-infinity.png", alt: "Creative Infinity", name: "Creative Infinity" },
  { src: "/creativemarket.png", alt: "Creative Market", name: "Creative Market" },
  { src: "/crowdcode.png", alt: "Crowd Code", name: "Crowd Code" },
  { src: "/zortrax.png", alt: "Digiart", name: "Digiart" },
  { src: "/digiart.png", alt: "Digiart", name: "Digiart" },
];

export default function Partner() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1; // Adjust speed here (lower = slower)

    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += scrollSpeed;
      
      // Reset for seamless loop
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="w-full overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-2 text-center">
          <h2 className="text-xl  text-[#000E14] md:text-xl lg:text-xl font-Playfair">
            <span className="italic text-[#4978BC]">Trusted</span> By <span className="italic ">Harmony360</span> 
          </h2>
          
        </div>

        <div className="relative">
          {/* Gradient fade effects on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-gray-50 to-transparent" />

          {/* Auto-scrolling container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden overflow-y-visible gap-8 md:gap-12 scrollbar-hide"
            style={{ whiteSpace: "nowrap" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.alt}-${index}`}
                className="flex-shrink-0 transition-all duration-300 hover:scale-110"
              >
                <div className="group flex  items-center justify-center rounded-xl bg-white px-4 py-3 transition-all duration-300 hover:bg-white hover:shadow-lg md:h-20 md:w-40">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
