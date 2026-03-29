// 'use client';

// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// export function CTA() {
//   return (
//     <section className="py-20 bg-gradient-to-r from-primary to-primary/80 border-t border-primary/50">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
//         <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
//           Ready to Transform Your Health?
//         </h2>

//         <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
//           Join millions of patients who have experienced the Newlus Pharma difference. Our dedicated team is ready to support your healthcare journey.
//         </p>

//         <Button
//           asChild
//           size="lg"
//           className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2"
//         >
//           <Link href="#contact">
//             Contact Our Team <ArrowRight className="w-5 h-5" />
//           </Link>
//         </Button>
//       </div>
//     </section>
//   );
// }


'use client';

import Link from 'next/link';
import { ArrowRight, Globe, FileText } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#0B1727] overflow-hidden flex items-center justify-center">
      
      {/* --- INLINE STYLES FOR DYNAMIC GLOW --- */}
      <style>{`
        @keyframes slow-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1) translate(0, 0); }
          50% { opacity: 0.7; transform: scale(1.2) translate(-20px, 20px); }
        }
        @keyframes float-up {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-slow-pulse {
          animation: slow-pulse 8s ease-in-out infinite;
        }
        .animate-float {
          animation: float-up 6s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Dot Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#8DC63F] rounded-full blur-[120px] mix-blend-screen animate-slow-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1B365D] rounded-full blur-[150px] mix-blend-screen animate-slow-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 relative z-10 w-full">
        
        {/* The Premium Floating Glassmorphic Card */}
        <div className="relative max-w-5xl mx-auto rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-16 lg:p-20 shadow-2xl overflow-hidden animate-float">
          
          {/* Subtle inner reflection line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div className="flex flex-col items-center text-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mb-8 shadow-inner">
              <Globe className="w-4 h-4 text-[#8DC63F]" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">Global Partnership Program</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
              Ready to Expand Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8DC63F] to-[#4CAF50]">
                Healthcare Portfolio?
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Join our growing network of international distributors and hospitals. Partner with Newlus Pharma to access WHO-GMP certified medications and a world-class supply chain.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
              
              {/* Primary Button */}
              <Link 
                href="#contact" 
                className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-[#8DC63F] hover:bg-[#7ab033] text-[#0A5C36] font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(141,198,63,0.3)] hover:shadow-[0_0_40px_rgba(141,198,63,0.5)] scale-100 hover:scale-105"
              >
                <span>Partner With Us</span>
                <div className="bg-[#0A5C36]/10 p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Secondary Button */}
              <Link 
                href="#portfolio" 
                className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                <FileText className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                <span>Download Product List</span>
              </Link>
              
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 text-white/50 text-sm font-semibold uppercase tracking-wider">
              <span>✓ ISO 9001:2015</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ WHO-GMP Certified</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Global Distribution</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}