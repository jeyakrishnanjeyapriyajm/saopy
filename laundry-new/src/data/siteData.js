import {
  serviceFlow1,
  serviceFlow2,
  serviceFlow3,
  service1,
  service2,
  service3,
  service4,
  service5,
  secondary1,
  secondary2,
  secondary3,
  secondary4,
  secondary5,
  secondary6,
  secondary7,
  secondary8,
  care,
  eco,
  friendly,
  modern,
  refresh,
  truck,
  userProfile,
} from "../assets";



export const services = [
  {
    id: 1,
    title: "Blankets & Covers",
    image: service1,
    desc: "Deep cleaning for blankets, duvets, bed covers, and other bulky household fabrics with proper care and freshness.",
    bullets: [
      "Careful cleaning for heavy fabrics",
      "Fresh smell and hygienic finish",
      "Safe process for soft materials",
    ],
  },
  {
    id: 2,
    title: "Pickup & Delivery",
    image: service2,
    desc: "Convenient collection and doorstep delivery service designed to save your time and make laundry easy.",
    bullets: [
      "Easy doorstep pickup",
      "Timely and reliable delivery",
      "Perfect for busy homes and businesses",
    ],
  },
 {
  id: 3,
  title: "Self wash and dry",
  image: service3,
  desc: `We welcome all our amazing customers to visit our launderette and enjoy a self-service laundry experience in a friendly and relaxing environment.
  
Wash your clothes yourself, use your own detergent, and dry them at your convenience. With good music, a warm atmosphere, and coffee available, we aim to make your laundry experience comfortable and enjoyable.`,
  bullets: [
    "Cleaned with care",
   
  ],
},

  {
    id: 4,
    title: "Express Service",
    image: service4,
    desc: "Fast turnaround laundry solution when you need your garments cleaned and returned as quickly as possible.",
    bullets: [
      "Quick processing time",
      "Reliable urgent service",
      "Great for last-minute needs",
    ],
  },
  {
    id: 5,
    title: "Ironing Service",
    image: service5,
    desc: "Professional ironing and finishing for clothes, uniforms, and other fabric items for a crisp, polished look.",
    bullets: [
      "Wrinkle-free finishing",
      "Suitable for uniforms and daily wear",
      "Neat, professional presentation",
    ],
  },

];

export const flowSteps = [
  {
    id: 1,
    title: "Book Your Service",
    description:
      "Choose your service and schedule a convenient pickup or drop-off time.",
    image: serviceFlow1,
  },
  {
    id: 2,
    title: "We Clean With Care",
    description:
      "Your garments are sorted, cleaned, and treated using the right process for each fabric.",
    image: serviceFlow2,
  },
  {
    id: 3,
    title: "Fresh Delivery",
    description:
      "Your items are packed neatly and returned fresh, clean, and ready to use.",
    image: serviceFlow3,
  },
];

export const whyChooseData = [
  {
    id: 1,
    title: "Premium Fabric Care",
    description:
      "We treat every garment with the right cleaning method for long-lasting freshness and quality.",
    icon: care,
  },
  {
    id: 2,
    title: "Eco Friendly Process",
    description:
      "Our cleaning process is designed to be safer for your clothes and kinder to the environment.",
    icon: eco,
  },
  {
    id: 3,
    title: "Friendly Service",
    description:
      "From booking to delivery, we focus on a smooth and helpful customer experience.",
    icon: friendly,
  },
  {
    id: 4,
    title: "Modern Laundry Solutions",
    description:
      "Efficient systems and careful handling help us deliver reliable laundry service every time.",
    icon: modern,
  },
  {
    id: 5,
    title: "Fresh & Hygienic Finish",
    description:
      "Your laundry is returned clean, fresh-smelling, and neatly prepared for immediate use.",
    icon: refresh,
  },
  {
    id: 6,
    title: "Pickup & Delivery Convenience",
    description:
      "Save time with easy collection and delivery designed around your daily schedule.",
    icon: truck,
  },
];

export const testimonial = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Regular Customer",
    image: userProfile,
    review:
      "Excellent service and very convenient pickup. My clothes always come back fresh, neat, and perfectly folded.",
    rating: 5,
  },
  {
    id: 2,
    name: "Daniel R.",
    role: "Busy Professional",
    image: userProfile,
    review:
      "The express service is a lifesaver. Reliable, quick, and the quality has been consistently great.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma T.",
    role: "Family Customer",
    image: userProfile,
    review:
      "Friendly team, easy booking process, and very good care for delicate items. Highly recommended.",
    rating: 5,
  },
];

export const commercialServices = [
  {
    id: 1,
    title: "Care Homes & Nursing Homes",
    image: secondary1,
    desc: "Reliable laundry services ensuring hygiene, comfort, and care for residents with consistent quality.",
  },
  {
    id: 2,
    title: "Catering & Hospitality",
    image: secondary2,
    desc: "Professional cleaning for linens, uniforms, and kitchen fabrics to maintain high service standards.",
  },
  {
    id: 3,
    title: "Commercial & Industrial Businesses",
    image: secondary3,
    desc: "Durable and efficient laundry solutions tailored for large-scale operations and heavy-duty fabrics.",
  },
  {
    id: 4,
    title: "Hotels & Guest Services",
    image: secondary4,
    desc: "Premium laundry care for bedding, towels, and guest essentials with quick turnaround and quality finish.",
  },
  {
    id: 5,
    title: "Hotels & Guest Services",
    image: secondary5,
    desc: "Consistent and high-quality laundry service designed to meet hospitality industry expectations.",
  },
  {
    id: 6,
    title: "Nurseries & Schools",
    image: secondary6,
    desc: "Safe and hygienic cleaning for uniforms, bedding, and daily-use fabrics for children’s environments.",
  },
  {
    id: 7,
    title: "Sports Clubs",
    image: secondary7,
    desc: "Specialized cleaning for sportswear, kits, and towels to maintain freshness and performance standards.",
  },
  {
    id: 8,
    title: "Staff Uniforms",
    image: secondary8,
    desc: "Professional cleaning and finishing for uniforms to keep your team looking sharp and presentable.",
  },
];
export const navLinks = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Services",
    path: "/services",
  },
  {
    id: 3,
    label: "Contact",
    path: "/contact",
  },
];
export const faqs = [
  {
    id: 1,
    question: "How does pickup and delivery work?",
    answer:
      "You can book online or call us. We collect your laundry, clean it, and deliver it back at your preferred time.",
  },
  {
    id: 2,
    question: "What services do you offer?",
    answer:
      "We provide wash & fold, ironing, dry cleaning, express services, and commercial laundry solutions.",
  },
  {
    id: 3,
    question: "How long does it take?",
    answer:
      "Standard service takes 24–48 hours. Express service is available for faster delivery.",
  },
  {
    id: 4,
    question: "Do you handle delicate fabrics?",
    answer:
      "Yes, we carefully treat delicate garments using suitable cleaning methods.",
  },
  {
    id: 5,
    question: "How can I contact you?",
    answer:
      "You can contact us via phone, WhatsApp, or through the website contact form.",
  },
];