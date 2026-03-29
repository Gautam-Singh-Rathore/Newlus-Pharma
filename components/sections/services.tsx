// 'use client';

// import { Tag, Truck, FileCheck, TrendingUp, ArrowRight } from 'lucide-react';

// const services = [
//   {
//     icon: Tag,
//     title: 'Premium White-Labeling',
//     description: 'Partnering with WHO-GMP certified manufacturers to deliver high-quality pharmaceutical products under the trusted Newlus Pharma brand.',
//   },
//   {
//     icon: Truck,
//     title: 'Global Supply Chain',
//     description: 'Robust and secure logistics networks ensuring that life-saving medications reach hospitals, clinics, and pharmacies worldwide without delay.',
//   },
//   {
//     icon: FileCheck,
//     title: 'Regulatory Compliance',
//     description: 'Expert navigation of international healthcare regulations, ensuring all distributed products meet rigorous global quality and safety standards.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Strategic Marketing',
//     description: 'Data-driven pharmaceutical marketing and distribution strategies that maximize market penetration and ensure sustainable brand growth.',
//   },
// ];

// export function Services() {
//   return (
//     // Used a very subtle off-white/gray background to separate this section from the white About section
//     <section
//       id="services"
//       className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-gray-100"
//     >
//       <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24">
        
//         {/* Section Header */}
//         <div className="text-center mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
//           {/* Consistency Badge */}
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-6">
//             <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
//             <span className="text-sm font-bold text-[#0A5C36] uppercase tracking-wider">Our Expertise</span>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6 leading-tight">
//             Comprehensive <span className="text-[#0A5C36]">Marketing Solutions</span>
//           </h2>
          
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             We provide end-to-end pharmaceutical distribution and marketing services, ensuring premium quality medicines reach the people who need them most.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(10,92,54,0.08)] transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom-8 flex flex-col h-full"
//                 style={{ animationDelay: `${(index + 1) * 150}ms` }}
//               >
//                 {/* Icon Wrapper */}
//                 <div className="w-14 h-14 bg-[#0A5C36]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A5C36] transition-colors duration-500 group-hover:scale-110 group-hover:-rotate-3">
//                   <Icon className="w-7 h-7 text-[#0A5C36] group-hover:text-white transition-colors duration-500" />
//                 </div>
                
//                 {/* Content */}
//                 <h3 className="text-xl font-bold text-[#1B365D] mb-3 group-hover:text-[#0A5C36] transition-colors">
//                   {service.title}
//                 </h3>
                
//                 <p className="text-gray-500 leading-relaxed mb-6 flex-grow text-sm sm:text-base">
//                   {service.description}
//                 </p>


//                 {/* Animated Bottom Border */}
//                 <div className="absolute bottom-0 left-0 h-1.5 bg-[#8DC63F] w-0 group-hover:w-full transition-all duration-500 ease-out" />
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { Tag, Truck, FileCheck, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Tag,
    title: 'Premium White-Labeling',
    description: 'Partnering with WHO-GMP certified manufacturers to deliver high-quality pharmaceutical products under the trusted Newlus Pharma brand.',
  },
  {
    icon: Truck,
    title: 'Global Supply Chain',
    description: 'Robust and secure logistics networks ensuring that life-saving medications reach hospitals, clinics, and pharmacies worldwide without delay.',
  },
  {
    icon: FileCheck,
    title: 'Regulatory Compliance',
    description: 'Expert navigation of international healthcare regulations, ensuring all distributed products meet rigorous global quality and safety standards.',
  },
  {
    icon: TrendingUp,
    title: 'Strategic Marketing',
    description: 'Data-driven pharmaceutical marketing and distribution strategies that maximize market penetration and ensure sustainable brand growth.',
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-gray-100 relative overflow-hidden"
    >
      {/* Subtle Background Glow for the whole section */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8DC63F]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
            <span className="text-sm font-bold text-[#0A5C36] uppercase tracking-wider">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6 leading-tight">
            Comprehensive <span className="text-[#0A5C36]">Marketing Solutions</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide end-to-end pharmaceutical distribution and marketing services, ensuring premium quality medicines reach the people who need them most.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }} // Desktop Hover
                whileTap={{ scale: 0.97 }} // Mobile Tap Feedback
                className="group relative bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgb(10,92,54,0.12)] transition-all duration-500 flex flex-col h-full overflow-hidden cursor-pointer"
              >
                {/* Decorative Accent: 
                  A subtle green light that appears in the top corner on hover/tap 
                */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#8DC63F]/10 rounded-full blur-2xl group-hover:bg-[#8DC63F]/20 transition-colors duration-500" />

                {/* Icon Wrapper */}
                <motion.div 
                  className="w-16 h-16 bg-[#0A5C36]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0A5C36] transition-all duration-500 shadow-sm"
                  whileHover={{ rotate: -5, scale: 1.1 }}
                >
                  <Icon className="w-8 h-8 text-[#0A5C36] group-hover:text-white transition-colors duration-500" />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-[#1B365D] mb-4 group-hover:text-[#0A5C36] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-sm sm:text-base group-hover:text-gray-600 transition-colors">
                  {service.description}
                </p>

                {/* Learn More Link (Visual cue for mobile users) */}
                {/* <div className="flex items-center gap-2 text-[#0A5C36] font-bold text-sm mt-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div> */}

                {/* Animated Bottom Border (Matching your theme) */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1.5 bg-[#8DC63F]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }} // Visual progress on scroll
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}