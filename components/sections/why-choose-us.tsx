// 'use client';

// import { Award, TrendingUp, Users, Zap } from 'lucide-react';

// const reasons = [
//   {
//     icon: Award,
//     title: 'Clinical Excellence',
//     description: 'Evidence-based treatments with proven efficacy and safety profiles across multiple clinical trials.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Continuous Innovation',
//     description: 'Ongoing research and development ensuring we stay at the forefront of pharmaceutical advancement.',
//   },
//   {
//     icon: Users,
//     title: 'Patient-Centric Approach',
//     description: 'Every decision is guided by our commitment to improving patient outcomes and quality of life.',
//   },
//   {
//     icon: Zap,
//     title: 'Global Reach',
//     description: 'Serving healthcare providers and patients across 50+ countries with consistent quality and support.',
//   },
// ];

// export function WhyChooseUs() {
//   return (
//     <section
//       id="why-choose"
//       className="py-20 bg-muted/50 border-t border-border"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
//           <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
//             Why Choose Newlus Pharma?
//           </h2>
//           <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
//             Our commitment to excellence and innovation sets us apart in the pharmaceutical industry.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {reasons.map((reason, index) => {
//             const Icon = reason.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000"
//                 style={{ animationDelay: `${(index + 1) * 100}ms` }}
//               >
//                 <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 mb-4">
//                   <Icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="text-lg font-bold text-foreground mb-2">
//                   {reason.title}
//                 </h3>
//                 <p className="text-foreground/70 text-sm leading-relaxed">
//                   {reason.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';
import { ShieldCheck, PackageCheck, Globe2, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'WHO-GMP Certified Quality',
    description: 'We partner exclusively with top-tier, certified manufacturing facilities to guarantee every product meets uncompromising global safety standards.',
    image: '/why-1.jpg', // Placeholder: Add a clean manufacturing or lab image
  },
  {
    icon: PackageCheck,
    title: 'Unbroken Supply Chain',
    description: 'Our robust logistics network ensures temperature-controlled, timely, and secure delivery of pharmaceuticals from factory to healthcare providers.',
    image: '/why-2.jpg', // Placeholder: Add a modern logistics/warehouse image
  },
  {
    icon: Globe2,
    title: 'Strict Regulatory Compliance',
    description: 'Expert regulatory teams manage comprehensive compliance, ensuring seamless distribution across diverse international markets.',
    image: '/why-3.jpg', // Placeholder: Add an image of professionals reviewing data or a global map
  },
  {
    icon: TrendingUp,
    title: 'Strategic Brand Growth',
    description: 'Beyond distribution, we provide data-driven marketing strategies to establish market dominance and build long-term brand trust.',
    image: '/why-4.jpg', // Placeholder: Add an image of a professional meeting or a doctor consulting
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose"
      className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-gray-100"
    >
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
            <span className="text-sm font-bold text-[#0A5C36] uppercase tracking-wider">The Newlus Advantage</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6 leading-tight">
            Why Partner With <span className="text-[#0A5C36]">Newlus Pharma?</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We are more than a distributor. We are your strategic partner in delivering high-quality healthcare solutions with reliability and global expertise.
          </p>
        </div>

        {/* Image-Rich Grid Layout - FIXED: Now 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(10,92,54,0.08)] transition-all duration-500 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Top Image Section - Adjusted height for elegant proportions */}
                <div className="relative w-full h-48 sm:h-56 lg:h-48 xl:h-56 overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Icon overlapping the image */}
                  <div className="absolute -bottom-5 left-6 bg-white p-2 rounded-xl shadow-lg z-10 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="w-10 h-10 bg-[#0A5C36]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0A5C36] transition-colors duration-500">
                      <Icon className="w-5 h-5 text-[#0A5C36] group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                </div>

                {/* Bottom Text Content - Adjusted padding and text sizes */}
                <div className="p-6 pt-8 xl:p-8 xl:pt-10 flex flex-col flex-grow relative">
                  <h3 className="text-xl font-bold text-[#1B365D] mb-3 group-hover:text-[#0A5C36] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                  
                  {/* Decorative line that grows on hover */}
                  <div className="absolute bottom-0 left-0 h-1.5 bg-[#8DC63F] w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}