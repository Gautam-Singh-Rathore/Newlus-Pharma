// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { ShieldCheck, PackageCheck, Globe2, TrendingUp, ArrowUpRight } from 'lucide-react';

// const reasons = [
//   {
//     icon: ShieldCheck,
//     title: 'WHO-GMP Certified Quality',
//     description: 'We partner exclusively with top-tier, certified manufacturing facilities to guarantee every product meets uncompromising global safety standards.',
//     image: '/why-1.jpg', 
//   },
//   {
//     icon: PackageCheck,
//     title: 'Unbroken Supply Chain',
//     description: 'Our robust logistics network ensures temperature-controlled, timely, and secure delivery of pharmaceuticals from factory to healthcare providers.',
//     image: '/why-2.jpg', 
//   },
//   {
//     icon: Globe2,
//     title: 'Strict Regulatory Compliance',
//     description: 'Expert regulatory teams manage comprehensive compliance, ensuring seamless distribution across diverse international markets.',
//     image: '/why-3.jpg', 
//   },
//   {
//     icon: TrendingUp,
//     title: 'Strategic Brand Growth',
//     description: 'Beyond distribution, we provide data-driven marketing strategies to establish market dominance and build long-term brand trust.',
//     image: '/why-4.jpg', 
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
//   },
// };

// export function WhyChooseUs() {
//   return (
//     <section
//       id="why-choose"
//       className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-gray-100 relative overflow-hidden"
//     >
//       {/* Decorative background element */}
//       <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0A5C36]/5 rounded-full blur-[120px] pointer-events-none" />

//       <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        
//         {/* Section Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16 lg:mb-24"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-6 shadow-sm">
//             <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
//             <span className="text-sm font-bold text-[#0A5C36] uppercase tracking-wider">The Newlus Advantage</span>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6 leading-tight">
//             Why Partner With <span className="text-[#0A5C36]">Newlus Pharma?</span>
//           </h2>
          
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             We are more than a distributor. We are your strategic partner in delivering high-quality healthcare solutions with reliability and global expertise.
//           </p>
//         </motion.div>

//         {/* Image-Rich Grid Layout */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {reasons.map((reason, index) => {
//             const Icon = reason.icon;
//             return (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover={{ y: -12 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(10,92,54,0.15)] transition-all duration-500 overflow-hidden flex flex-col h-full"
//               >
//                 {/* Top Image Section */}
//                 <div className="relative w-full h-56 sm:h-64 lg:h-52 xl:h-64 overflow-hidden">
//                   <motion.div
//                     whileHover={{ scale: 1.15 }}
//                     transition={{ duration: 1.5, ease: "easeOut" }}
//                     className="w-full h-full"
//                   >
//                     <Image
//                       src={reason.image}
//                       alt={reason.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </motion.div>
                  
//                   {/* Color Overlay on Hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A5C36]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
//                   {/* Floating Icon with Spring Animation */}
//                   <motion.div 
//                     initial={{ y: 20 }}
//                     whileInView={{ y: 0 }}
//                     className="absolute -bottom-6 left-8 bg-white p-2.5 rounded-2xl shadow-xl z-20"
//                   >
//                     <div className="w-12 h-12 bg-[#0A5C36]/5 rounded-xl flex items-center justify-center group-hover:bg-[#0A5C36] transition-all duration-500 group-hover:rotate-[360deg]">
//                       <Icon className="w-6 h-6 text-[#0A5C36] group-hover:text-white transition-colors duration-500" />
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* Bottom Text Content */}
//                 <div className="p-8 pt-12 flex flex-col flex-grow relative">
//                   <h3 className="text-xl font-extrabold text-[#1B365D] mb-4 group-hover:text-[#0A5C36] transition-colors leading-tight">
//                     {reason.title}
//                   </h3>
//                   <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow">
//                     {reason.description}
//                   </p>
                  
//                   {/* Subtle Interaction Hint */}
//                   {/* <div className="flex items-center gap-2 text-[#0A5C36] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
//                     Learn Strategy <ArrowUpRight className="w-4 h-4" />
//                   </div> */}

//                   {/* Animated Corner Background (only visible on hover) */}
//                   <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#8DC63F]/5 rounded-tl-[100px] translate-y-12 translate-x-12 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700" />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//       </div>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, PackageCheck, Globe2, TrendingUp, ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'WHO-GMP Certified Quality',
    description: 'We partner exclusively with top-tier, certified manufacturing facilities to guarantee every product meets uncompromising global safety standards.',
    image: '/why-1.jpg', 
  },
  {
    icon: PackageCheck,
    title: 'Unbroken Supply Chain',
    description: 'Our robust logistics network ensures temperature-controlled, timely, and secure delivery of pharmaceuticals from factory to healthcare providers.',
    image: '/why-2.jpg', 
  },
  {
    icon: Globe2,
    title: 'Strict Regulatory Compliance',
    description: 'Expert regulatory teams manage comprehensive compliance, ensuring seamless distribution across diverse international markets.',
    image: '/why-3.jpg', 
  },
  {
    icon: TrendingUp,
    title: 'Strategic Brand Growth',
    description: 'Beyond distribution, we provide data-driven marketing strategies to establish market dominance and build long-term brand trust.',
    image: '/why-4.jpg', 
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose"
      className="py-20 lg:py-32 bg-[#F8FAFC] border-t border-gray-100 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0A5C36]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
            <span className="text-sm font-bold text-[#0A5C36] uppercase tracking-wider">The Newlus Advantage</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B365D] mb-6 leading-tight">
            Why Partner With <span className="text-[#0A5C36]">Newlus Pharma?</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We are more than a distributor. We are your strategic partner in delivering high-quality healthcare solutions with reliability and global expertise.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                whileTap={{ scale: 0.97 }} // Haptic feedback for mobile
                className="group bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(10,92,54,0.12)] transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                {/* Top Image Section */}
                <div className="relative w-full h-52 sm:h-64 lg:h-48 xl:h-64 overflow-hidden">
                  {/* MOBILE FIX: Zoom triggers on Scroll (whileInView) instead of just Hover */}
                  <motion.div
                    whileInView={{ scale: [1, 1.05] }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Subtle persistent overlay for mobile depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A5C36]/40 via-transparent to-transparent opacity-60 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Icon with continuous floating animation for mobile */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 left-8 bg-white p-2.5 rounded-2xl shadow-xl z-20"
                  >
                    <motion.div 
                      whileInView={{ rotate: [0, 10, 0] }} // Gentle wiggle on scroll
                      className="w-12 h-12 bg-[#0A5C36]/5 rounded-xl flex items-center justify-center group-hover:bg-[#0A5C36] transition-all duration-500 lg:group-hover:rotate-[360deg]"
                    >
                      <Icon className="w-6 h-6 text-[#0A5C36] group-hover:text-white transition-colors duration-500" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bottom Text Content */}
                <div className="p-8 pt-12 flex flex-col flex-grow relative">
                  <h3 className="text-lg font-bold text-[#1B365D] mb-3 group-hover:text-[#0A5C36] transition-colors leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow">
                    {reason.description}
                  </p>
                  
                  {/* Visible Link for Mobile (Replaces hidden Learn Strategy) */}
                  {/* <div className="flex items-center gap-2 text-[#0A5C36] font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                    View Impact <ArrowRight className="w-4 h-4" />
                  </div> */}

                  {/* Corner Accent: Slightly visible on mobile by default, expands on desktop hover */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#8DC63F]/5 rounded-tl-[100px] lg:translate-y-12 lg:translate-x-12 lg:group-hover:translate-y-0 lg:group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}