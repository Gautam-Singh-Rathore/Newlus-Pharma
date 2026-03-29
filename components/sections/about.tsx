

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Package, Globe2, Activity, Target, Award } from 'lucide-react';

// Improved Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number | null = null;
          let animationFrameId: number;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth slowdown at the end
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(end * easeOutQuart));

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            }
          };

          animationFrameId = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration]);

  return <div ref={ref} className="inline-block">{count}{suffix}</div>;
}

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24">
        
        {/* Top Section: Text & Images Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          
          {/* Left: Text Content */}
          <div className="flex flex-col gap-5 sm:gap-6 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-[#0A5C36] uppercase tracking-wider">About Newlus Pharma</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B365D] leading-tight">
              Bridging the gap between <span className="text-[#0A5C36]">quality manufacturing</span> and global healthcare.
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At Newlus Pharma, our core strength lies in identifying global healthcare needs and fulfilling them through uncompromising quality. We partner with world-class, WHO-GMP certified manufacturing facilities to bring premium pharmaceutical products to market under our trusted label.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-2 sm:mb-4">
              We don't just distribute medicines; we build robust supply chains, ensure rigorous quality compliance, and create marketing solutions that make life-saving medications accessible to patients and healthcare providers worldwide.
            </p>

            {/* Signature / Trust Mark */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A5C36] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                NP
              </div>
              <div>
                <p className="font-bold text-[#1B365D] text-sm sm:text-base">Committed to Excellence</p>
                <p className="text-xs sm:text-sm text-gray-500">Global Standards, Local Care</p>
              </div>
            </div>
          </div>

          {/* Right: Overlapping Image Composition (Responsive heights) */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 mt-8 lg:mt-0">
            
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10">
              <Image 
                src="/about-1.jpg" 
                alt="Pharmaceutical Supply Chain"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0A5C36]/10 mix-blend-multiply"></div>
            </div>
            
            {/* Overlapping Secondary Image */}
            <div className="absolute bottom-0 left-0 w-[60%] sm:w-[55%] h-[55%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-20 border-4 sm:border-8 border-white">
              <Image 
                src="/about-2.jpg" 
                alt="Quality Assurance"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge (Scaled down slightly on mobile) */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-6 lg:-left-12 z-30 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 scale-90 sm:scale-100">
              <div className="bg-[#8DC63F]/20 p-2 sm:p-3 rounded-full text-[#0A5C36]">
                <Award className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#1B365D]">100%</p>
                <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - SCALED DOWN SIZES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(10,92,54,0.1)] hover:border-[#8DC63F]/50 transition-all duration-300 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A5C36]/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0A5C36] transition-colors duration-300">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A5C36] group-hover:text-white transition-colors" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#1B365D] mb-1 flex items-center">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">WHO-GMP Certified Partners</p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(10,92,54,0.1)] hover:border-[#8DC63F]/50 transition-all duration-300 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A5C36]/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0A5C36] transition-colors duration-300">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A5C36] group-hover:text-white transition-colors" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#1B365D] mb-1 flex items-center">
              <AnimatedCounter end={250} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">Products in Portfolio</p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(10,92,54,0.1)] hover:border-[#8DC63F]/50 transition-all duration-300 group sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A5C36]/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0A5C36] transition-colors duration-300">
              <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A5C36] group-hover:text-white transition-colors" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#1B365D] mb-1 flex items-center">
              <AnimatedCounter end={15} suffix="k+" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">Healthcare Providers Reached</p>
          </div>
        </div>

        {/* Core Pillars / Values Layout - NOW WITH IMAGES */}
        <div className="mt-16 sm:mt-24 pt-16 sm:pt-20 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1B365D] mb-4">Our Core Pillars</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Marketing pharmaceuticals requires a foundation of absolute trust, strict regulatory compliance, and a deep understanding of patient needs. We operate on these key principles to ensure excellence.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Pillar 1: Strategic Sourcing */}
              <div className="bg-white border border-gray-100 rounded-2xl hover:border-[#8DC63F]/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group overflow-hidden flex flex-col">
                <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                  <Image 
                    src="/pillar-1.jpg" // Add an image for sourcing/manufacturing
                    alt="Strategic Sourcing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1B365D]/10"></div>
                </div>
                
                <div className="p-6 sm:p-8 flex flex-col relative flex-grow">
                  {/* Floating Icon */}
                  <div className="absolute -top-7 right-6 w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center group-hover:bg-[#0A5C36] transition-colors duration-300 z-10">
                    <Target className="w-6 h-6 text-[#0A5C36] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-[#1B365D] mb-3 mt-1">Strategic Sourcing</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We meticulously select manufacturing partners globally, ensuring every product bearing our name meets international quality standards.
                  </p>
                </div>
              </div>
              
              {/* Pillar 2: Market Excellence */}
              <div className="bg-white border border-gray-100 rounded-2xl hover:border-[#8DC63F]/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group overflow-hidden flex flex-col">
                <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                  <Image 
                    src="/pillar-2.jpg" // Add an image for distribution/logistics
                    alt="Market Excellence"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0A5C36]/10"></div>
                </div>
                
                <div className="p-6 sm:p-8 flex flex-col relative flex-grow">
                  {/* Floating Icon */}
                  <div className="absolute -top-7 right-6 w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center group-hover:bg-[#0A5C36] transition-colors duration-300 z-10">
                    <Activity className="w-6 h-6 text-[#0A5C36] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-[#1B365D] mb-3 mt-1">Market Excellence</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our robust distribution network ensures that high-quality medicines reach hospitals, pharmacies, and patients reliably and efficiently.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}