// 'use client';

// import { Pill, Microscope, Stethoscope, Zap } from 'lucide-react';

// const services = [
//   {
//     icon: Microscope,
//     title: 'Drug Development',
//     description: 'Cutting-edge research and development of novel pharmaceutical compounds using advanced biotechnology.',
//   },
//   {
//     icon: Pill,
//     title: 'Clinical Solutions',
//     description: 'Comprehensive therapeutic solutions for cardiovascular, metabolic, and immune system disorders.',
//   },
//   {
//     icon: Stethoscope,
//     title: 'Patient Support',
//     description: 'Dedicated patient programs ensuring accessibility and support throughout their treatment journey.',
//   },
//   {
//     icon: Zap,
//     title: 'Innovation Lab',
//     description: 'Collaborative research initiatives driving breakthrough discoveries in modern medicine.',
//   },
// ];

// export function Services() {
//   return (
//     <section
//       id="services"
//       className="py-20 bg-muted/50 border-t border-border"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
//           <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
//             Our Services
//           </h2>
//           <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
//             Comprehensive pharmaceutical solutions designed to meet diverse healthcare needs.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:bg-background animate-in fade-in slide-in-from-bottom-4 duration-1000"
//                 style={{ animationDelay: `${(index + 1) * 100}ms` }}
//               >
//                 <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
//                   <Icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-foreground/70 leading-relaxed">
//                   {service.description}
//                 </p>
//                 <div className="mt-4 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

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

export function Services() {
  return (
    // Used a very subtle off-white/gray background to separate this section from the white About section
    <section
      id="services"
      className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-gray-100"
    >
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Consistency Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
            <span className="text-sm font-bold text-[#0A5C36] uppercase tracking-wider">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6 leading-tight">
            Comprehensive <span className="text-[#0A5C36]">Marketing Solutions</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide end-to-end pharmaceutical distribution and marketing services, ensuring premium quality medicines reach the people who need them most.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(10,92,54,0.08)] transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom-8 flex flex-col h-full"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Icon Wrapper */}
                <div className="w-14 h-14 bg-[#0A5C36]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A5C36] transition-colors duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <Icon className="w-7 h-7 text-[#0A5C36] group-hover:text-white transition-colors duration-500" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-[#1B365D] mb-3 group-hover:text-[#0A5C36] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-6 flex-grow text-sm sm:text-base">
                  {service.description}
                </p>


                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1.5 bg-[#8DC63F] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}