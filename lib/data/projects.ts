// Residential Projects Data
export interface Project {
  id: number;
  title: string;
  location: string;
  capacity: string;
  image: string;
  category: string;
  savings: string;
  completionDate: string;
  description: string;
}

export const residentialProjects: Project[] = [
  {
    id: 1,
    title: "Luxury Villa Solar System",
    location: "DHA Phase 6, Lahore",
    capacity: "15 kW",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    category: "Residential",
    savings: "90% reduction in bills",
    completionDate: "Jan 2024",
    description: "Complete off-grid solution for a 5-bedroom luxury villa with battery backup system."
  },
  {
    id: 2,
    title: "Modern Home Installation",
    location: "Bahria Town, Islamabad",
    capacity: "10 kW",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
    category: "Residential",
    savings: "85% bill savings",
    completionDate: "Feb 2024",
    description: "Hybrid solar system with net metering for a modern family home."
  },
  {
    id: 3,
    title: "Farmhouse Energy Solution",
    location: "Raiwind, Lahore",
    capacity: "20 kW",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    category: "Residential",
    savings: "100% energy independent",
    completionDate: "Dec 2023",
    description: "Large-scale residential installation powering entire farmhouse complex and agricultural needs."
  },
  {
    id: 4,
    title: "Townhouse Solar Array",
    location: "Gulberg, Lahore",
    capacity: "8 kW",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084",
    category: "Residential",
    savings: "75% cost reduction",
    completionDate: "Mar 2024",
    description: "Compact rooftop solution optimized for urban townhouse living."
  },
  {
    id: 5,
    title: "Eco-Friendly Residence",
    location: "E-7, Islamabad",
    capacity: "12 kW",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
    category: "Residential",
    savings: "88% energy savings",
    completionDate: "Jan 2024",
    description: "Grid-tied system with smart monitoring for environmentally conscious homeowners."
  },
  {
    id: 6,
    title: "Bungalow Power System",
    location: "Cantt, Rawalpindi",
    capacity: "18 kW",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070",
    category: "Residential",
    savings: "95% bill reduction",
    completionDate: "Nov 2023",
    description: "Premium solar installation with Tesla Powerwall integration for 24/7 power availability."
  }
];

export const commercialProjects: Project[] = [
  {
    id: 7,
    title: "Corporate Office Complex",
    location: "Gulberg III, Lahore",
    capacity: "100 kW",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    category: "Commercial",
    savings: "PKR 450K/month saved",
    completionDate: "Feb 2024",
    description: "Large-scale commercial installation powering a 10-story office building with complete backup."
  },
  {
    id: 8,
    title: "Manufacturing Facility",
    location: "Sundar Industrial Estate, Lahore",
    capacity: "250 kW",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070",
    category: "Industrial",
    savings: "PKR 1.2M/month saved",
    completionDate: "Dec 2023",
    description: "Industrial-grade solar solution reducing operational costs for textile manufacturing."
  },
  {
    id: 9,
    title: "Shopping Mall Solar Grid",
    location: "Packages Mall, Lahore",
    capacity: "150 kW",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2077",
    category: "Commercial",
    savings: "PKR 650K/month saved",
    completionDate: "Jan 2024",
    description: "Rooftop solar array meeting 70% of daily energy requirements for major retail complex."
  },
  {
    id: 10,
    title: "Hotel Energy System",
    location: "MM Alam Road, Lahore",
    capacity: "80 kW",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2032",
    category: "Hospitality",
    savings: "PKR 380K/month saved",
    completionDate: "Mar 2024",
    description: "Hybrid solar system with battery storage ensuring uninterrupted power for luxury hotel."
  },
  {
    id: 11,
    title: "Educational Institution",
    location: "Johar Town, Lahore",
    capacity: "120 kW",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086",
    category: "Education",
    savings: "PKR 520K/month saved",
    completionDate: "Nov 2023",
    description: "Campus-wide solar installation powering classrooms, labs, and administrative buildings."
  },
  {
    id: 12,
    title: "Warehouse Distribution Center",
    location: "Manga Mandi, Lahore",
    capacity: "200 kW",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    category: "Industrial",
    savings: "PKR 850K/month saved",
    completionDate: "Dec 2023",
    description: "Massive rooftop array powering cold storage and distribution operations 24/7."
  }
];
