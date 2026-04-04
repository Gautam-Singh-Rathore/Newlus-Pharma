// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
// import {
//   ClipboardList,
//   Menu,
//   X,
//   Info,
//   Briefcase,
//   Layers,
//   PhoneCall,
// } from "lucide-react"; // Note: lucide-react in your original, assuming standard imports

// const navItems = [
//   { label: "About Us", href: "#about", icon: Info },
//   { label: "Services", href: "#services", icon: Briefcase },
//   { label: "Portfolio", href: "#portfolio", icon: Layers },
//   { label: "Contact", href: "#contact", icon: PhoneCall },
// ];

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.div 
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//       className="fixed top-4 w-full z-50 px-4 md:px-8 flex justify-center"
//     >
//       <nav className="w-full max-w-[1536px] bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between py-2 pl-6 pr-2 border border-gray-100 relative">
        
//         {/* 1. Logo (Left) */}
//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="z-10"
//         >
//           <Link href="/" className="flex items-center flex-shrink-0 relative w-[160px] h-[36px]">
//             <Image
//               src="/logo.png"
//               alt="Newlus Pharma"
//               fill
//               className="object-contain object-left"
//               priority
//             />
//           </Link>
//         </motion.div>

//         {/* 2. Main Navigation (Center) */}
//         <div className="hidden lg:flex flex-1 items-center justify-center gap-8 px-4">
//           {navItems.map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.href}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * i + 0.5 }}
//               >
//                 <Link
//                   href={item.href}
//                   className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#0A5C36] transition-colors group relative py-2"
//                 >
//                   <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#8DC63F] transition-colors" />
//                   <span>{item.label}</span>
//                   {/* Subtle animated underline */}
//                   <motion.span 
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8DC63F] origin-left"
//                     initial={{ scaleX: 0 }}
//                     whileHover={{ scaleX: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* 3. Right Side Group */}
//         <div className="flex items-center gap-4 z-10">
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.8 }}
//           >
//             <Link 
//               href="#contact"
//               className="bg-[#0A5C36] hover:bg-[#08482a] text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 transition-all whitespace-nowrap shadow-md group hidden sm:flex"
//             >
//               <span className="font-semibold text-sm tracking-wide">
//                 Submit Inquiry
//               </span>
//               <motion.div 
//                 whileHover={{ rotate: 15 }}
//                 className="bg-[#8DC63F] p-2 rounded-full"
//               >
//                 <ClipboardList className="w-5 h-5 text-[#0A5C36]" />
//               </motion.div>
//             </Link>
//           </motion.div>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors mr-2"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <motion.div
//               initial={false}
//               animate={{ rotate: isOpen ? 90 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </motion.div>
//           </button>
//         </div>

//         {/* 4. Mobile Dropdown Menu with AnimatePresence */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div 
//               initial={{ opacity: 0, height: 0, y: -20 }}
//               animate={{ opacity: 1, height: "auto", y: 0 }}
//               exit={{ opacity: 0, height: 0, y: -20 }}
//               transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//               className="absolute top-[115%] left-0 w-full bg-white shadow-xl rounded-2xl border border-gray-100 p-4 lg:hidden flex flex-col gap-2 overflow-hidden"
//             >
//               {navItems.map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <motion.div
//                     key={item.href}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                   >
//                     <Link
//                       href={item.href}
//                       className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0A5C36] rounded-xl transition-colors"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <Icon className="w-5 h-5 text-[#8DC63F]" />
//                       {item.label}
//                     </Link>
//                   </motion.div>
//                 );
//               })}
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="pt-2 mt-2 border-t border-gray-100 sm:hidden"
//               >
//                 <Link 
//                   href="#contact"
//                   onClick={() => setIsOpen(false)}
//                   className="w-full bg-[#0A5C36] text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2"
//                 >
//                   <ClipboardList className="w-5 h-5" />
//                   Submit Inquiry
//                 </Link>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </motion.div>
//   );
// }


'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Menu,
  X,
  Info,
  Briefcase,
  Layers,
  PhoneCall,
  BriefcaseBusiness // Added icon for Careers
} from "lucide-react";
import { CareersModal } from "./sections/CareersModal"; // We will create this next

const navItems = [
  { label: "About Us", href: "#about", icon: Info },
  { label: "Services", href: "#services", icon: Briefcase },
  { label: "Portfolio", href: "#portfolio", icon: Layers },
  { label: "Contact", href: "#contact", icon: PhoneCall },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false); // State for the Modal

  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 w-full z-40 px-4 md:px-8 flex justify-center"
      >
        <nav className="w-full max-w-[1536px] bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between py-2 pl-6 pr-2 border border-gray-100 relative">
          
          {/* 1. Logo (Left) */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="z-10">
            <Link href="/" className="flex items-center flex-shrink-0 relative w-[160px] h-[36px]">
              <Image src="/logo.png" alt="Newlus Pharma" fill className="object-contain object-left" priority />
            </Link>
          </motion.div>

          {/* 2. Main Navigation (Center) */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8 px-4">
            {navItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                >
                  <Link href={item.href} className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#0A5C36] transition-colors group relative py-2">
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#8DC63F] transition-colors" />
                    <span>{item.label}</span>
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8DC63F] origin-left"
                      initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}

            {/* Careers Link in Navbar */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navItems.length + 0.5 }}
              onClick={() => setIsCareersOpen(true)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#0A5C36] transition-colors group relative py-2 cursor-pointer"
            >
              <BriefcaseBusiness className="w-4 h-4 text-gray-400 group-hover:text-[#8DC63F]" />
              <span>Careers</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8DC63F] origin-left"
                initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* 3. Right Side Group */}
          <div className="flex items-center gap-4 z-10">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
              <Link href="#contact" className="bg-[#0A5C36] hover:bg-[#08482a] text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 transition-all whitespace-nowrap shadow-md group hidden sm:flex">
                <span className="font-semibold text-sm tracking-wide">Submit Inquiry</span>
                <motion.div whileHover={{ rotate: 15 }} className="bg-[#8DC63F] p-2 rounded-full">
                  <ClipboardList className="w-5 h-5 text-[#0A5C36]" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors mr-2" onClick={() => setIsOpen(!isOpen)}>
              <motion.div initial={false} animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>

          {/* 4. Mobile Dropdown Menu with AnimatePresence */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0, y: -20 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: -20 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-[115%] left-0 w-full bg-white shadow-xl rounded-2xl border border-gray-100 p-4 lg:hidden flex flex-col gap-2 overflow-hidden"
              >
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                      <Link href={item.href} className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0A5C36] rounded-xl transition-colors" onClick={() => setIsOpen(false)}>
                        <Icon className="w-5 h-5 text-[#8DC63F]" />
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile Careers Button */}
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navItems.length * 0.1 }}>
                  <button 
                    onClick={() => { setIsOpen(false); setIsCareersOpen(true); }}
                    className="flex w-full items-center gap-3 px-4 py-3 text-base font-bold text-[#1B365D] bg-[#8DC63F]/10 hover:bg-[#8DC63F]/20 rounded-xl transition-colors"
                  >
                    <BriefcaseBusiness className="w-5 h-5 text-[#8DC63F]" />
                    Careers at Newlus
                  </button>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="pt-2 mt-2 border-t border-gray-100 sm:hidden">
                  <Link href="#contact" onClick={() => setIsOpen(false)} className="w-full bg-[#0A5C36] text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2">
                    <ClipboardList className="w-5 h-5" />
                    Submit Inquiry
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.div>

      {/* Inject the Careers Modal */}
      <CareersModal isOpen={isCareersOpen} onClose={() => setIsCareersOpen(false)} />
    </>
  );
}