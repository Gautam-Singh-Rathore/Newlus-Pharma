

// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { Facebook, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

// const footerNavigation = {
//   Company: [
//     { label: 'About Us', href: '#about' },
//     { label: 'Our Expertise', href: '#services' },
//     { label: 'Why Choose Us', href: '#why-choose' },
//     { label: 'Global Partners', href: '#testimonials' },
//   ],
//   Portfolio: [
//     { label: 'Gynecology', href: '#portfolio' },
//     { label: 'Orthopedics', href: '#portfolio' },
//     { label: 'General Physician', href: '#portfolio' },
//     { label: 'Request Catalog', href: '#contact' },
//   ],
// };

// const socialLinks = [
//   { icon: Linkedin, href: '#', label: 'LinkedIn' },
//   { icon: Facebook, href: '#', label: 'Facebook' },
//   { icon: Mail, href: 'mailto:info@newluspharma.com', label: 'Email' },
// ];

// export function Footer() {
//   return (
//     // Changed bg-[#1B365D] to a much darker, richer #0A1322
//     <footer className="bg-[#0A1322] text-white pt-20 pb-10 border-t-4 border-[#8DC63F] relative overflow-hidden">
      
//       {/* Subtle Background Elements - Dimmed slightly for the darker background */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      
//       <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
//           {/* Brand & Contact Info */}
//           <div className="lg:col-span-5 flex flex-col">
//             <Link href="/" className="inline-block mb-6 bg-white p-3 rounded-xl w-fit">
//               <Image
//                 src="/logo.png" // Ensure this matches your logo filename
//                 alt="Newlus Pharma"
//                 width={180}
//                 height={50}
//                 className="h-10 w-auto object-contain"
//               />
//             </Link>
            
//             <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
//               Advancing global healthcare through strategic marketing, reliable distribution, and uncompromising WHO-GMP certified quality standards.
//             </p>

//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-[#8DC63F] mt-0.5" />
//                 <p className="text-white/80 text-sm">123 Innovation Drive, Suite 400<br />San Francisco, CA 94105</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-[#8DC63F]" />
//                 <p className="text-white/80 text-sm">+1 (555) 123-4567</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Mail className="w-5 h-5 text-[#8DC63F]" />
//                 <p className="text-white/80 text-sm">partnerships@newluspharma.com</p>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Columns */}
//           <div className="lg:col-span-4 grid grid-cols-2 gap-8">
//             {Object.entries(footerNavigation).map(([category, links]) => (
//               <div key={category}>
//                 <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{category}</h3>
//                 <ul className="space-y-4">
//                   {links.map((link, index) => (
//                     <li key={index}>
//                       <Link
//                         href={link.href}
//                         className="text-sm text-white/60 hover:text-[#8DC63F] transition-colors flex items-center group w-fit"
//                       >
//                         {link.label}
//                         <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0" />
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* CTA & Socials */}
//           <div className="lg:col-span-3 flex flex-col justify-between">
//             <div>
//               <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Connect</h3>
//               <p className="text-white/60 text-sm mb-6">
//                 Stay updated with our latest healthcare solutions and global partnerships.
//               </p>
//               <div className="flex gap-3">
//                 {socialLinks.map((social, index) => {
//                   const Icon = social.icon;
//                   return (
//                     <Link
//                       key={index}
//                       href={social.href}
//                       aria-label={social.label}
//                       className="w-10 h-10 rounded-full bg-white/10 border border-white/5 flex items-center justify-center hover:bg-[#8DC63F] hover:border-[#8DC63F] transition-all duration-300 group"
//                     >
//                       <Icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar: Copyright & Legal */}
//         <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
//           <p className="text-white/40 text-sm text-center md:text-left">
//             © {new Date().getFullYear()} Newlus Pharma. All rights reserved.
//           </p>
          
//           {/* <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
//             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
//             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
//             <Link href="#" className="hover:text-white transition-colors">Regulatory Compliance</Link>
//           </div> */}
//         </div>

//       </div>
//     </footer>
//   );
// }



'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin, Mail, MapPin, Phone, ArrowUpRight, Building } from 'lucide-react';

const footerNavigation = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Expertise', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose' },
    { label: 'Global Partners', href: '#testimonials' },
  ],
  Portfolio: [
    { label: 'Gynecology', href: '#portfolio' },
    { label: 'Orthopedics', href: '#portfolio' },
    { label: 'General Physician', href: '#portfolio' },
    { label: 'Request Catalog', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Mail, href: 'mailto:contact@newluspharma.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1322] text-white pt-20 pb-10 border-t-4 border-[#8DC63F] relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Contact Info */}
          <div className="lg:col-span-5 flex flex-col">
            <Link href="/" className="inline-block mb-6 bg-white p-3 rounded-xl w-fit">
              <Image
                src="/logo.png" // Ensure this matches your logo filename
                alt="Newlus Pharma"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              Advancing global healthcare through strategic marketing, reliable distribution, and uncompromising WHO-GMP certified quality standards.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8DC63F] shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">
                  Floor -II, B-05, Kesar, HBU(Main), <br />
                  Regional College Ajmer, Rajasthan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8DC63F] shrink-0" />
                <p className="text-white/80 text-sm">+91 89529 13119 &nbsp;|&nbsp; +91 92141 28213</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#8DC63F] shrink-0" />
                <p className="text-white/80 text-sm">contact@newluspharma.com</p>
              </div>
            </div>
            
            {/* Corporate Registration Details */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-3">
                <Building className="w-4 h-4 text-white/40 shrink-0" />
                <p className="text-white/50 text-xs font-mono tracking-wide">
                  <span className="text-white/30">CIN:</span> U21002RJ2026PTC111647
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Building className="w-4 h-4 text-white/40 shrink-0 opacity-0" /> {/* Spacer for alignment */}
                <p className="text-white/50 text-xs font-mono tracking-wide">
                  <span className="text-white/30">GSTIN:</span> 08AALCN3358E1ZB
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {Object.entries(footerNavigation).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-[#8DC63F] transition-colors flex items-center group w-fit"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA & Socials */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Connect</h3>
              <p className="text-white/60 text-sm mb-6">
                Stay updated with our latest healthcare solutions and global partnerships.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/5 flex items-center justify-center hover:bg-[#8DC63F] hover:border-[#8DC63F] transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Newlus Pharma. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}