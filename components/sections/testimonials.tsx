'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Cardiologist, City Medical Center',
    content: 'CardioCare Plus has transformed how we manage hypertension in our clinic. The efficacy and patient tolerance are exceptional compared to alternatives.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Orthopedic Surgeon',
    content: 'The reliable supply chain of Newlus Pharma ensures our hospital pharmacy is never out of critical joint-care medications like OsteoHeal.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Dr. Emma Rodriguez',
    role: 'Chief of Endocrinology',
    content: 'The comprehensive support system from Newlus Pharma makes our job easier. Their white-labeled metabolic products are of the highest WHO-GMP standards.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    name: 'James Chen',
    role: 'Pharmacy Director',
    content: 'Partnering with Newlus for our generic distribution has drastically improved our margins without ever compromising on clinical quality.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=8'
  },
  {
    name: 'Dr. Amina Al-Fayed',
    role: 'Head of Gynecology',
    content: 'FemCare Plus has become our standard prescription for maternal nutritional support. The consistency in quality is exactly what we look for in a partner.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=9'
  },
  {
    name: 'Michael Thompson',
    role: 'Hospital Administrator',
    content: 'Their regulatory compliance team is unmatched. Getting new therapeutics approved for our formulary has never been a smoother process.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=12'
  },
];

// Duplicate the array to create a seamless infinite loop
const firstRow = [...testimonials, ...testimonials];
const secondRow = [...testimonials.reverse(), ...testimonials];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white overflow-hidden relative">
      
      {/* FOOLPROOF INLINE STYLES: This forces the animations to work without needing globals.css */}
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
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-scroll-left:hover, .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        .mask-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#8DC63F]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#1B365D]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 relative z-10 mb-16 lg:mb-20">
        <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
            <span className="text-sm font-bold text-[#0A5C36] uppercase tracking-wider">Trusted Globally</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6 leading-tight">
            What Our <span className="text-[#0A5C36]">Partners Say</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Healthcare professionals, hospitals, and distributors worldwide trust Newlus Pharma for uncompromised quality and reliability.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Container using our custom CSS classes */}
      <div className="relative flex flex-col gap-8 w-full overflow-hidden z-10 mask-edges">
        
        {/* ROW 1: Moves Left */}
        <div className="flex w-max animate-scroll-left">
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </div>

        {/* ROW 2: Moves Right */}
        <div className="flex w-max animate-scroll-right">
          {secondRow.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-component for individual cards
function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="w-[350px] md:w-[450px] flex-shrink-0 mx-4 bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(10,92,54,0.08)] hover:border-[#8DC63F]/50 transition-all duration-300 relative group/card cursor-pointer">
      
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-8 text-[#1B365D]/5 group-hover/card:text-[#8DC63F]/20 transition-colors duration-300">
        <Quote className="w-16 h-16 rotate-180" />
      </div>

      <div className="flex gap-1 mb-6 relative z-10">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#8DC63F] text-[#8DC63F]" />
        ))}
      </div>

      <p className="text-gray-600 mb-8 leading-relaxed relative z-10 line-clamp-4">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-4 relative z-10 border-t border-gray-50 pt-6 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0A5C36]/10 group-hover/card:border-[#8DC63F] transition-colors duration-300">
          <Image 
            src={testimonial.image} 
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-[#1B365D] leading-tight">
            {testimonial.name}
          </p>
          <p className="text-[#0A5C36] text-xs font-semibold uppercase tracking-wider mt-1">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}