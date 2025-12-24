import { 
  Sparkles, 
  SmilePlus, 
  CircleDot, 
  Stethoscope, 
  ShieldCheck, 
  Heart,
  Zap,
  Scan
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: typeof Sparkles;
  duration: string;
  benefits: string[];
  whoIsItFor: string;
}

export const services: Service[] = [
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDescription: "Transform your smile with advanced cosmetic procedures tailored to your unique features.",
    fullDescription: "Our cosmetic dentistry services combine artistry with cutting-edge technology to create stunning, natural-looking results. From smile makeovers to veneer applications, we craft personalized treatment plans that enhance your natural beauty.",
    icon: Sparkles,
    duration: "Varies by treatment",
    benefits: [
      "Natural-looking results",
      "Boost in self-confidence",
      "Long-lasting improvements",
      "Personalized treatment plans"
    ],
    whoIsItFor: "Anyone looking to enhance their smile aesthetics, address discoloration, chips, or alignment issues."
  },
  {
    id: "teeth-whitening",
    title: "Professional Teeth Whitening",
    shortDescription: "Achieve a brilliantly white smile with our safe, professional whitening treatments.",
    fullDescription: "Our professional whitening treatments deliver dramatic results in just one visit. Using advanced LED technology and professional-grade whitening agents, we can lighten your teeth by several shades while protecting your enamel.",
    icon: Zap,
    duration: "60-90 minutes",
    benefits: [
      "Immediate visible results",
      "Safe for enamel",
      "Long-lasting brightness",
      "Reduced sensitivity formulas"
    ],
    whoIsItFor: "Individuals with stained or yellowed teeth from coffee, wine, smoking, or natural aging."
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Restore missing teeth with permanent, natural-feeling dental implants.",
    fullDescription: "Dental implants are the gold standard for tooth replacement. Our precision implant procedures provide a permanent foundation for replacement teeth that look, feel, and function like natural teeth.",
    icon: CircleDot,
    duration: "3-6 months (full treatment)",
    benefits: [
      "Permanent solution",
      "Preserves jawbone health",
      "Natural look and feel",
      "No dietary restrictions"
    ],
    whoIsItFor: "Patients with one or more missing teeth who want a permanent, maintenance-free solution."
  },
  {
    id: "invisalign",
    title: "Invisalign Clear Aligners",
    shortDescription: "Straighten your teeth discreetly with virtually invisible clear aligners.",
    fullDescription: "Invisalign uses custom-made clear aligners to gradually shift your teeth into perfect alignment. With no metal brackets or wires, you can straighten your smile comfortably and confidently.",
    icon: SmilePlus,
    duration: "12-18 months",
    benefits: [
      "Virtually invisible",
      "Removable for eating",
      "Comfortable to wear",
      "Predictable results"
    ],
    whoIsItFor: "Teens and adults with mild to moderate alignment issues who prefer a discreet treatment option."
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    shortDescription: "Save your natural tooth with gentle, modern root canal therapy.",
    fullDescription: "Modern root canal treatment is nothing like its reputation. Using advanced techniques and anesthesia, we can save infected teeth with minimal discomfort, preserving your natural smile.",
    icon: Stethoscope,
    duration: "60-90 minutes",
    benefits: [
      "Saves natural tooth",
      "Eliminates infection",
      "Relieves tooth pain",
      "Prevents extraction"
    ],
    whoIsItFor: "Patients with deep decay, infection, or injury affecting the tooth's pulp."
  },
  {
    id: "dental-crowns",
    title: "Dental Crowns & Bridges",
    shortDescription: "Restore damaged teeth with beautiful, durable crowns and bridges.",
    fullDescription: "Our custom-crafted crowns and bridges restore both function and aesthetics to damaged or missing teeth. Using premium materials, we create restorations that blend seamlessly with your natural teeth.",
    icon: ShieldCheck,
    duration: "2 visits over 2 weeks",
    benefits: [
      "Restores tooth function",
      "Natural appearance",
      "Long-lasting durability",
      "Protects damaged teeth"
    ],
    whoIsItFor: "Patients with cracked, weakened, or severely decayed teeth, or those needing to replace missing teeth."
  },
  {
    id: "preventive-care",
    title: "Preventive Care & Cleanings",
    shortDescription: "Maintain optimal oral health with regular checkups and professional cleanings.",
    fullDescription: "Prevention is the foundation of lasting oral health. Our comprehensive preventive care includes thorough examinations, professional cleanings, and personalized guidance to keep your smile healthy for life.",
    icon: Heart,
    duration: "45-60 minutes",
    benefits: [
      "Early problem detection",
      "Prevents costly treatments",
      "Fresh, clean smile",
      "Personalized care tips"
    ],
    whoIsItFor: "Everyone! Regular preventive care is essential for maintaining oral health at any age."
  },
  {
    id: "digital-xrays",
    title: "Digital X-Rays & Diagnostics",
    shortDescription: "Advanced digital imaging for precise diagnosis and treatment planning.",
    fullDescription: "Our state-of-the-art digital imaging technology provides detailed views of your teeth, gums, and jaw with up to 90% less radiation than traditional X-rays. This enables accurate diagnosis and better treatment outcomes.",
    icon: Scan,
    duration: "15-20 minutes",
    benefits: [
      "90% less radiation",
      "Instant results",
      "Detailed imaging",
      "Better treatment planning"
    ],
    whoIsItFor: "All patients as part of regular checkups or when investigating specific dental concerns."
  }
];
