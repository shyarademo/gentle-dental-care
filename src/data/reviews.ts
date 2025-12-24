export interface Review {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Jennifer M.",
    treatment: "Teeth Whitening",
    rating: 5,
    review: "Dr. Mitchell and her team are absolutely wonderful! I was nervous about teeth whitening, but they made me feel so comfortable. My teeth are several shades whiter and I couldn't be happier with the results!",
    date: "2024-01-15",
    verified: true
  },
  {
    id: "2",
    name: "Robert K.",
    treatment: "Dental Implants",
    rating: 5,
    review: "After losing a tooth, I was devastated. Dr. Mitchell's expertise in dental implants gave me my confidence back. The process was smoother than I expected, and the result looks completely natural.",
    date: "2024-01-10",
    verified: true
  },
  {
    id: "3",
    name: "Amanda L.",
    treatment: "Invisalign",
    rating: 5,
    review: "I always wanted straighter teeth but hated the idea of metal braces. Invisalign with Dr. Mitchell was the perfect solution. 14 months later, my smile is perfect and no one even knew I was straightening my teeth!",
    date: "2024-01-05",
    verified: true
  },
  {
    id: "4",
    name: "Michael S.",
    treatment: "Root Canal Treatment",
    rating: 5,
    review: "I was terrified of getting a root canal, but Dr. Mitchell's gentle approach changed everything. I felt no pain during the procedure, and she saved my tooth. Highly recommend!",
    date: "2023-12-28",
    verified: true
  },
  {
    id: "5",
    name: "Sarah T.",
    treatment: "Cosmetic Dentistry",
    rating: 5,
    review: "My smile transformation is unbelievable! Dr. Mitchell took the time to understand exactly what I wanted and delivered beyond my expectations. The veneers look so natural, everyone thinks they're my real teeth.",
    date: "2023-12-20",
    verified: true
  },
  {
    id: "6",
    name: "David W.",
    treatment: "Preventive Care",
    rating: 4,
    review: "Great experience with my regular cleaning. The hygienist was thorough and gentle, and Dr. Mitchell took time to explain my dental health in detail. The only reason for 4 stars is the short wait time.",
    date: "2023-12-15",
    verified: true
  },
  {
    id: "7",
    name: "Emily R.",
    treatment: "Dental Crowns",
    rating: 5,
    review: "After breaking a tooth, I needed a crown urgently. Dr. Mitchell fit me in quickly and the crown matches my other teeth perfectly. You can't tell it's not a natural tooth!",
    date: "2023-12-10",
    verified: true
  },
  {
    id: "8",
    name: "James H.",
    treatment: "Teeth Whitening",
    rating: 5,
    review: "Professional, efficient, and amazing results. My coffee-stained teeth are now bright white. The staff is friendly and the office is spotless. Will definitely be returning!",
    date: "2023-12-05",
    verified: true
  }
];

export const treatmentTypes = [
  "Cosmetic Dentistry",
  "Teeth Whitening",
  "Dental Implants",
  "Invisalign",
  "Root Canal Treatment",
  "Dental Crowns",
  "Preventive Care",
  "Other"
];
