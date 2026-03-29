// //   // "use client";

// //   // import Image from "next/image";
// //   // import Link from "next/link";
// //   // import { Star, ArrowRight, ShieldCheck } from "lucide-react";

// //   // export function Hero() {
// //   //   return (
// //   //     // Restricted height to strictly fit the screen (100dvh)
// //   //     <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] bg-[#0A5C36] overflow-hidden flex flex-col pt-20 lg:pt-32">
        
// //   //       {/* Giant Background Text ("PHARMA") */}
// //   //       <div className="absolute bottom-[-2%] left-0 w-full overflow-hidden flex justify-center pointer-events-none z-0">
// //   //         <h2 className="text-[70px] sm:text-[100px] md:text-[160px] lg:text-[220px] font-black text-white/[0.04] leading-none select-none tracking-tighter">
// //   //           PHARMA
// //   //         </h2>
// //   //       </div>

// //   //       {/* Grid Container */}
// //   //       <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 w-full flex-1 flex flex-col lg:grid lg:grid-cols-2 relative z-10">
          
// //   //         {/* ================= LEFT COLUMN: Text & CTAs ================= */}
// //   //         <div className="flex flex-col justify-center gap-5 lg:gap-8 pb-8 lg:pb-16 pt-4 lg:pt-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 z-20">
// //   //           <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-white leading-[1.15] tracking-tight mt-4 lg:mt-0">
// //   //             Advancing Health <br />
// //   //             <span className="text-white">Through Innovation</span>
// //   //           </h1>

// //   //           <p className="text-base sm:text-lg text-white/80 max-w-lg font-medium">
// //   //             Delivering trusted pharmaceutical marketing solutions, premium
// //   //             quality APIs, and supply chain excellence to global healthcare
// //   //             partners.
// //   //           </p>

// //   //           <div className="flex flex-wrap gap-4 mt-2">
// //   //             <Link
// //   //               href="#portfolio"
// //   //               className="bg-[#8DC63F] hover:bg-[#7ab033] text-[#0A5C36] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all flex items-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
// //   //             >
// //   //               Explore Portfolio
// //   //             </Link>
// //   //             <Link
// //   //               href="#contact"
// //   //               className="border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all text-sm sm:text-base"
// //   //             >
// //   //               Partner With Us
// //   //             </Link>
// //   //           </div>

// //   //           <div className="flex items-center gap-4 mt-2 lg:mt-6">
// //   //             <div className="flex -space-x-3">
// //   //               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-200 overflow-hidden">
// //   //                 <img src="https://i.pravatar.cc/100?img=1" alt="partner" />
// //   //               </div>
// //   //               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-300 overflow-hidden">
// //   //                 <img src="https://i.pravatar.cc/100?img=2" alt="partner" />
// //   //               </div>
// //   //               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-400 overflow-hidden">
// //   //                 <img src="https://i.pravatar.cc/100?img=3" alt="partner" />
// //   //               </div>
// //   //             </div>
// //   //             <div>
// //   //               <div className="flex items-center gap-1 text-[#8DC63F]">
// //   //                 <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
// //   //                 <span className="font-bold text-white text-xs sm:text-sm">4.9/5</span>
// //   //               </div>
// //   //               <p className="text-white/70 text-[10px] sm:text-xs font-medium">
// //   //                 Trusted by 2,400+ Global Partners
// //   //               </p>
// //   //             </div>
// //   //           </div>
// //   //         </div>

// //   //         {/* ================= RIGHT COLUMN: Image & Floating Card ================= */}
// //   //         {/* We make this relative so the absolute children stay inside it on desktop */}
// //   //         <div className="relative w-full flex-1 lg:h-full z-10 mt-6 lg:mt-0">
            
// //   //           {/* 
// //   //             THE FIX: Absolute Bottom-0 
// //   //             This div is forced to stick to the absolute bottom line of the column, which touches the bottom of the screen.
// //   //           */}
// //   //           <div className="absolute bottom-0 left-0 w-full flex items-end justify-center lg:justify-end h-[55vh] lg:h-[85vh] pointer-events-none">
// //   //             <Image
// //   //               src="/hero-image1.png"
// //   //               alt="Newlus Pharma Professional"
// //   //               width={900}
// //   //               height={1200}
// //   //               priority
// //   //               className="w-auto h-full max-w-full object-contain object-bottom drop-shadow-2xl"
// //   //             />
// //   //           </div>

// //   //           {/* Floating Card: Pinned relative to the column so it stays in place */}
// //   //           <div
// //   //             className="absolute bottom-6 sm:bottom-12 lg:bottom-16 left-0 sm:left-10 lg:-left-10 bg-white p-2.5 sm:p-3 pr-3 sm:pr-4 rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 z-20 scale-90 sm:scale-100 origin-bottom-left"
// //   //             style={{ animation: "bounce 3s infinite" }}
// //   //           >
// //   //             <div className="bg-[#0A5C36]/10 p-1.5 sm:p-2 rounded-xl border border-[#0A5C36]/20">
// //   //               <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#0A5C36]" />
// //   //             </div>
// //   //             <div>
// //   //               <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
// //   //                 Certified
// //   //               </p>
// //   //               <p className="text-xs sm:text-sm font-black text-[#0A5C36] leading-tight">
// //   //                 WHO-GMP
// //   //                 <br />
// //   //                 Standard
// //   //               </p>
// //   //             </div>
// //   //             <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#8DC63F] rounded-full flex items-center justify-center ml-1 sm:ml-2">
// //   //               <ArrowRight className="w-3 h-3 text-[#0A5C36]" />
// //   //             </div>
// //   //           </div>
// //   //         </div>
// //   //       </div>
// //   //     </section>
// //   //   );
// //   // }


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Star, ArrowRight, ShieldCheck } from "lucide-react";

// export function Hero() {
//   return (
//     // Strictly locked to h-[100svh] so it perfectly fits the mobile screen
//     <section className="relative w-full h-[100svh] lg:h-[100dvh] bg-[#0A5C36] overflow-hidden flex flex-col pt-24 sm:pt-28 lg:pt-32">
      
//       {/* 
//         1. THE "PHARMA" TEXT FIX:
//         Moved up significantly on mobile using `top-[65%] -translate-y-1/2`. 
//         This centers it vertically in the lower half of the screen, perfectly filling the empty space!
//       */}
//       <div className="absolute top-[65%] sm:top-auto sm:bottom-[8%] left-1/2 -translate-x-1/2 -translate-y-1/2 sm:translate-y-0 w-full flex justify-center pointer-events-none z-0">
//         <h2 className="text-[120px] sm:text-[140px] md:text-[180px] lg:text-[280px] font-black text-white/[0.06] leading-none select-none tracking-tighter whitespace-nowrap">
//           PHARMA
//         </h2>
//       </div>

//       {/* Grid Container */}
//       <div className="max-w-[1536px] mx-auto px-5 md:px-12 xl:px-24 w-full flex-1 min-h-0 flex flex-col lg:grid lg:grid-cols-2 relative z-10">
        
//         {/* ================= LEFT COLUMN: Text & CTAs ================= */}
//         <div className="flex flex-col justify-center shrink-0 gap-4 lg:gap-8 pt-2 lg:pt-0 z-20">
//           <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-white leading-[1.15] tracking-tight">
//             Advancing Health <br />
//             <span className="text-white">Through Innovation</span>
//           </h1>

//           <p className="text-sm sm:text-lg text-white/80 max-w-sm sm:max-w-lg font-medium leading-relaxed pr-2 sm:pr-0">
//             Delivering trusted pharmaceutical marketing solutions, premium
//             quality APIs, and supply chain excellence to global healthcare
//             partners.
//           </p>

//           {/* 
//             2. THE BUTTONS FIX: 
//             Forced flex-row, reduced padding (px-4 py-2.5), and text-sm on mobile 
//             so they comfortably sit side-by-side without wrapping!
//           */}
//           <div className="flex flex-row items-center gap-3 sm:gap-4 mt-1 lg:mt-2">
//             <Link
//               href="#portfolio"
//               className="bg-[#8DC63F] hover:bg-[#7ab033] text-[#0A5C36] font-bold px-4 py-2.5 sm:px-8 sm:py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base w-fit"
//             >
//               Explore Portfolio
//             </Link>
//             <Link
//               href="#contact"
//               className="border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-4 py-2.5 sm:px-8 sm:py-4 rounded-full transition-all flex items-center justify-center text-sm sm:text-base w-fit"
//             >
//               Partner With Us
//             </Link>
//           </div>

//           <div className="flex items-center gap-3 mt-3 lg:mt-6">
//             <div className="flex -space-x-2">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-200 overflow-hidden shadow-sm">
//                 <img src="https://i.pravatar.cc/100?img=1" alt="partner" />
//               </div>
//               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-300 overflow-hidden shadow-sm">
//                 <img src="https://i.pravatar.cc/100?img=2" alt="partner" />
//               </div>
//               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-400 overflow-hidden shadow-sm">
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
//         <div className="relative w-full flex-1 min-h-0 mt-4 lg:mt-0 z-10">
          
//           {/* 
//             3. THE IMAGE FIX:
//             Increased the width slightly (w-[115%]) and pulled it further right (right-[-1.5rem]) 
//             to make her appear larger and closer to the camera on mobile.
//           */}
//           <div className="absolute bottom-0 right-[-1.5rem] sm:right-0 w-[115%] sm:w-full h-full lg:h-[85vh] pointer-events-none">
//             <Image
//               src="/hero-image1.png"
//               alt="Newlus Pharma Professional"
//               fill
//               priority
//               className="object-contain object-right-bottom drop-shadow-2xl"
//             />
//           </div>

//           {/* 
//             4. THE CARD FIX:
//             Moved to bottom-6 to ensure it clears the very bottom of the screen.
//           */}
//           <div
//             className="absolute bottom-6 left-0 sm:bottom-8 sm:left-10 lg:bottom-16 lg:-left-10 bg-white p-2.5 sm:p-3 pr-4 sm:pr-6 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-4 z-20 scale-90 sm:scale-100 origin-bottom-left"
//             style={{ animation: "bounce 3s infinite" }}
//           >
//             <div className="bg-[#0A5C36]/10 p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#0A5C36]/20">
//               <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#0A5C36]" />
//             </div>
//             <div>
//               <p className="text-[10px] sm:text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
//                 Certified
//               </p>
//               <p className="text-xs sm:text-sm font-black text-[#0A5C36] leading-tight">
//                 WHO-GMP
//                 <br />
//                 Standard
//               </p>
//             </div>
//             <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#8DC63F] rounded-full flex items-center justify-center ml-2 sm:ml-3">
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
import { motion } from "framer-motion"; // Import framer-motion
import { Star, ArrowRight, ShieldCheck } from "lucide-react";

// Animation Variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

export function Hero() {
  return (
    <section className="relative w-full h-[100svh] lg:h-[100dvh] bg-[#0A5C36] overflow-hidden flex flex-col pt-24 sm:pt-28 lg:pt-32">
      
      {/* 1. PARALLAX BACKGROUND TEXT
        Added a gentle drift effect and an entrance fade.
      */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[65%] sm:top-auto sm:bottom-[8%] left-1/2 -translate-x-1/2 -translate-y-1/2 sm:translate-y-0 w-full flex justify-center pointer-events-none z-0"
      >
        <motion.h2 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="text-[120px] sm:text-[140px] md:text-[180px] lg:text-[280px] font-black text-white leading-none select-none tracking-tighter whitespace-nowrap"
        >
          PHARMA
        </motion.h2>
      </motion.div>

      <div className="max-w-[1536px] mx-auto px-5 md:px-12 xl:px-24 w-full flex-1 min-h-0 flex flex-col lg:grid lg:grid-cols-2 relative z-10">
        
        {/* ================= LEFT COLUMN: Staggered Entrance ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center shrink-0 gap-4 lg:gap-8 pt-2 lg:pt-0 z-20"
        >
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-white leading-[1.15] tracking-tight">
            Advancing Health <br />
            <span className="text-white">Through Innovation</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm sm:text-lg text-white/80 max-w-sm sm:max-w-lg font-medium leading-relaxed pr-2 sm:pr-0">
            Delivering trusted pharmaceutical marketing solutions, premium
            quality APIs, and supply chain excellence to global healthcare
            partners.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-row items-center gap-3 sm:gap-4 mt-1 lg:mt-2">
            <Link
              href="#portfolio"
              className="bg-[#8DC63F] hover:bg-[#7ab033] text-[#0A5C36] font-bold px-4 py-2.5 sm:px-8 sm:py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base w-fit active:scale-95"
            >
              Explore Portfolio
            </Link>
            <Link
              href="#contact"
              className="border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-4 py-2.5 sm:px-8 sm:py-4 rounded-full transition-all flex items-center justify-center text-sm sm:text-base w-fit active:scale-95"
            >
              Partner With Us
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3 mt-3 lg:mt-6">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((img) => (
                <div key={img} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0A5C36] bg-gray-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${img}`} alt="partner" />
                </div>
              ))}
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
          </motion.div>
        </motion.div>

        {/* ================= RIGHT COLUMN: Image & Floating Card ================= */}
        <div className="relative w-full flex-1 min-h-0 mt-4 lg:mt-0 z-10">
          
          {/* DOCTOR ENTRANCE:
            Slides in from the right with a soft spring effect.
          */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-0 right-[-1.5rem] sm:right-0 w-[115%] sm:w-full h-full lg:h-[85vh] pointer-events-none"
          >
            <Image
              src="/hero-image1.png"
              alt="Newlus Pharma Professional"
              fill
              priority
              className="object-contain object-right-bottom drop-shadow-2xl"
            />
          </motion.div>

          {/* FLOATING CARD:
            Pop-in entrance + the infinite bounce.
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 0.9, x: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: 1 
            }}
            className="absolute bottom-6 left-0 sm:bottom-8 sm:left-10 lg:bottom-16 lg:-left-10 bg-white p-2.5 sm:p-3 pr-4 sm:pr-6 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-4 z-20 origin-bottom-left"
          >
            {/* Added a pulsing effect to the badge icon */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-[#0A5C36]/10 p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#0A5C36]/20"
            >
              <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#0A5C36]" />
            </motion.div>
            <div>
              <p className="text-[10px] sm:text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                Certified
              </p>
              <p className="text-xs sm:text-sm font-black text-[#0A5C36] leading-tight">
                WHO-GMP
                <br />
                Standard
              </p>
            </div>
            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5 sm:w-6 sm:h-6 bg-[#8DC63F] rounded-full flex items-center justify-center ml-2 sm:ml-3"
            >
              <ArrowRight className="w-3 h-3 text-[#0A5C36]" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}