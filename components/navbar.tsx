// // 'use client';

// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { Search, MapPin, ChevronDown, FileText, ClipboardList, Menu } from 'lucide-react';

// // export function Navbar() {
// //   return (
// //     // Outer wrapper keeps it floating at the top and manages the wide width
// //     <div className="fixed top-4 w-full z-50 px-4 md:px-8 flex justify-center">

// //       {/* The White Floating Pill - Max width expanded to match the image */}
// //       <nav className="w-full max-w-[1536px] bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between py-2 pl-6 pr-2 border border-gray-100">

// //         {/* 1. Logo */}
// //         <Link href="/" className="flex items-center flex-shrink-0 mr-2 xl:mr-6">
// //           <Image
// //             src="/logo.png"
// //             alt="Newlus Pharma"
// //             width={160}
// //             height={45}
// //             className="h-9 w-auto object-contain"
// //             priority
// //           />
// //         </Link>

// //         {/* 2. Dropdown (Replaces 'All Categories') */}
// //         <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer hover:text-[#8DC63F] whitespace-nowrap px-4 border-l border-gray-200 pl-6">
// //           Our Services <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
// //         </div>

// //         {/* 3. Search Bar (Replaces 'Search for medicines...') */}
// //         <div className="hidden md:flex flex-1 max-w-3xl bg-gray-50 hover:bg-gray-100 transition-colors rounded-full items-center px-5 py-3 mx-4 border border-gray-100">
// //           <Search className="w-5 h-5 text-gray-400 mr-3" />
// //           <input
// //             type="text"
// //             placeholder="Search pharmaceutical products, APIs, and solutions..."
// //             className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder:text-gray-400 focus:ring-0"
// //           />
// //         </div>

// //         {/* Right Side Group */}
// //         <div className="flex items-center gap-4 xl:gap-8 ml-auto pl-2">

// //           {/* 4. Location / Global Reach (Replaces 'Select location') */}
// //           <div className="hidden xl:flex items-center gap-3 cursor-pointer group">
// //             <MapPin className="w-5 h-5 text-gray-600 group-hover:text-[#8DC63F] transition-colors" />
// //             <div className="flex flex-col">
// //               <span className="text-[11px] text-gray-500 leading-none mb-1">Select Region</span>
// //               <div className="flex items-center text-sm font-bold text-gray-800 leading-none">
// //                 Worldwide <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
// //               </div>
// //             </div>
// //           </div>

// //           {/* 5. Inquiry List Icon (Replaces Shopping Cart) */}
// //           <div className="hidden sm:flex relative cursor-pointer p-2 group">
// //             <FileText className="w-6 h-6 text-gray-700 group-hover:text-[#8DC63F] transition-colors" />
// //             <span className="absolute top-0 right-0 bg-[#0A5C36] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
// //               0
// //             </span>
// //           </div>

// //           {/* 6. Big Green CTA Button (Replaces 'Upload Prescription') */}
// //           <button className="bg-[#0A5C36] hover:bg-[#08482a] text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 transition-all whitespace-nowrap shadow-md group hidden sm:flex">
// //             <span className="font-semibold text-sm tracking-wide">Submit Inquiry</span>
// //             {/* The vibrant green circular icon */}
// //             <div className="bg-[#8DC63F] p-2 rounded-full group-hover:scale-105 transition-transform">
// //               <ClipboardList className="w-5 h-5 text-[#0A5C36]" />
// //             </div>
// //           </button>

// //           {/* Mobile Menu Icon */}
// //           <button className="md:hidden p-2 text-gray-700 pr-4">
// //             <Menu className="w-6 h-6" />
// //           </button>

// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// // // 'use client';

// // // import Image from 'next/image';
// // // import Link from 'next/link';
// // // import { Menu, X } from 'lucide-react';
// // // import { useState } from 'react';
// // // import { motion } from 'framer-motion';

// // // const navItems = [
// // //   { label: 'About', href: '#about' },
// // //   { label: 'Services', href: '#services' },
// // //   { label: 'Products', href: '#products' },
// // //   { label: 'Contact', href: '#contact' },
// // // ];

// // // export function Navbar() {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   return (
// // //     <div className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
// // //       <nav className="w-full max-w-7xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl">

// // //         <div className="flex justify-between items-center h-16 px-6">

// // //           {/* Logo + Brand */}
// // //           <Link href="/" className="flex items-center gap-2">
// // //             <Image
// // //               src="/logo.png"
// // //               alt="Newlus Pharma"
// // //               width={40}
// // //               height={40}
// // //               className="h-9 w-auto"
// // //             />
// // //           </Link>

// // //           {/* Desktop Nav */}
// // //           <div className="hidden md:flex items-center gap-6">
// // //             {navItems.map((item) => (
// // //               <Link
// // //                 key={item.href}
// // //                 href={item.href}
// // //                 className="relative text-sm font-medium text-gray-700 hover:text-[#1E3A8A] transition"
// // //               >
// // //                 {item.label}

// // //                 {/* underline animation */}
// // //                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4CAF50] transition-all duration-300 group-hover:w-full"></span>
// // //               </Link>
// // //             ))}
// // //           </div>

// // //           {/* CTA */}
// // //           <div className="hidden md:block">
// // //             <Link
// // //               href="#contact"
// // //               className="px-5 py-2 rounded-full text-white text-sm font-medium
// // //               bg-gradient-to-r from-[#4CAF50] to-[#1E3A8A]
// // //               hover:opacity-90 transition"
// // //             >
// // //               Get in Touch
// // //             </Link>
// // //           </div>

// // //           {/* Mobile Button */}
// // //           <button
// // //             className="md:hidden"
// // //             onClick={() => setIsOpen(!isOpen)}
// // //           >
// // //             {isOpen ? <X /> : <Menu />}
// // //           </button>
// // //         </div>

// // //         {/* Mobile Menu */}
// // //         {isOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: -10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             className="md:hidden px-6 pb-4 space-y-2"
// // //           >
// // //             {navItems.map((item) => (
// // //               <Link
// // //                 key={item.href}
// // //                 href={item.href}
// // //                 className="block py-2 text-gray-700 hover:text-[#1E3A8A]"
// // //                 onClick={() => setIsOpen(false)}
// // //               >
// // //                 {item.label}
// // //               </Link>
// // //             ))}

// // //             <Link
// // //               href="#contact"
// // //               className="block text-center mt-2 px-4 py-2 rounded-full text-white
// // //               bg-gradient-to-r from-[#4CAF50] to-[#1E3A8A]"
// // //             >
// // //               Get in Touch
// // //             </Link>
// // //           </motion.div>
// // //         )}
// // //       </nav>
// // //     </div>
// // //   );
// // // }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import {
//   ClipboardList,
//   Menu,
//   X,
//   Info,
//   Briefcase,
//   Layers,
//   PhoneCall,
// } from "lucide-react";

// const navItems = [
//   { label: "About Us", href: "#about", icon: Info },
//   { label: "Services", href: "#services", icon: Briefcase },
//   { label: "Portfolio", href: "#portfolio", icon: Layers },
//   { label: "Contact", href: "#contact", icon: PhoneCall },
// ];

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     // Outer wrapper keeps it floating at the top and manages the wide width
//     <div className="fixed top-4 w-full z-50 px-4 md:px-8 flex justify-center">
//       {/* The White Floating Pill */}
//       <nav className="w-full max-w-[1536px] bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between py-2 pl-6 pr-2 border border-gray-100 relative">
//         {/* 1. Logo (Left) */}
//         <Link href="/" className="flex items-center flex-shrink-0 z-10">
//           <Image
//             src="/logo.png" // Make sure this matches your file name
//             alt="Newlus Pharma"
//             width={160}
//             height={45}
//             className="h-9 w-auto object-contain"
//             priority
//           />
//         </Link>

//         {/* 2. Main Navigation (Center) - Replaced Search Bar */}
//         <div className="hidden lg:flex flex-1 items-center justify-center gap-8 px-4">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#0A5C36] transition-colors group"
//               >
//                 <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#8DC63F] transition-colors" />
//                 <span>{item.label}</span>
//               </Link>
//             );
//           })}
//         </div>

//         {/* 3. Right Side Group (CTA & Mobile Menu) */}
//         <div className="flex items-center gap-4 z-10">
//           {/* Big Green CTA Button */}
//           <button className="bg-[#0A5C36] hover:bg-[#08482a] text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 transition-all whitespace-nowrap shadow-md group hidden sm:flex">
//             <span className="font-semibold text-sm tracking-wide">
//               Submit Inquiry
//             </span>
//             {/* The vibrant green circular icon */}
//             <div className="bg-[#8DC63F] p-2 rounded-full group-hover:scale-105 transition-transform">
//               <ClipboardList className="w-5 h-5 text-[#0A5C36]" />
//             </div>
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors mr-2"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* 4. Mobile Dropdown Menu */}
//         {isOpen && (
//           <div className="absolute top-[110%] left-0 w-full bg-white shadow-xl rounded-2xl border border-gray-100 p-4 lg:hidden flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0A5C36] rounded-xl transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Icon className="w-5 h-5 text-[#8DC63F]" />
//                   {item.label}
//                 </Link>
//               );
//             })}
//             <div className="pt-2 mt-2 border-t border-gray-100 sm:hidden">
//               {/* Mobile CTA - FIXED: Converted to pure Link and added onClick to close menu */}
//               <Link 
//                 href="#contact"
//                 onClick={() => setIsOpen(false)}
//                 className="w-full bg-[#0A5C36] text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2 hover:bg-[#08482a] transition-colors"
//               >
//                 <ClipboardList className="w-5 h-5" />
//                 Submit Inquiry
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ClipboardList,
  Menu,
  X,
  Info,
  Briefcase,
  Layers,
  PhoneCall,
} from "lucide-react";

const navItems = [
  { label: "About Us", href: "#about", icon: Info },
  { label: "Services", href: "#services", icon: Briefcase },
  { label: "Portfolio", href: "#portfolio", icon: Layers },
  { label: "Contact", href: "#contact", icon: PhoneCall },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Outer wrapper keeps it floating at the top and manages the wide width
    <div className="fixed top-4 w-full z-50 px-4 md:px-8 flex justify-center">
      {/* The White Floating Pill */}
      <nav className="w-full max-w-[1536px] bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between py-2 pl-6 pr-2 border border-gray-100 relative">
        
        {/* 1. Logo (Left) */}
        {/* Note: I added a proper relative wrapper to the image to ensure it doesn't distort */}
        <Link href="/" className="flex items-center flex-shrink-0 z-10 relative w-[160px] h-[36px]">
          <Image
            src="/logo.png" // Make sure this matches your file name
            alt="Newlus Pharma"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* 2. Main Navigation (Center) */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-8 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#0A5C36] transition-colors group"
              >
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#8DC63F] transition-colors" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* 3. Right Side Group (CTA & Mobile Menu) */}
        <div className="flex items-center gap-4 z-10">
          
          {/* Big Green CTA Button - FIXED: Converted to Link */}
          <Link 
            href="#contact"
            className="bg-[#0A5C36] hover:bg-[#08482a] text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 transition-all whitespace-nowrap shadow-md group hidden sm:flex"
          >
            <span className="font-semibold text-sm tracking-wide">
              Submit Inquiry
            </span>
            {/* The vibrant green circular icon */}
            <div className="bg-[#8DC63F] p-2 rounded-full group-hover:scale-105 transition-transform">
              <ClipboardList className="w-5 h-5 text-[#0A5C36]" />
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors mr-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 4. Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-[110%] left-0 w-full bg-white shadow-xl rounded-2xl border border-gray-100 p-4 lg:hidden flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0A5C36] rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5 text-[#8DC63F]" />
                  {item.label}
                </Link>
              );
            })}
            
            <div className="pt-2 mt-2 border-t border-gray-100 sm:hidden">
              {/* Mobile CTA - FIXED: Converted to pure Link and added onClick to close menu */}
              <Link 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#0A5C36] text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2 hover:bg-[#08482a] transition-colors"
              >
                <ClipboardList className="w-5 h-5" />
                Submit Inquiry
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}