// // 'use client';

// // import { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { X, UploadCloud, BriefcaseBusiness, FileText, CheckCircle2, Send } from 'lucide-react';

// // interface CareersModalProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// // }

// // export function CareersModal({ isOpen, onClose }: CareersModalProps) {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     category: '',
// //     role: '',
// //   });
// //   const [file, setFile] = useState<File | null>(null);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [isSuccess, setIsSuccess] = useState(false);

// //   const roles = {
// //     Marketing: [
// //       "Medical Representative",
// //       "Regional Sales Manager",
// //       "Product Manager",
// //       "Medical Advisor",
// //       "District Manager",
// //       "Market Research Analyst",
// //       "Territory Manager",
// //       "Area Business Manager",
// //       "Senior Business Manager",
// //       "Sales Manager",
// //       "National Sales Manager"
// //     ],
// //     Operations: [
// //       "Accountant",
// //       "HR Intern",
// //       "Office Executive"
// //     ]
// //   };

// //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files[0]) {
// //       setFile(e.target.files[0]);
// //     }
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
    
// //     // Simulate API Call
// //     setTimeout(() => {
// //       setIsSubmitting(false);
// //       setIsSuccess(true);
      
// //       // Auto close after success
// //       setTimeout(() => {
// //         onClose();
// //         // Reset form
// //         setTimeout(() => {
// //           setIsSuccess(false);
// //           setFormData({ name: '', email: '', category: '', role: '' });
// //           setFile(null);
// //         }, 500);
// //       }, 2500);
// //     }, 1500);
// //   };

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <>
// //           {/* Backdrop */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={onClose}
// //             className="fixed inset-0 bg-[#1B365D]/60 backdrop-blur-sm z-[100]"
// //           />

// //           {/* Modal Container */}
// //           <div className="fixed inset-0 flex items-center justify-center z-[101] px-4 py-6 pointer-events-none">
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.95, y: 20 }}
// //               animate={{ opacity: 1, scale: 1, y: 0 }}
// //               exit={{ opacity: 0, scale: 0.95, y: 20 }}
// //               transition={{ type: "spring", damping: 25, stiffness: 300 }}
// //               className="bg-white w-full max-w-2xl rounded-3xl lg:rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
// //             >
              
// //               {/* Modal Header */}
// //               <div className="bg-[#F8FAFC] px-6 sm:px-10 py-6 border-b border-gray-100 flex items-center justify-between shrink-0">
// //                 <div className="flex items-center gap-4">
// //                   <div className="w-12 h-12 bg-[#8DC63F]/20 rounded-2xl flex items-center justify-center text-[#0A5C36]">
// //                     <BriefcaseBusiness className="w-6 h-6" />
// //                   </div>
// //                   <div>
// //                     <h2 className="text-xl sm:text-2xl font-bold text-[#1B365D]">Join Our Team</h2>
// //                     <p className="text-sm text-gray-500 font-medium">Shape the future of global healthcare.</p>
// //                   </div>
// //                 </div>
// //                 <button 
// //                   onClick={onClose}
// //                   className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-red-500 transition-colors shrink-0"
// //                 >
// //                   <X className="w-5 h-5" />
// //                 </button>
// //               </div>

// //               {/* Scrollable Form Body */}
// //               <div className="overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                
// //                 {isSuccess ? (
// //                   <motion.div 
// //                     initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
// //                     className="flex flex-col items-center justify-center py-10 text-center"
// //                   >
// //                     <div className="w-20 h-20 bg-[#8DC63F]/20 rounded-full flex items-center justify-center mb-6">
// //                       <CheckCircle2 className="w-10 h-10 text-[#0A5C36]" />
// //                     </div>
// //                     <h3 className="text-2xl font-bold text-[#1B365D] mb-2">Application Received!</h3>
// //                     <p className="text-gray-500 max-w-md">Thank you for your interest in Newlus Pharma. Our HR team will review your CV and contact you shortly.</p>
// //                   </motion.div>
// //                 ) : (
// //                   <form onSubmit={handleSubmit} className="space-y-6">
                    
// //                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //                       <div>
// //                         <label className="block text-sm font-bold text-[#1B365D] mb-2">Full Name *</label>
// //                         <input
// //                           type="text" required
// //                           value={formData.name}
// //                           onChange={(e) => setFormData({...formData, name: e.target.value})}
// //                           className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all focus:bg-white"
// //                           placeholder="Jane Doe"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label className="block text-sm font-bold text-[#1B365D] mb-2">Email Address *</label>
// //                         <input
// //                           type="email" required
// //                           value={formData.email}
// //                           onChange={(e) => setFormData({...formData, email: e.target.value})}
// //                           className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all focus:bg-white"
// //                           placeholder="jane@example.com"
// //                         />
// //                       </div>
// //                     </div>

// //                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //                       <div>
// //                         <label className="block text-sm font-bold text-[#1B365D] mb-2">Department *</label>
// //                         <div className="relative">
// //                           <select
// //                             required
// //                             value={formData.category}
// //                             onChange={(e) => setFormData({...formData, category: e.target.value, role: ''})}
// //                             className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all appearance-none cursor-pointer"
// //                           >
// //                             <option value="" disabled>Select Department</option>
// //                             <option value="Marketing">Marketing & Sales</option>
// //                             <option value="Operations">Operations & HR</option>
// //                           </select>
// //                           <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
// //                             <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
// //                           </div>
// //                         </div>
// //                       </div>

// //                       <AnimatePresence mode="popLayout">
// //                         {formData.category && (
// //                           <motion.div
// //                             initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
// //                           >
// //                             <label className="block text-sm font-bold text-[#1B365D] mb-2">Specific Role *</label>
// //                             <div className="relative">
// //                               <select
// //                                 required
// //                                 value={formData.role}
// //                                 onChange={(e) => setFormData({...formData, role: e.target.value})}
// //                                 className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all appearance-none cursor-pointer"
// //                               >
// //                                 <option value="" disabled>Select Role</option>
// //                                 {roles[formData.category as keyof typeof roles].map((role) => (
// //                                   <option key={role} value={role}>{role}</option>
// //                                 ))}
// //                               </select>
// //                               <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
// //                                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
// //                               </div>
// //                             </div>
// //                           </motion.div>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     {/* CV Upload Area */}
// //                     <div>
// //                       <label className="block text-sm font-bold text-[#1B365D] mb-2">Upload Resume / CV *</label>
// //                       <div className="relative border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:border-[#8DC63F] hover:bg-[#8DC63F]/5 transition-all group">
// //                         <input
// //                           type="file" required accept=".pdf,.doc,.docx"
// //                           onChange={handleFileChange}
// //                           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
// //                         />
// //                         <div className="flex flex-col items-center justify-center text-center pointer-events-none">
// //                           {file ? (
// //                             <>
// //                               <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
// //                                 <FileText className="w-6 h-6" />
// //                               </div>
// //                               <p className="text-sm font-bold text-[#1B365D]">{file.name}</p>
// //                               <p className="text-xs text-gray-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
// //                             </>
// //                           ) : (
// //                             <>
// //                               <div className="w-12 h-12 bg-gray-100 text-gray-500 group-hover:bg-[#8DC63F]/20 group-hover:text-[#0A5C36] rounded-full flex items-center justify-center mb-3 transition-colors">
// //                                 <UploadCloud className="w-6 h-6" />
// //                               </div>
// //                               <p className="text-sm font-bold text-[#1B365D]">Click to upload or drag and drop</p>
// //                               <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max. 5MB)</p>
// //                             </>
// //                           )}
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div className="pt-4 border-t border-gray-100">
// //                       <motion.button
// //                         whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
// //                         type="submit" disabled={isSubmitting || !file}
// //                         className="w-full bg-[#1B365D] hover:bg-[#0A5C36] text-white py-4 rounded-xl font-bold transition-all disabled:opacity-70 flex items-center justify-center gap-2 group shadow-lg"
// //                       >
// //                         {isSubmitting ? (
// //                           <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
// //                         ) : (
// //                           <>
// //                             Submit Application
// //                             <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
// //                           </>
// //                         )}
// //                       </motion.button>
// //                     </div>

// //                   </form>
// //                 )}
// //               </div>
// //             </motion.div>
// //           </div>
// //         </>
// //       )}
// //     </AnimatePresence>
// //   );
// // }



// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, UploadCloud, BriefcaseBusiness, FileText, CheckCircle2, Send, XCircle } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// interface CareersModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function CareersModal({ isOpen, onClose }: CareersModalProps) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     category: '',
//     role: '',
//   });
//   const [file, setFile] = useState<File | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const roles = {
//     Marketing: [
//       "Medical Representative",
//       "Regional Sales Manager",
//       "Product Manager",
//       "Medical Advisor",
//       "District Manager",
//       "Market Research Analyst",
//       "Territory Manager",
//       "Area Business Manager",
//       "Senior Business Manager",
//       "Sales Manager",
//       "National Sales Manager"
//     ],
//     Operations: [
//       "Accountant",
//       "HR Intern",
//       "Office Executive"
//     ]
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   // Helper function to convert the File to Base64
//   const convertToBase64 = (file: File): Promise<string> => {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload = () => {
//         resolve(fileReader.result as string);
//       };
//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('idle');
    
//     try {
//       let attachmentContent = '';
//       if (file) {
//         attachmentContent = await convertToBase64(file);
//       }

//       // Hardcoded EmailJS Credentials
//       const serviceID = 'service_k6nil6d';
//       const templateID = 'template_94tei1l';
//       const publicKey = 'GSKtSqu_MtsosiYND';

//       const templateParams = {
//         name: formData.name,
//         email: formData.email,
//         department: formData.category,
//         role: formData.role,
//         resume_attachment: attachmentContent, 
//       };

//       await emailjs.send(serviceID, templateID, templateParams, publicKey);

//       setSubmitStatus('success');
      
//       // Auto close after success
//       setTimeout(() => {
//         onClose();
//         // Reset form quietly after it closes
//         setTimeout(() => {
//           setSubmitStatus('idle');
//           setFormData({ name: '', email: '', category: '', role: '' });
//           setFile(null);
//         }, 500);
//       }, 3000);

//     } catch (error) {
//       console.error('Failed to submit application:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-[#1B365D]/60 backdrop-blur-sm z-[100]"
//           />

//           {/* Modal Container */}
//           <div className="fixed inset-0 flex items-center justify-center z-[101] px-4 py-6 pointer-events-none">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="bg-white w-full max-w-2xl rounded-3xl lg:rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
//             >
              
//               {/* Modal Header */}
//               <div className="bg-[#F8FAFC] px-6 sm:px-10 py-6 border-b border-gray-100 flex items-center justify-between shrink-0">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-[#8DC63F]/20 rounded-2xl flex items-center justify-center text-[#0A5C36]">
//                     <BriefcaseBusiness className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h2 className="text-xl sm:text-2xl font-bold text-[#1B365D]">Join Our Team</h2>
//                     <p className="text-sm text-gray-500 font-medium">Shape the future of global healthcare.</p>
//                   </div>
//                 </div>
//                 <button 
//                   onClick={onClose}
//                   className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-red-500 transition-colors shrink-0"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* Scrollable Form Body */}
//               <div className="overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                
//                 {submitStatus === 'success' ? (
//                   <motion.div 
//                     initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
//                     className="flex flex-col items-center justify-center py-10 text-center"
//                   >
//                     <div className="w-20 h-20 bg-[#8DC63F]/20 rounded-full flex items-center justify-center mb-6">
//                       <CheckCircle2 className="w-10 h-10 text-[#0A5C36]" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-[#1B365D] mb-2">Application Received!</h3>
//                     <p className="text-gray-500 max-w-md">Thank you for your interest in Newlus Pharma. Our HR team will review your CV and contact you shortly.</p>
//                   </motion.div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-6">
                    
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-bold text-[#1B365D] mb-2">Full Name *</label>
//                         <input
//                           type="text" required
//                           value={formData.name}
//                           onChange={(e) => setFormData({...formData, name: e.target.value})}
//                           className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all focus:bg-white"
//                           placeholder="Jane Doe"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-bold text-[#1B365D] mb-2">Email Address *</label>
//                         <input
//                           type="email" required
//                           value={formData.email}
//                           onChange={(e) => setFormData({...formData, email: e.target.value})}
//                           className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all focus:bg-white"
//                           placeholder="jane@example.com"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-bold text-[#1B365D] mb-2">Department *</label>
//                         <div className="relative">
//                           <select
//                             required
//                             value={formData.category}
//                             onChange={(e) => setFormData({...formData, category: e.target.value, role: ''})}
//                             className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all appearance-none cursor-pointer"
//                           >
//                             <option value="" disabled>Select Department</option>
//                             <option value="Marketing">Marketing & Sales</option>
//                             <option value="Operations">Operations & HR</option>
//                           </select>
//                           <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
//                             <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
//                           </div>
//                         </div>
//                       </div>

//                       <AnimatePresence mode="popLayout">
//                         {formData.category && (
//                           <motion.div
//                             initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
//                           >
//                             <label className="block text-sm font-bold text-[#1B365D] mb-2">Specific Role *</label>
//                             <div className="relative">
//                               <select
//                                 required
//                                 value={formData.role}
//                                 onChange={(e) => setFormData({...formData, role: e.target.value})}
//                                 className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all appearance-none cursor-pointer"
//                               >
//                                 <option value="" disabled>Select Role</option>
//                                 {roles[formData.category as keyof typeof roles].map((role) => (
//                                   <option key={role} value={role}>{role}</option>
//                                 ))}
//                               </select>
//                               <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
//                                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
//                               </div>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* CV Upload Area */}
//                     <div>
//                       <label className="block text-sm font-bold text-[#1B365D] mb-2">Upload Resume / CV *</label>
//                       <div className="relative border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:border-[#8DC63F] hover:bg-[#8DC63F]/5 transition-all group bg-white">
//                         <input
//                           type="file" required accept=".pdf,.doc,.docx"
//                           onChange={handleFileChange}
//                           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                         />
//                         <div className="flex flex-col items-center justify-center text-center pointer-events-none">
//                           {file ? (
//                             <>
//                               <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
//                                 <FileText className="w-6 h-6" />
//                               </div>
//                               <p className="text-sm font-bold text-[#1B365D]">{file.name}</p>
//                               <p className="text-xs text-gray-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
//                             </>
//                           ) : (
//                             <>
//                               <div className="w-12 h-12 bg-gray-100 text-gray-500 group-hover:bg-[#8DC63F]/20 group-hover:text-[#0A5C36] rounded-full flex items-center justify-center mb-3 transition-colors">
//                                 <UploadCloud className="w-6 h-6" />
//                               </div>
//                               <p className="text-sm font-bold text-[#1B365D]">Click to upload or drag and drop</p>
//                               <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Ensure file size is small)</p>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </div>

//                     {submitStatus === 'error' && (
//                       <motion.div 
//                         initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
//                         className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-semibold flex items-center gap-3"
//                       >
//                         <XCircle className="w-5 h-5 flex-shrink-0" />
//                         Upload failed. File might be too large (Max 50KB for free EmailJS), or server is busy.
//                       </motion.div>
//                     )}

//                     <div className="pt-4 border-t border-gray-100">
//                       <motion.button
//                         whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
//                         type="submit" disabled={isSubmitting || !file}
//                         className="w-full bg-[#1B365D] hover:bg-[#0A5C36] text-white py-4 rounded-xl font-bold transition-all disabled:opacity-70 flex items-center justify-center gap-2 group shadow-lg"
//                       >
//                         {isSubmitting ? (
//                           <span className="flex items-center gap-2">
//                             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                             Submitting...
//                           </span>
//                         ) : (
//                           <>
//                             Submit Application
//                             <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                           </>
//                         )}
//                       </motion.button>
//                     </div>

//                   </form>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }



'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, BriefcaseBusiness, FileText, CheckCircle2, Send, XCircle } from 'lucide-react';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CareersModal({ isOpen, onClose }: CareersModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    role: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const roles = {
    Marketing: [
      "Medical Representative",
      "Regional Sales Manager",
      "Product Manager",
      "Medical Advisor",
      "District Manager",
      "Market Research Analyst",
      "Territory Manager",
      "Area Business Manager",
      "Senior Business Manager",
      "Sales Manager",
      "National Sales Manager"
    ],
    Operations: [
      "Accountant",
      "HR Intern",
      "Office Executive"
    ]
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const submissionData = new FormData();
      
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      submissionData.append("category", formData.category);
      submissionData.append("role", formData.role);
      
      if (file) {
        submissionData.append("attachment", file);
      }

      // Point this to your new local API route!
      const response = await fetch("/api/careers", {
        method: "POST",
        body: submissionData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        
        setTimeout(() => {
          onClose();
          setTimeout(() => {
            setSubmitStatus('idle');
            setFormData({ name: '', email: '', category: '', role: '' });
            setFile(null);
          }, 500);
        }, 3000);
      } else {
        throw new Error(result.error || "Submission failed");
      }

    } catch (error: any) {
      console.error('Failed to submit application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1B365D]/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] px-4 py-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-2xl rounded-3xl lg:rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
            >
              
              {/* Modal Header */}
              <div className="bg-[#F8FAFC] px-6 sm:px-10 py-6 border-b border-gray-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#8DC63F]/20 rounded-2xl flex items-center justify-center text-[#0A5C36]">
                    <BriefcaseBusiness className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1B365D]">Join Our Team</h2>
                    <p className="text-sm text-gray-500 font-medium">Shape the future of global healthcare.</p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-red-500 transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div className="overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                
                {submitStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-20 h-20 bg-[#8DC63F]/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#0A5C36]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B365D] mb-2">Application Received!</h3>
                    <p className="text-gray-500 max-w-md">Thank you for your interest in Newlus Pharma. Our HR team will review your CV and contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-[#1B365D] mb-2">Full Name *</label>
                        {/* ADDED name="name" */}
                        <input
                          type="text" name="name" required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all focus:bg-white"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#1B365D] mb-2">Email Address *</label>
                        {/* ADDED name="email" */}
                        <input
                          type="email" name="email" required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all focus:bg-white"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-[#1B365D] mb-2">Department *</label>
                        <div className="relative">
                          {/* ADDED name="Department" */}
                          <select
                            name="Department" required
                            value={formData.category}
                            onChange={(e) => setFormData({...formData, category: e.target.value, role: ''})}
                            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select Department</option>
                            <option value="Marketing">Marketing & Sales</option>
                            <option value="Operations">Operations & HR</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                        </div>
                      </div>

                      <AnimatePresence mode="popLayout">
                        {formData.category && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                          >
                            <label className="block text-sm font-bold text-[#1B365D] mb-2">Specific Role *</label>
                            <div className="relative">
                              {/* ADDED name="Role" */}
                              <select
                                name="Role" required
                                value={formData.role}
                                onChange={(e) => setFormData({...formData, role: e.target.value})}
                                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#8DC63F]/50 focus:border-[#8DC63F] outline-none transition-all appearance-none cursor-pointer"
                              >
                                <option value="" disabled>Select Role</option>
                                {roles[formData.category as keyof typeof roles].map((role) => (
                                  <option key={role} value={role}>{role}</option>
                                ))}
                              </select>
                              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* CV Upload Area */}
                    <div>
                      <label className="block text-sm font-bold text-[#1B365D] mb-2">Upload Resume / CV *</label>
                      <div className="relative border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:border-[#8DC63F] hover:bg-[#8DC63F]/5 transition-all group bg-white">
                        {/* ADDED name="attachment" so Web3Forms captures it */}
                        <input
                          type="file" name="attachment" required accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="flex flex-col items-center justify-center text-center pointer-events-none">
                          {file ? (
                            <>
                              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
                                <FileText className="w-6 h-6" />
                              </div>
                              <p className="text-sm font-bold text-[#1B365D]">{file.name}</p>
                              <p className="text-xs text-gray-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </>
                          ) : (
                            <>
                              <div className="w-12 h-12 bg-gray-100 text-gray-500 group-hover:bg-[#8DC63F]/20 group-hover:text-[#0A5C36] rounded-full flex items-center justify-center mb-3 transition-colors">
                                <UploadCloud className="w-6 h-6" />
                              </div>
                              <p className="text-sm font-bold text-[#1B365D]">Click to upload or drag and drop</p>
                              <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max 10MB)</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {submitStatus === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                        className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-semibold flex items-start gap-3"
                      >
                        <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold">Upload failed</p>
                          <p>{errorMessage}</p>
                        </div>
                      </motion.div>
                    )}

                    <div className="pt-4 border-t border-gray-100">
                      <motion.button
                        whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                        type="submit" disabled={isSubmitting || !file}
                        className="w-full bg-[#1B365D] hover:bg-[#0A5C36] text-white py-4 rounded-xl font-bold transition-all disabled:opacity-70 flex items-center justify-center gap-2 group shadow-lg"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </span>
                        ) : (
                          <>
                            Submit Application
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </motion.button>
                    </div>

                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}