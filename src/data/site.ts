// ---------------------------------------------------------------------------
// DermaMedics Makati - single source of truth for business facts.
// Only verified / client-supplied facts live here. Anything unconfirmed is
// either omitted or marked. No fabricated licence numbers or prices.
// ---------------------------------------------------------------------------

export const business = {
  name: "DermaMedics",
  legalName: "DermaMedics Skin & Cosmetic Surgery Clinic",
  tagline: "Elevating Beauty Since 2010",
  subtitle: "Skin & Cosmetic Surgery Clinic",
  founded: 2010,
  yearsLabel: "15 years",
  building: "Centuria Medical Makati",
  district: "Century City, Makati",

  // Primary unified number (Main / 17F branch)
  phonePrimaryDisplay: "0905 110 8060",
  phonePrimaryTel: "+639051108060",
  phonePrimaryIntl: "+63 905 110 8060",

  // Messenger is the #1 booking channel in PH aesthetics
  messenger: "https://m.me/DermamedicsSkinMakati",
  messengerSecondary: "https://m.me/DermamedicsSkinCare",
  messengerLabel: "m.me/DermamedicsSkinMakati",

  instagram: "https://instagram.com/dermamedics_skincenter",
  instagramHandle: "@dermamedics_skincenter",
  facebook: "https://www.facebook.com/DermamedicsSkinMakati",

  hours: "Open daily · 10:00 AM – 8:00 PM",
  hoursShort: "Daily 10AM – 8PM",

  // Verified aggregate social proof (research-confirmed figures)
  googleRating: "4.3",
  googleReviewCount: "115",
  facebookCommunity: "11,662",

  email: "hello@dermamedics.ph",
};

export interface Branch {
  id: string;
  name: string;
  floor: string;
  unit: string;
  addressLine: string;
  cityLine: string;
  phoneDisplay: string;
  phoneTel: string;
  phoneExtra?: string[];
  doctors: string[];
  note: string;
  mapQuery: string;
  isMain: boolean;
}

export const branches: Branch[] = [
  {
    id: "main-17f",
    name: "Main Branch - 17F",
    floor: "17th Floor",
    unit: "Units 1725–1726",
    addressLine: "17F Units 1725–1726, Centuria Medical Makati",
    cityLine: "Kalayaan Ave. cor. Salamanca St., Brgy. Poblacion, Makati City 1210",
    phoneDisplay: "0905 110 8060",
    phoneTel: "+639051108060",
    phoneExtra: ["(02) 8366 7782", "(02) 8877 9580", "0967 290 2534"],
    doctors: ["Dr. Leslie Suyen Tan", "Dr. Adelsa Tee"],
    note: "Our flagship floor for doctor-led aesthetic medicine, anti-ageing and laser work.",
    mapQuery: "Centuria+Medical+Makati",
    isMain: true,
  },
  {
    id: "branch-9f",
    name: "9F Branch",
    floor: "9th Floor",
    unit: "Unit 934",
    addressLine: "9F Unit 934, Centuria Medical Makati",
    cityLine: "Kalayaan Ave. cor. Salamanca St., Brgy. Poblacion, Makati City 1210",
    phoneDisplay: "0917 777 5154",
    phoneTel: "+639177775154",
    doctors: ["Doc Jam"],
    note: "The facial & body center, home to Doc Jam - beloved in our reviews for slimming and Korean fillers.",
    mapQuery: "Centuria+Medical+Makati",
    isMain: false,
  },
];

export interface Doctor {
  slug: string;
  name: string;
  title: string;
  branch: string;
  blurb: string;
  specialisms: string[];
  // Only verified facts. Credentials to be supplied/verified by client.
  credentialNote: string;
}

export const doctors: Doctor[] = [
  {
    slug: "leslie-suyen-tan",
    name: "Dr. Leslie Suyen Tan",
    title: "Aesthetic Physician",
    branch: "Main Branch - 17F",
    blurb:
      "A founding clinical presence at our 17th-floor flagship, Dr. Tan leads doctor-administered injectables, anti-ageing and laser protocols with the measured, conservative hand that defines a fifteen-year practice.",
    specialisms: ["Korean fillers", "Botox & neuromodulators", "Anti-ageing", "Lasers"],
    credentialNote:
      "PRC-licensed physician, listed on the official Centuria Medical Makati directory. Specific board fellowships and licence numbers are verified at consultation.",
  },
  {
    slug: "adelsa-tee",
    name: "Dr. Adelsa Tee",
    title: "Aesthetic Physician",
    branch: "Main Branch - 17F",
    blurb:
      "Dr. Tee shares the 17th-floor clinical roster, with a focus on skin health, brightening and treatment planning - the unhurried consultations our patients return for.",
    specialisms: ["Skin brightening", "Anti-acne", "Thread lifts", "Treatment planning"],
    credentialNote:
      "PRC-licensed physician, listed on the official Centuria Medical Makati directory. Specific board fellowships and licence numbers are verified at consultation.",
  },
  {
    slug: "doc-jam",
    name: "Doc Jam",
    title: "Aesthetic Doctor - 9F",
    branch: "9F Branch",
    blurb:
      "The most-named doctor in our reviews. Patients come to the 9th floor for Doc Jam's slimming, Korean filler and body work - and they come back. The kind of loyalty fifteen years is built on.",
    specialisms: ["Korean Mesolipo", "Korean fillers", "Body slimming", "Slimming packages"],
    credentialNote:
      "Aesthetic doctor at our 9F branch. Full credentials are confirmed in person - this profile leads with what patients consistently say rather than claims we have not verified online.",
  },
];

// Quantified differentiators for the stat band
export const stats = [
  { value: "2010", label: "Elevating beauty since" },
  { value: "15 yrs", label: "in Centuria Medical Makati" },
  { value: "3", label: "doctors, two branches" },
  { value: "11,662", label: "strong community" },
];

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const nav: NavItem[] = [
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "Aesthetic Medicine", href: "/treatments/aesthetic-medicine" },
      { label: "Body Slimming", href: "/treatments/body-slimming" },
      { label: "Anti-Ageing", href: "/treatments/anti-ageing" },
      { label: "Skin Brightening", href: "/treatments/skin-brightening" },
      { label: "Acne & Problem Skin", href: "/treatments/acne" },
      { label: "IV Drips & Wellness", href: "/treatments/iv-drips" },
      { label: "Lasers & Resurfacing", href: "/treatments/lasers" },
      { label: "Tattoo Removal", href: "/treatments/tattoo-removal" },
    ],
  },
  {
    label: "Clinic",
    href: "/about",
    children: [
      { label: "About DermaMedics", href: "/about" },
      { label: "Our Doctors", href: "/doctors" },
      { label: "Two Branches", href: "/branches" },
      { label: "Korean Influence", href: "/korean-influence" },
      { label: "Your First Visit", href: "/first-visit" },
    ],
  },
  { label: "Pricing", href: "/transparent-pricing" },
  { label: "Results", href: "/before-after-gallery" },
  { label: "Quiz", href: "/treatment-discovery-quiz" },
  { label: "Contact", href: "/contact" },
];

// Today, formatted Asia/Manila, DD MMM YYYY editorial
export function manilaDate(): string {
  return new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date());
}
