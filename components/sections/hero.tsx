



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
                Trusted by 1000+ Global Partners
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