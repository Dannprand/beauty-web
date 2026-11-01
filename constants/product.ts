import { PrototypeImage, SensoryReel, Ingredient } from "@/types/product";

export const UNIT_PRICE = 349000;

export const PROTOTYPE_IMAGES: PrototypeImage[] = [
  {
    id: "angle-1",
    src: "/assets/prototype%20produk%20lotion.jpg",
    title: "The Architectural Vessel",
    spec: "UV-Protective Ceramic Finish",
    caption: "Studio Front View // Isolated On Sculpted Stone",
  },
  {
    id: "angle-2",
    src: "/assets/prototype%20produk%20lotion%202.jpg",
    title: "Hermetic Micro-Pump",
    spec: "Airless Piston Actuator",
    caption: "Nitrogen Purity Lock // Micro-Dose Dispenser",
  },
  {
    id: "angle-3",
    src: "/assets/prototype%20produk%20lotion%203.jpg",
    title: "Whipped Micro-Emulsion",
    spec: "Sub-Micron Lipid Spheres",
    caption: "Formulation Nuance // Viscosity 5200 CPS",
  },
  {
    id: "angle-4",
    src: "/assets/prototype%20produk%20lotion%204.jpg",
    title: "Curated Regimen Placement",
    spec: "Minimalist Tactile Sculpture",
    caption: "Vanity Still Life // Daily Skin Fitness Context",
  },
];

export const SENSORY_REELS: SensoryReel[] = [
  {
    id: "reel-1",
    title: "Formulation Craft & Whipped Texture",
    subtitle: "High-density micro-emulsion presented in glass flacon under controlled studio illumination.",
    src: "/assets/video%20body%202.mp4",
    badge: "REEL 01 // 4K UHD",
    duration: "52S",
    telemetry: "LIPID REPLENISHMENT • VISCOSITY 5200 CPS",
  },
  {
    id: "reel-2",
    title: "Epidermal Contact & Assimilation",
    subtitle: "Direct skin application demonstrating rapid sub-micron absorption with zero surface tackiness.",
    src: "/assets/video%20body%203.mp4",
    badge: "REEL 02 // HD MOTION",
    duration: "8.7S",
    telemetry: "TRANSEPIDERMAL UPTAKE • INSTANT DEWY FINISH",
  },
  {
    id: "reel-3",
    title: "Atmospheric Essence & Fluidity",
    subtitle: "The tactile and sensory motion of Beauty Lotion conditioning the living cutaneous mantle.",
    src: "/assets/video%20body.mp4",
    badge: "REEL 03 // AMBIENT",
    duration: "CINEMATIC",
    telemetry: "CELLULAR SCIENCE • HYPOALLERGENIC ACCORD",
  },
];

export const INGREDIENTS: Ingredient[] = [
  {
    code: "ACT // 01",
    name: "Bio-Identical Ceramide Triad",
    formula: "Ceramides NP, AP, EOP",
    category: "Lipid Matrix Reconstruction",
    detail: "Physiologically identical to human stratum corneum lipids; seamlessly seals microscopic barrier fractures.",
  },
  {
    code: "ACT // 02",
    name: "Multi-Molecular Hyaluronate",
    formula: "5 Distinct Molecular Weights",
    category: "Deep Stratum Hydration",
    detail: "Low-weight fractions reach deeper dermal reservoirs while high polymers form a breathable moisture shield.",
  },
  {
    code: "ACT // 03",
    name: "Fermented Camellia & Rice Bio-Actives",
    formula: "Bio-Cultured Polyphenols & Amino Acids",
    category: "Oxidative Defense Matrix",
    detail: "Neutralizes urban environmental stress and restores natural epidermal refraction and radiance.",
  },
  {
    code: "ACT // 04",
    name: "Centella Asiatica & Niacinamide 2%",
    formula: "Phyto-Centella + Vitamin B3 Complex",
    category: "Cutaneous Equilibrium & Calming",
    detail: "Downregulates inflammatory cytokine cascades and refines pore micro-texture into a calm, silky finish.",
  },
];

