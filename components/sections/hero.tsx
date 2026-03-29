  // "use client";

  // import Image from "next/image";
  // import Link from "next/link";
  // import { Star, ArrowRight, ShieldCheck } from "lucide-react";

  // export function Hero() {
  //   return (
  //     // 1. Fully responsive height: adaptive on mobile (min-h-[100dvh]), locked to screen height on desktop
  //     <section className="relative w-full min-h-[100dvh] lg:h-screen lg:min-h-[700px] lg:max-h-[1000px] bg-[#0A5C36] overflow-hidden flex flex-col pt-24 lg:pt-32">
        
  //       {/* Giant Background Text ("PHARMA") - Scaled for all screen sizes */}
  //       <div className="absolute bottom-[-2%] left-0 w-full overflow-hidden flex justify-center pointer-events-none z-0">
  //         <h2 className="text-[70px] sm:text-[100px] md:text-[160px] lg:text-[220px] font-black text-white/[0.04] leading-none select-none tracking-tighter">
  //           PHARMA
  //         </h2>
  //       </div>

  //       {/* Grid Container */}
  //       <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 w-full flex-1 grid grid-cols-1 lg:grid-cols-2 relative z-10">
          
  //         {/* ================= LEFT COLUMN: Text & CTAs ================= */}
  //         {/* Added standard padding on mobile, larger padding on desktop to separate from the image */}
  //         <div className="flex flex-col justify-center gap-6 lg:gap-8 pb-10 lg:pb-24 pt-4 lg:pt-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 z-20 h-full">
  //           <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-white leading-[1.15] tracking-tight">
  //             Advancing Health <br />
  //             <span className="text-white">Through Innovation</span>
  //           </h1>

  //           <p className="text-base sm:text-lg text-white/80 max-w-lg font-medium">
  //             Delivering trusted pharmaceutical marketing solutions, premium
  //             quality APIs, and supply chain excellence to global healthcare
  //             partners.
  //           </p>

  //           <div className="flex flex-wrap gap-4 mt-2">
  //             <Link
  //               href="#portfolio"
  //               className="bg-[#8DC63F] hover:bg-[#7ab033] text-[#0A5C36] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all flex items-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
  //             >
  //               Explore Portfolio
  //             </Link>
  //             <Link
  //               href="#contact"
  //               className="border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all text-sm sm:text-base"
  //             >
  //               Partner With Us
  //             </Link>
  //           </div>

  //           <div className="flex items-center gap-4 mt-4 lg:mt-6">
  //             <div className="flex -space-x-3">
  //               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-200 overflow-hidden">
  //                 <img src="https://i.pravatar.cc/100?img=1" alt="partner" />
  //               </div>
  //               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-300 overflow-hidden">
  //                 <img src="https://i.pravatar.cc/100?img=2" alt="partner" />
  //               </div>
  //               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-400 overflow-hidden">
  //                 <img src="https://i.pravatar.cc/100?img=3" alt="partner" />
  //               </div>
  //             </div>
  //             <div>
  //               <div className="flex items-center gap-1 text-[#8DC63F]">
  //                 <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
  //                 <span className="font-bold text-white text-xs sm:text-sm">4.9/5</span>
  //               </div>
  //               <p className="text-white/70 text-[10px] sm:text-xs font-medium">
  //                 Trusted by 2,400+ Global Partners
  //               </p>
  //             </div>
  //           </div>
  //         </div>

  //         {/* ================= RIGHT COLUMN: Image & Floating Card ================= */}
  //         <div className="relative w-full h-full flex items-end justify-center lg:justify-end z-10 mt-8 lg:mt-0 ">
            
  //           {/* 2. Responsive Image: Uses max-h-[50vh] on mobile to prevent overflow, switches back to huge desktop size on large screens */}
  //           <Image
  //             src="/hero-image.png"
  //             alt="Newlus Pharma Professional"
  //             width={900}
  //             height={1200}
  //             priority
  //             className=" w-auto h-auto max-h-[50vh] lg:max-h-none lg:w-[850px] lg:max-w-none lg:h-[150%] object-contain object-bottom drop-shadow-2xl pointer-events-none"
  //           />

  //           {/* 3. Floating Card: Scaled down slightly on mobile and brought upward so it doesn't clip */}
  //           <div
  //             className="absolute bottom-6 sm:bottom-12 lg:bottom-20 left-2 sm:left-10 lg:-left-10 bg-white p-2.5 sm:p-3 pr-3 sm:pr-4 rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 z-20 scale-90 sm:scale-100 origin-bottom-left"
  //             style={{ animation: "bounce 3s infinite" }}
  //           >
  //             <div className="bg-[#0A5C36]/10 p-1.5 sm:p-2 rounded-xl border border-[#0A5C36]/20">
  //               <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#0A5C36]" />
  //             </div>
  //             <div>
  //               <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
  //                 Certified
  //               </p>
  //               <p className="text-xs sm:text-sm font-black text-[#0A5C36] leading-tight">
  //                 WHO-GMP
  //                 <br />
  //                 Standard
  //               </p>
  //             </div>
  //             <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#8DC63F] rounded-full flex items-center justify-center ml-1 sm:ml-2">
  //               <ArrowRight className="w-3 h-3 text-[#0A5C36]" />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }


  "use client";

  import Image from "next/image";
  import Link from "next/link";
  import { Star, ArrowRight, ShieldCheck } from "lucide-react";

  export function Hero() {
    return (
      // Restricted height to strictly fit the screen (100dvh)
      <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] bg-[#0A5C36] overflow-hidden flex flex-col pt-20 lg:pt-32">
        
        {/* Giant Background Text ("PHARMA") */}
        <div className="absolute bottom-[-2%] left-0 w-full overflow-hidden flex justify-center pointer-events-none z-0">
          <h2 className="text-[70px] sm:text-[100px] md:text-[160px] lg:text-[220px] font-black text-white/[0.04] leading-none select-none tracking-tighter">
            PHARMA
          </h2>
        </div>

        {/* Grid Container */}
        <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 w-full flex-1 flex flex-col lg:grid lg:grid-cols-2 relative z-10">
          
          {/* ================= LEFT COLUMN: Text & CTAs ================= */}
          <div className="flex flex-col justify-center gap-5 lg:gap-8 pb-8 lg:pb-16 pt-4 lg:pt-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 z-20">
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-white leading-[1.15] tracking-tight mt-4 lg:mt-0">
              Advancing Health <br />
              <span className="text-white">Through Innovation</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-lg font-medium">
              Delivering trusted pharmaceutical marketing solutions, premium
              quality APIs, and supply chain excellence to global healthcare
              partners.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="#portfolio"
                className="bg-[#8DC63F] hover:bg-[#7ab033] text-[#0A5C36] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all flex items-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Explore Portfolio
              </Link>
              <Link
                href="#contact"
                className="border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all text-sm sm:text-base"
              >
                Partner With Us
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-2 lg:mt-6">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-200 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=1" alt="partner" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-300 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=2" alt="partner" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-400 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=3" alt="partner" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#8DC63F]">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  <span className="font-bold text-white text-xs sm:text-sm">4.9/5</span>
                </div>
                <p className="text-white/70 text-[10px] sm:text-xs font-medium">
                  Trusted by 2,400+ Global Partners
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Image & Floating Card ================= */}
          {/* We make this relative so the absolute children stay inside it on desktop */}
          <div className="relative w-full flex-1 lg:h-full z-10 mt-6 lg:mt-0">
            
            {/* 
              THE FIX: Absolute Bottom-0 
              This div is forced to stick to the absolute bottom line of the column, which touches the bottom of the screen.
            */}
            <div className="absolute bottom-0 left-0 w-full flex items-end justify-center lg:justify-end h-[55vh] lg:h-[85vh] pointer-events-none">
              <Image
                src="/hero-image1.png"
                alt="Newlus Pharma Professional"
                width={900}
                height={1200}
                priority
                className="w-auto h-full max-w-full object-contain object-bottom drop-shadow-2xl"
              />
            </div>

            {/* Floating Card: Pinned relative to the column so it stays in place */}
            <div
              className="absolute bottom-6 sm:bottom-12 lg:bottom-16 left-0 sm:left-10 lg:-left-10 bg-white p-2.5 sm:p-3 pr-3 sm:pr-4 rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 z-20 scale-90 sm:scale-100 origin-bottom-left"
              style={{ animation: "bounce 3s infinite" }}
            >
              <div className="bg-[#0A5C36]/10 p-1.5 sm:p-2 rounded-xl border border-[#0A5C36]/20">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#0A5C36]" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                  Certified
                </p>
                <p className="text-xs sm:text-sm font-black text-[#0A5C36] leading-tight">
                  WHO-GMP
                  <br />
                  Standard
                </p>
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#8DC63F] rounded-full flex items-center justify-center ml-1 sm:ml-2">
                <ArrowRight className="w-3 h-3 text-[#0A5C36]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }