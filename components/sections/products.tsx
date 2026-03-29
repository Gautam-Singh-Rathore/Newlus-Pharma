// 'use client';

// import { useState } from 'react';
// import { Check } from 'lucide-react';

// const products = [
//   {
//     category: 'Cardiovascular',
//     items: [
//       {
//         name: 'CardioCare Plus',
//         description: 'Advanced hypertension management solution',
//         features: ['Improved blood pressure control', 'Enhanced cardiac output', 'Minimal side effects'],
//       },
//       {
//         name: 'ArteryGuard',
//         description: 'Cholesterol and arterial health support',
//         features: ['LDL reduction up to 40%', 'Vascular protection', 'Long-term cardiovascular support'],
//       },
//     ],
//   },
//   {
//     category: 'Metabolic',
//     items: [
//       {
//         name: 'MetaBalance',
//         description: 'Comprehensive diabetes management',
//         features: ['Enhanced glucose control', 'Improved insulin sensitivity', 'Renal protection'],
//       },
//       {
//         name: 'WeightWise',
//         description: 'Obesity and metabolic disorder treatment',
//         features: ['Sustained weight management', 'Metabolic improvement', 'Quality of life enhancement'],
//       },
//     ],
//   },
//   {
//     category: 'Immune Support',
//     items: [
//       {
//         name: 'ImmuneBoost',
//         description: 'Advanced immune system enhancement',
//         features: ['Enhanced immune response', 'Reduced infection rates', 'Long-lasting immunity'],
//       },
//       {
//         name: 'InflammaX',
//         description: 'Anti-inflammatory and autoimmune therapy',
//         features: ['Targeted inflammation control', 'Fewer adverse events', 'Improved quality of life'],
//       },
//     ],
//   },
// ];

// export function Products() {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const currentCategory = products[activeCategory];

//   return (
//     <section
//       id="products"
//       className="py-20 bg-background border-t border-border"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
//           <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
//             Our Products
//           </h2>
//           <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
//             Innovative pharmaceutical solutions across multiple therapeutic areas.
//           </p>
//         </div>

//         {/* Category Tabs */}
//         <div className="flex justify-center gap-4 mb-12 flex-wrap animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
//           {products.map((product, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveCategory(index)}
//               className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
//                 activeCategory === index
//                   ? 'bg-primary text-primary-foreground shadow-lg'
//                   : 'bg-muted text-foreground hover:bg-muted/80'
//               }`}
//             >
//               {product.category}
//             </button>
//           ))}
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
//           {currentCategory.items.map((item, index) => (
//             <div
//               key={index}
//               className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
//             >
//               <h3 className="text-2xl font-bold text-foreground mb-2">
//                 {item.name}
//               </h3>
//               <p className="text-foreground/70 mb-6">{item.description}</p>

//               <div className="space-y-3">
//                 {item.features.map((feature, fIndex) => (
//                   <div key={fIndex} className="flex items-center gap-3">
//                     <Check className="w-5 h-5 text-primary flex-shrink-0" />
//                     <span className="text-foreground/80">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <button className="mt-6 w-full px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-medium transition-colors">
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useState } from 'react';
import { Check, ArrowRight, Pill, Bone, Stethoscope } from 'lucide-react';

const products = [
  {
    category: 'Gynecology',
    icon: Pill,
    items: [
      {
        name: 'FemCare Plus',
        description: 'Comprehensive nutritional support for maternal health and fetal development.',
        features: ['High-absorption Iron & Folic Acid', 'Essential vitamins for pregnancy', 'Gentle on the stomach'],
      },
      {
        name: 'OvaBalance',
        description: 'Hormonal support and PCOS management solution.',
        features: ['Myo-Inositol based formula', 'Regulates menstrual cycles', 'Supports reproductive health'],
      },
      {
        name: 'Calcium D3 Max',
        description: 'Bone density support tailored for post-menopausal women.',
        features: ['Premium Calcium Citrate', 'Enhanced with Vitamin D3 & K2', 'Reduces fracture risk'],
      },
    ],
  },
  {
    category: 'Orthopedics',
    icon: Bone,
    items: [
      {
        name: 'JointFlex Pro',
        description: 'Advanced cartilage repair and osteoarthritis management.',
        features: ['Glucosamine & Chondroitin complex', 'Reduces joint stiffness', 'Improves mobility'],
      },
      {
        name: 'OsteoHeal',
        description: 'Accelerated bone healing and fracture recovery supplement.',
        features: ['Cissus Quadrangularis extract', 'Promotes osteoblast activity', 'Reduces recovery time'],
      },
      {
        name: 'NerveCalm',
        description: 'Targeted relief for neuropathic pain and sciatica.',
        features: ['Pregabalin & Methylcobalamin', 'Reduces nerve inflammation', 'Fast-acting relief'],
      },
    ],
  },
  {
    category: 'General Physician',
    icon: Stethoscope,
    items: [
      {
        name: 'GastroSoothe',
        description: 'Rapid relief for hyperacidity, GERD, and gastric ulcers.',
        features: ['Proton Pump Inhibitor (PPI)', 'Extended 24-hour relief', 'Heals esophageal lining'],
      },
      {
        name: 'RespiClear',
        description: 'Effective management for respiratory tract infections and bronchitis.',
        features: ['Broad-spectrum antibiotic', 'Reduces mucosal inflammation', 'Fast symptomatic relief'],
      },
      {
        name: 'VitoDaily',
        description: 'Complete daily multivitamin and antioxidant complex for general wellness.',
        features: ['Essential B-Complex', 'Boosts natural immunity', 'Combats daily fatigue'],
      },
    ],
  },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState(0);
  const currentCategory = products[activeCategory];

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white overflow-hidden"> 
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 xl:px-24">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8DC63F]/10 border border-[#8DC63F]/20 w-fit mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
            <span className="text-sm font-bold text-[#0A5C36] uppercase tracking-wider">Product Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6 leading-tight">
            Trusted by <span className="text-[#0A5C36]">Healthcare Professionals</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our curated range of premium pharmaceutical products, manufactured to global standards across key therapeutic segments.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-16 flex-wrap animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isActive = activeCategory === index;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full font-bold transition-all duration-300 border-2 ${
                  isActive
                    ? 'bg-[#0A5C36] border-[#0A5C36] text-white shadow-xl scale-105'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-[#8DC63F] hover:text-[#0A5C36] hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#8DC63F]' : 'text-gray-400'}`} />
                {product.category}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {currentCategory.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(10,92,54,0.08)] hover:border-[#8DC63F]/50 transition-all duration-500 group flex flex-col h-full"
            >
              {/* Product Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#1B365D]/5 text-[#1B365D] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                  {currentCategory.category}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#1B365D] mb-3 group-hover:text-[#0A5C36] transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-500 mb-8 flex-grow">
                {item.description}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {item.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="bg-[#8DC63F]/20 p-1 rounded-full mt-0.5">
                      <Check className="w-3 h-3 text-[#0A5C36] stroke-[3]" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}