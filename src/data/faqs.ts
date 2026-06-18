export interface Faq {
  q: string;
  a: string;
  group: "pricing" | "treatments" | "safety" | "visit";
}

export const faqs: Faq[] = [
  {
    group: "pricing",
    q: "Will you tell me the price before I commit?",
    a: "Yes - that's the whole point of how we work. You'll know the cost of any recommended treatment before anything begins, at a free aesthetic-doctor consultation. No hidden fees, no surprise at the counter. Indicative ranges on this site are confirmed and tailored to you in person.",
  },
  {
    group: "pricing",
    q: "Why don't you publish a full fixed price list online?",
    a: "Aesthetic treatments are planned per person - the number of sessions, areas and products differs from patient to patient. We publish honest indicative ranges so you're never in the dark, then give you an exact, written quote at your free consultation. That's transparency without pretending everyone needs the same thing.",
  },
  {
    group: "pricing",
    q: "Is the consultation really free?",
    a: "Yes. Your first aesthetic-doctor consultation is free. You'll get a proper assessment and a clear plan with pricing, and you're under no obligation to book anything on the day.",
  },
  {
    group: "treatments",
    q: "What does 'Korean-influenced' actually mean here?",
    a: "It's a method, not a marketing word. We use Korean techniques and products - Korean fillers (Neuramis, Yvoire), Korean Mesolipo, Korean PDO threads, Ultraformer HIFU - and the Korean approach of lighter doses applied in more layers, for results that look natural rather than done. Read more on our Korean Influence page.",
  },
  {
    group: "treatments",
    q: "Are treatments done by a doctor?",
    a: "Injectables and medical procedures are doctor-led. Some facials and maintenance treatments are delivered by trained aestheticians under clinical supervision - and we'll always tell you who is doing what, and why, so you can choose.",
  },
  {
    group: "safety",
    q: "Is DermaMedics a licensed medical clinic?",
    a: "Yes. We are an established clinic inside Centuria Medical Makati, one of the city's premier medical buildings, listed on its official directory. Our physicians are PRC-licensed and verifiable through the PRC online registry. Clinic licensing details are available on request.",
  },
  {
    group: "safety",
    q: "How safe are the slimming and IV treatments?",
    a: "Every treatment is assessed by a doctor first, and we keep our wellness claims conservative and honest. Slimming treatments refine targeted areas - they aren't a substitute for weight loss, and we'll say so. IV drips are doctor-supervised. If something isn't right for you, we'll tell you.",
  },
  {
    group: "visit",
    q: "Which branch should I visit - 9F or 17F?",
    a: "Both are inside Centuria Medical Makati. The 17th-floor main branch is our flagship for doctor-led injectables, anti-ageing and lasers (Dr. Tan, Dr. Tee). The 9th-floor branch is the facial & body center, home to Doc Jam for slimming and Korean fillers. If you're unsure, message us and we'll point you to the right floor.",
  },
  {
    group: "visit",
    q: "How do I book?",
    a: "The fastest way is Facebook Messenger - it's how most of our patients reach us. You can also call the main branch on 0905 110 8060, or use the form on our book-a-consultation page. Walk-ins are accommodated, but booking means no waiting.",
  },
  {
    group: "visit",
    q: "What are your opening hours?",
    a: "Both branches are open daily, 10:00 AM to 8:00 PM. Booking ahead is recommended, especially evenings and weekends.",
  },
];
