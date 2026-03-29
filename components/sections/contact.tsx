// 'use client';

// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Building2, Clock } from 'lucide-react';

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     subject: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', company: '', subject: '', message: '' });
//       setIsSubmitting(false);

//       // Reset status after 5 seconds
//       setTimeout(() => setSubmitStatus('idle'), 5000);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-gray-100 relative overflow-hidden">
      
//       {/* Background Decor */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-white clip-path-slant pointer-events-none z-0"></div>

//       <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-6">
//             <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
//             <span className="text-sm font-bold text-[#0A5C36] uppercase tracking-wider">Partner With Us</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-4">
//             Let's Start a <span className="text-[#0A5C36]">Conversation</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Inquire about our product portfolio, global distribution partnerships, or white-labeling opportunities.
//           </p>
//         </div>

//         {/* Split Contact Card */}
//         <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          
//           {/* LEFT SIDE: Contact Information (Navy Panel) */}
//           <div className="lg:w-2/5 bg-[#1B365D] p-10 sm:p-14 relative overflow-hidden flex flex-col justify-between">
//             {/* Decorative Orbs */}
//             <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-[#8DC63F] opacity-20 rounded-full blur-[80px]"></div>
//             <div className="absolute bottom-[-10%] left-[-20%] w-64 h-64 bg-[#0A5C36] opacity-40 rounded-full blur-[80px]"></div>

//             <div className="relative z-10">
//               <h3 className="text-3xl font-bold text-white mb-2">Global Headquarters</h3>
//               <p className="text-white/70 mb-12 leading-relaxed">
//                 Reach out to our dedicated support team. We aim to respond to all B2B inquiries within 24 hours.
//               </p>

//               <div className="space-y-8">
//                 <div className="flex items-start gap-5 group">
//                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8DC63F] transition-colors duration-300">
//                     <Building2 className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-[#8DC63F] uppercase tracking-wider mb-1">Corporate Office</p>
//                     <p className="text-white/90">123 Innovation Drive, Suite 400<br />San Francisco, CA 94105</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-5 group">
//                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8DC63F] transition-colors duration-300">
//                     <Mail className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-[#8DC63F] uppercase tracking-wider mb-1">Email Us</p>
//                     <p className="text-white/90">partnerships@newluspharma.com<br />info@newluspharma.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-5 group">
//                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8DC63F] transition-colors duration-300">
//                     <Phone className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-[#8DC63F] uppercase tracking-wider mb-1">Call Us</p>
//                     <p className="text-white/90">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Note */}
//             <div className="relative z-10 mt-16 pt-8 border-t border-white/10 flex items-center gap-3">
//               <Clock className="w-5 h-5 text-[#8DC63F]" />
//               <p className="text-sm text-white/70">Mon - Fri, 9:00 AM - 6:00 PM (EST)</p>
//             </div>
//           </div>

//           {/* RIGHT SIDE: Inquiry Form */}
//           <div className="lg:w-3/5 p-10 sm:p-14 bg-white">
//             <form onSubmit={handleSubmit} className="space-y-6">
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-bold text-[#1B365D] mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent transition-all focus:bg-white"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="company" className="block text-sm font-bold text-[#1B365D] mb-2">Company / Hospital *</label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent transition-all focus:bg-white"
//                     placeholder="Organization Name"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-bold text-[#1B365D] mb-2">Work Email *</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent transition-all focus:bg-white"
//                     placeholder="john@company.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-bold text-[#1B365D] mb-2">Inquiry Type *</label>
//                   <select
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent transition-all focus:bg-white appearance-none cursor-pointer"
//                   >
//                     <option value="" disabled>Select a topic</option>
//                     <option value="Distribution">Distribution Partnership</option>
//                     <option value="WhiteLabel">White-Labeling Services</option>
//                     <option value="Product">Product Inquiry</option>
//                     <option value="Other">Other Business Inquiry</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-bold text-[#1B365D] mb-2">Message *</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F] focus:border-transparent transition-all resize-none focus:bg-white"
//                   placeholder="Tell us about your requirements..."
//                 />
//               </div>

//               {submitStatus === 'success' && (
//                 <div className="p-4 rounded-xl bg-[#8DC63F]/10 border border-[#8DC63F]/20 text-[#0A5C36] font-semibold flex items-center gap-2 animate-in fade-in">
//                   <div className="w-2 h-2 rounded-full bg-[#8DC63F]"></div>
//                   Thank you! Your inquiry has been received. Our team will contact you shortly.
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-[#1B365D] hover:bg-[#0A5C36] text-white py-4 rounded-xl font-bold transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2 group shadow-lg shadow-[#1B365D]/20"
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center gap-2">
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     Sending...
//                   </span>
//                 ) : (
//                   <>
//                     Submit Inquiry
//                     <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building2, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setIsSubmitting(false);

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-[#F8FAFC] border-t border-gray-100 relative overflow-hidden">
      
      {/* Premium Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#8DC63F]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#1B365D]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-12 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-[#0A5C36] uppercase tracking-wider">Partner With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B365D] mb-4">
            Let's Start a <span className="text-[#0A5C36]">Conversation</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Inquire about our product portfolio, global distribution partnerships, or white-labeling opportunities.
          </p>
        </div>

        {/* Split Contact Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl lg:rounded-[2.5rem] shadow-[0_20px_60px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          
          {/* LEFT SIDE: Contact Information (Navy Panel) */}
          <div className="lg:w-2/5 bg-[#1B365D] p-8 sm:p-10 lg:p-14 relative overflow-hidden flex flex-col justify-between">
            
            {/* Custom Dot Pattern Background */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            ></div>

            {/* Decorative Orbs */}
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-[#8DC63F] opacity-30 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-20%] w-64 h-64 bg-[#0A5C36] opacity-50 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Global Headquarters</h3>
              <p className="text-white/70 mb-10 text-sm sm:text-base leading-relaxed">
                Reach out to our dedicated support team. We aim to respond to all B2B inquiries within 24 hours.
              </p>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-full bg-white/10 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8DC63F] group-hover:border-[#8DC63F] transition-all duration-300 shadow-lg">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#8DC63F] uppercase tracking-wider mb-1">Corporate Office</p>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">123 Innovation Drive, Suite 400<br />San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-full bg-white/10 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8DC63F] group-hover:border-[#8DC63F] transition-all duration-300 shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#8DC63F] uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">partnerships@newluspharma.com<br />info@newluspharma.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-full bg-white/10 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8DC63F] group-hover:border-[#8DC63F] transition-all duration-300 shadow-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#8DC63F] uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="relative z-10 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex items-center gap-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#8DC63F]" />
              <p className="text-xs sm:text-sm text-white/70">Mon - Fri, 9:00 AM - 6:00 PM (EST)</p>
            </div>
          </div>

          {/* RIGHT SIDE: Inquiry Form */}
          <div className="lg:w-3/5 p-8 sm:p-10 lg:p-14 bg-white">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-[#1B365D] mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] transition-all focus:bg-white text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-bold text-[#1B365D] mb-2">Company / Hospital *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] transition-all focus:bg-white text-sm sm:text-base"
                    placeholder="Organization Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-[#1B365D] mb-2">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] transition-all focus:bg-white text-sm sm:text-base"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-bold text-[#1B365D] mb-2">Inquiry Type *</label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] transition-all focus:bg-white appearance-none cursor-pointer text-sm sm:text-base"
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="Distribution">Distribution Partnership</option>
                      <option value="WhiteLabel">White-Labeling Services</option>
                      <option value="Product">Product Inquiry</option>
                      <option value="Other">Other Business Inquiry</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-[#1B365D] mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] transition-all resize-none focus:bg-white text-sm sm:text-base"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-[#8DC63F]/10 border border-[#8DC63F]/20 text-[#0A5C36] text-sm sm:text-base font-semibold flex items-center gap-3 animate-in fade-in">
                  <div className="w-2 h-2 rounded-full bg-[#8DC63F] flex-shrink-0"></div>
                  Thank you! Your inquiry has been received. Our team will contact you shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1B365D] hover:bg-[#0A5C36] text-white py-3.5 sm:py-4 rounded-xl font-bold transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2 group shadow-lg shadow-[#1B365D]/20 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <>
                    Submit Inquiry
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}