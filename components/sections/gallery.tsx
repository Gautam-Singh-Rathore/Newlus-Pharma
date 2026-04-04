// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';

// // const galleryItems = [
// //   {
// //     title: 'Advanced R&D Laboratory',
// //     category: 'Research & Innovation',
// //     description: 'Our state-of-the-art research facilities where formulations are developed and rigorously tested for maximum efficacy.',
// //     image: '/gallery-1.jpg', // Placeholder: Add your image paths
// //   },
// //   {
// //     title: 'Sterile Manufacturing Line',
// //     category: 'Production',
// //     description: 'WHO-GMP certified sterile environments ensuring zero contamination during the manufacturing process.',
// //     image: '/gallery-2.jpg',
// //   },
// //   {
// //     title: 'Quality Assurance Testing',
// //     category: 'Compliance',
// //     description: 'Every batch undergoes rigorous multi-point quality control testing before it is cleared for global distribution.',
// //     image: '/gallery-3.jpg',
// //   },
// //   {
// //     title: 'Global Logistics Hub',
// //     category: 'Supply Chain',
// //     description: 'Temperature-controlled warehousing and intelligent logistics ensuring unbroken cold-chain delivery.',
// //     image: '/gallery-4.jpg',
// //   },
// //   {
// //     title: 'Automated Packaging',
// //     category: 'Operations',
// //     description: 'High-speed, precision packaging lines that maintain product integrity and provide secure anti-counterfeit sealing.',
// //     image: '/gallery-5.jpg',
// //   },
// //   {
// //     title: 'Regulatory Data Center',
// //     category: 'Documentation',
// //     description: 'Our dedicated teams managing compliance, international dossier submissions, and continuous monitoring.',
// //     image: '/gallery-6.jpg',
// //   },
// // ];

// const galleryItems = [
//   {
//     title: 'Advanced R&D Laboratory',
//     category: 'Research & Innovation',
//     description: 'Our state-of-the-art research facilities where formulations are developed and rigorously tested for maximum efficacy.',
//     // Modern scientist in a clean lab environment
//     image: '/gallery1.jpg',
//   },
//   {
//     title: 'Sterile Manufacturing Line',
//     category: 'Production',
//     description: 'WHO-GMP certified sterile environments ensuring zero contamination during the manufacturing process.',
//     // High-tech sterile manufacturing / cleanroom aesthetic
//     image: '/gallery2.jpg',
//   },
//   {
//     title: 'Quality Assurance Testing',
//     category: 'Compliance',
//     description: 'Every batch undergoes rigorous multi-point quality control testing before it is cleared for global distribution.',
//     // Clinical testing / microscope / QA check
//     image: '/gallery3.png',
//   },
//   {
//     title: 'Global Logistics Hub',
//     category: 'Supply Chain',
//     description: 'Temperature-controlled warehousing and intelligent logistics ensuring unbroken cold-chain delivery.',
//     // Massive, modern warehouse and distribution center
//     image: '/gallery4.png',
//   },
//   {
//     title: 'Automated Packaging',
//     category: 'Operations',
//     description: 'High-speed, precision packaging lines that maintain product integrity and provide secure anti-counterfeit sealing.',
//     // Automated pill bottles / medication packaging line
//     image: '/gallery5.png',
//   },
//   {
//     title: 'Regulatory Data Center',
//     category: 'Documentation',
//     description: 'Our dedicated teams managing compliance, international dossier submissions, and continuous monitoring.',
//     // Modern data analytics dashboard / tech office
//     image: '/gallery6.jpg',
//   },
// ];

// // Duplicate the array to create a seamless infinite loop
// const firstRow = [...galleryItems, ...galleryItems];
// const secondRow = [...galleryItems.reverse(), ...galleryItems];

// export function Gallery() {
//   return (
//     <section id="gallery" className="py-24 lg:py-32 bg-white overflow-hidden relative">
      
//       {/* FOOLPROOF INLINE STYLES FOR INFINITE MARQUEE */}
//       <style>{`
//         @keyframes scroll-left {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scroll-right {
//           0% { transform: translateX(-50%); }
//           100% { transform: translateX(0); }
//         }
//         .animate-scroll-left {
//           animation: scroll-left 45s linear infinite;
//         }
//         .animate-scroll-right {
//           animation: scroll-right 45s linear infinite;
//         }
//         /* Pauses the entire row when hovered */
//         .animate-scroll-left:hover, .animate-scroll-right:hover {
//           animation-play-state: paused;
//         }
//         /* Fades out the hard edges of the scroll container */
//         .mask-edges {
//           -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
//           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
//         }
//       `}</style>

//       <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 relative z-10 mb-16 lg:mb-20">
        
//         {/* Section Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-6">
//             <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
//             <span className="text-sm font-bold text-[#0A5C36] uppercase tracking-wider">Inside Newlus Pharma</span>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6 leading-tight">
//             Our World-Class <span className="text-[#0A5C36]">Facilities</span>
//           </h2>
          
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Take a glimpse into the cutting-edge infrastructure and rigorous processes that power our global pharmaceutical operations.
//           </p>
//         </motion.div>
//       </div>

//       {/* Infinite Scrolling Marquee Container */}
//       <div className="relative flex flex-col gap-6 sm:gap-8 w-full overflow-hidden z-10 mask-edges pb-10">
        
//         {/* ROW 1: Moves Left */}
//         <div className="flex w-max animate-scroll-left group/row">
//           {firstRow.map((item, index) => (
//             <GalleryCard key={`row1-${index}`} item={item} />
//           ))}
//         </div>

//         {/* ROW 2: Moves Right */}
//         <div className="flex w-max animate-scroll-right group/row">
//           {secondRow.map((item, index) => (
//             <GalleryCard key={`row2-${index}`} item={item} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// // Sub-component for individual Gallery Cards
// function GalleryCard({ item }: { item: any }) {
//   return (
//     <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] flex-shrink-0 mx-3 sm:mx-4 rounded-[2rem] overflow-hidden group/card cursor-pointer shadow-md">
      
//       {/* Background Image */}
//       <Image 
//         src={item.image} 
//         alt={item.title}
//         fill
//         className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
//       />

//       {/* The Magic Overlay: 
//         Hidden while moving (opacity-0). 
//         Fades in smoothly when the user hovers over this specific card, acting as a backdrop for the text.
//       */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/95 via-[#1B365D]/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-out" />

//       {/* Hidden Text Content:
//         Pushed down (translate-y-8) and invisible (opacity-0) by default.
//         Slides up and reveals itself on hover.
//       */}
//       <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end opacity-0 group-hover/card:opacity-100 translate-y-8 group-hover/card:translate-y-0 transition-all duration-500 ease-out">
        
//         {/* Category Tag */}
//         <div className="bg-[#8DC63F]/20 backdrop-blur-sm border border-[#8DC63F]/30 text-[#8DC63F] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit mb-4">
//           {item.category}
//         </div>

//         <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-3 leading-tight flex items-start justify-between gap-2">
//           {item.title}
//           <ArrowUpRight className="w-5 h-5 text-[#8DC63F] shrink-0 opacity-0 group-hover/card:opacity-100 transition-opacity delay-100 duration-500" />
//         </h3>

//         <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-3">
//           {item.description}
//         </p>
        
//         {/* Decorative Green Line */}
//         <div className="h-1 bg-[#8DC63F] w-0 group-hover/card:w-12 transition-all duration-700 ease-out mt-6 rounded-full" />
//       </div>
//     </div>
//   );
// }



'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const galleryItems = [
  {
    title: 'Advanced R&D Laboratory',
    category: 'Research & Innovation',
    description: 'Our state-of-the-art research facilities where formulations are developed and rigorously tested for maximum efficacy.',
    image: '/gallery1.jpg',
  },
  {
    title: 'Sterile Manufacturing Line',
    category: 'Production',
    description: 'WHO-GMP certified sterile environments ensuring zero contamination during the manufacturing process.',
    image: '/gallery2.jpg',
  },
  {
    title: 'Quality Assurance Testing',
    category: 'Compliance',
    description: 'Every batch undergoes rigorous multi-point quality control testing before it is cleared for global distribution.',
    image: '/gallery3.png',
  },
  {
    title: 'Global Logistics Hub',
    category: 'Supply Chain',
    description: 'Temperature-controlled warehousing and intelligent logistics ensuring unbroken cold-chain delivery.',
    image: '/gallery4.png',
  },
  {
    title: 'Automated Packaging',
    category: 'Operations',
    description: 'High-speed, precision packaging lines that maintain product integrity and provide secure anti-counterfeit sealing.',
    image: '/gallery5.png',
  },
  {
    title: 'Regulatory Data Center',
    category: 'Documentation',
    description: 'Our dedicated teams managing compliance, international dossier submissions, and continuous monitoring.',
    image: '/gallery6.jpg',
  },
];

// Duplicate the array to create a seamless infinite loop
const firstRow = [...galleryItems, ...galleryItems];
const secondRow = [...galleryItems.reverse(), ...galleryItems];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white overflow-hidden relative">
      
      {/* FOOLPROOF INLINE STYLES FOR INFINITE MARQUEE */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }
        /* Pauses the entire row when hovered */
        .animate-scroll-left:hover, .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        /* Fades out the hard edges of the scroll container */
        .mask-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 relative z-10 mb-16 lg:mb-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
            <span className="text-sm font-bold text-[#0A5C36] uppercase tracking-wider">Inside Newlus Pharma</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6 leading-tight">
            Our World-Class <span className="text-[#0A5C36]">Facilities</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Take a glimpse into the cutting-edge infrastructure and rigorous processes that power our global pharmaceutical operations.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative flex flex-col gap-6 sm:gap-8 w-full overflow-hidden z-10 mask-edges pb-10">
        
        {/* ROW 1: Moves Left */}
        <div className="flex w-max animate-scroll-left group/row">
          {firstRow.map((item, index) => (
            <GalleryCard key={`row1-${index}`} item={item} />
          ))}
        </div>

        {/* ROW 2: Moves Right */}
        <div className="flex w-max animate-scroll-right group/row">
          {secondRow.map((item, index) => (
            <GalleryCard key={`row2-${index}`} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-component for individual Gallery Cards
function GalleryCard({ item }: { item: any }) {
  return (
    // FIXED: Changed to Landscape dimensions (Wider than they are tall)
    <div className="relative w-[320px] h-[220px] sm:w-[480px] sm:h-[320px] flex-shrink-0 mx-3 sm:mx-4 rounded-[2rem] overflow-hidden group/card cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
      
      {/* Background Image */}
      <Image 
        src={item.image} 
        alt={item.title}
        fill
        sizes="(max-width: 640px) 320px, 480px"
        className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
      />

      {/* REFINED MAGIC OVERLAY: 
        Reduced the heavy blue. Now it acts more like a clean shadow at the bottom 
        so the text is readable, but the top of the image stays beautifully clear!
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/90 via-[#1B365D]/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-out" />

      {/* Hidden Text Content */}
      <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-end opacity-0 group-hover/card:opacity-100 translate-y-6 group-hover/card:translate-y-0 transition-all duration-500 ease-out">
        
        {/* Category Tag */}
        <div className="bg-[#8DC63F]/20 backdrop-blur-md border border-[#8DC63F]/30 text-[#8DC63F] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit mb-3 sm:mb-4 shadow-sm">
          {item.category}
        </div>

        <h3 className="text-white text-lg sm:text-2xl font-bold mb-2 leading-tight flex items-center justify-between gap-2">
          <span className="truncate pr-2">{item.title}</span>
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#8DC63F] shrink-0 opacity-0 group-hover/card:opacity-100 transition-all delay-100 duration-500 translate-y-2 group-hover/card:translate-y-0" />
        </h3>

        <p className="text-white/80 text-[11px] sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 pr-6">
          {item.description}
        </p>
        
        {/* Decorative Green Line */}
        <div className="h-1 bg-[#8DC63F] w-0 group-hover/card:w-16 transition-all duration-700 ease-out mt-4 sm:mt-5 rounded-full shadow-[0_0_10px_rgba(141,198,63,0.5)]" />
      </div>
    </div>
  );
}